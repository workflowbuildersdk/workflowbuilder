import { calculateNodePastePositionOffset } from './calculate-pasted-node-position';
import { GetDiagramState, SetDiagramState } from '@/store/store';
import { Draft, produce } from 'immer';
import { addPoints } from '@/utils/points';
import { transformPointFromWindowToDiagramCoordinates } from '@/utils/position-utils';
import { Point } from '@workflow-builder/types/common';
import { getHandleSourceId, getHandleTargetId } from '@/utils/handle-utils';
import { WorkflowBuilderEdge, WorkflowBuilderNode } from '@workflow-builder/types/node-data';

export function pasteElements(
  elements: { nodes?: WorkflowBuilderNode[]; edges?: WorkflowBuilderEdge[] },
  set: SetDiagramState,
  get: GetDiagramState,
  mousePosition: Point,
) {
  const { nodes, edges } = elements;
  const mappedIds: Record<string, string> = {};
  if (nodes) {
    const viewport = get().reactFlowInstance?.getViewport();
    const pastePosition = transformPointFromWindowToDiagramCoordinates(mousePosition, viewport);
    const nodePasteOffset = calculateNodePastePositionOffset(nodes, pastePosition);

    const nodesToPaste = produce(nodes, (draftNodes: Draft<WorkflowBuilderNode>[]) => {
      for (const node of draftNodes) {
        mappedIds[node.id] = crypto.randomUUID();
        node.id = mappedIds[node.id];
        node.position = addPoints(node.position, nodePasteOffset);
        node.selected = true;
      }
    });

    set({
      nodes: [...get().nodes, ...nodesToPaste],
    });
  }
  if (edges) {
    set({
      edges: [
        ...get().edges,
        ...edges.map(({ source, target, sourceHandle, targetHandle, ...edge }) => ({
          ...edge,
          selected: true,
          sourceHandle: sourceHandle ? getHandleSourceId(mappedIds[source] || source) : null,
          targetHandle: targetHandle ? getHandleTargetId(mappedIds[target] || target) : null,
          source: mappedIds[source] || source,
          target: mappedIds[target] || target,
          id: crypto.randomUUID(),
        })),
      ],
    });
  }
}
