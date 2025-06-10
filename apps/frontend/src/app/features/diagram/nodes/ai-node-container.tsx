import useStore from '@/store/store';

import { NodeProps, Position, Node } from '@xyflow/react';
import { NodeData } from '@workflow-builder/types/node-data';
import { memo, useMemo } from 'react';
import { NodeAsPortWrapper } from '@synergycodes/axiom';
import { AiAgentNodeTemplate } from './ai-agent-node-template/ai-agent-node-template';
import { AiAgentNodeSchema } from '../../../data/nodes/ai-agent/schema';
import { NodeDataProperties } from '../../json-form/types/default-properties';
import { chatModelOptions, memoryOptions } from '../../../data/nodes/ai-agent/select-options';

type Props = NodeProps<Node<NodeData<NodeDataProperties<AiAgentNodeSchema>>>>;

export const AiNodeContainer = memo(({ id, data, selected }: Props) => {
  const { icon, properties, type } = data;
  const { label = '', description = '', chatModel, memory } = properties;

  const connectionBeingDragged = useStore((store) => store.connectionBeingDragged);
  const nodeDefinition = useStore((store) => store.getNodeDefinition(type));

  const selectedModelOption = useMemo(() => {
    if (!chatModel || !nodeDefinition) {
      return;
    }
    return Object.values(chatModelOptions).find((x) => x.value === chatModel);
  }, [chatModel, nodeDefinition]);

  const selectedMemoryOptions = useMemo(() => {
    if (!memory || !nodeDefinition) {
      return;
    }
    return Object.values(memoryOptions).find((x) => x.value === memory);
  }, [memory, nodeDefinition]);

  return (
    <NodeAsPortWrapper isConnecting={!!connectionBeingDragged} targetPortPosition={Position.Left}>
      <AiAgentNodeTemplate
        id={id}
        selected={selected}
        label={label}
        description={description}
        icon={icon}
        chatModel={selectedModelOption}
        memoryModel={selectedMemoryOptions}
        selectedTools={data.properties.tools}
      />
    </NodeAsPortWrapper>
  );
});
