import useStore from '@/store/store';
import { NodeDefinition } from '@workflow-builder/types/node-data';
import { NodeSchema } from '@workflow-builder/types/node-schema';
import { useTranslateIfPossible } from '@/hooks/use-translate-if-possible';
import { WorkflowNodeTemplate } from '../diagram/nodes/workflow-node-template/workflow-node-template';

type NodePreviewContainerProps = {
  type: string;
};

export function NodePreviewContainer({ type }: NodePreviewContainerProps) {
  const getNodeDefinition = useStore((state) => state.getNodeDefinition);

  const nodeDefinition = getNodeDefinition(type);
  if (!nodeDefinition) {
    return;
  }

  return <NodePreview nodeDefinition={nodeDefinition} />;
}

type NodePreviewProps = {
  nodeDefinition: NodeDefinition<NodeSchema>;
};

function NodePreview({ nodeDefinition }: NodePreviewProps) {
  const { icon, label, description } = nodeDefinition;

  const translateIfPossible = useTranslateIfPossible();

  const nodeLabel = translateIfPossible(label) || label;
  const nodeDescription = translateIfPossible(description) || description;

  return (
    <WorkflowNodeTemplate icon={icon} label={nodeLabel} description={nodeDescription} showHandles={false} id={''} />
  );
}
