import { LayoutDirection } from '@workflow-builder/types/common';
import { Edge, Position } from '@xyflow/react';
import { pipe, flatMap, uniqueBy, sortBy } from 'remeda';
import { getHandleSourcePosition, getHandleTargetPosition } from '@/utils/handle-utils';

type ElkPort = {
  id: string;
  position: Position;
  nodeId: string;
  handle: string;
};

export function getPortsFromEdges(edges: Edge[], direction: LayoutDirection): ElkPort[] {
  return pipe(
    edges,
    flatMap(({ source, target, sourceHandle, targetHandle }) =>
      !sourceHandle || !targetHandle
        ? []
        : [
            {
              id: `${source}-${sourceHandle}-source`,
              position: getHandleSourcePosition(direction),
              nodeId: source,
              handle: sourceHandle,
            },
            {
              id: `${target}-${targetHandle}-target`,
              position: getHandleTargetPosition(direction),
              nodeId: target,
              handle: targetHandle,
            },
          ],
    ),
    uniqueBy(({ id }) => id),
    sortBy(({ id }) => {
      const element = document.querySelector(`[data-id="${id}"]`);
      return element ? element.getBoundingClientRect().y : 0;
    }),
  );
}
