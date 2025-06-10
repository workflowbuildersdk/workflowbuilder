import clsx from 'clsx';
import styles from './ai-agent-node-template.module.css';

import { Handle, Position } from '@xyflow/react';
import { IconType } from '@workflow-builder/types/common';
import { getHandleSourceId, getHandleTargetId } from '../../../../utils/handle-utils';
import { memo, useMemo } from 'react';
import { NodeDescription, NodeIcon, NodePanel } from '@synergycodes/axiom';
import { Icon } from '@workflow-builder/icons';
import { ToolNodeItem } from './components/tool-node-item/tool-node-item';
import { SettingInfo } from './components/setting-info/setting-info';
import { ToolInfo } from './components/tool-info/tool-info';
import { ItemOption } from '@workflow-builder/types/node-schema';
import { NodeDataProperties } from '@/features/json-form/types/default-properties';
import { AiAgentNodeSchema } from '../../../../data/nodes/ai-agent/schema';

type Props = {
  id: string;
  icon: IconType;
  label: string;
  description: string;
  selected?: boolean;
  isConnecting?: boolean;
  showHandles?: boolean;
  chatModel?: ItemOption | undefined;
  memoryModel?: ItemOption | undefined;
  selectedTools?: NodeDataProperties<AiAgentNodeSchema>['tools'] | undefined;
};

export const AiAgentNodeTemplate = memo(
  ({
    id,
    icon,
    label,
    description,
    selected = false,
    showHandles = true,
    chatModel,
    memoryModel,
    selectedTools,
  }: Props) => {
    const isCanvasNode = showHandles;
    const handleTargetId = getHandleTargetId(id);
    const handleSourceId = getHandleSourceId(id);

    const iconElement = useMemo(() => <Icon name={icon} size="large" />, [icon]);

    return (
      <NodePanel.Root selected={selected}>
        <NodePanel.Header className={styles['header']}>
          <NodeIcon className={styles['icon']} icon={iconElement} />
          <NodeDescription label={label} description={description} />
          {isCanvasNode && <Handle id={handleTargetId} position={Position.Left} type="target" />}
          {isCanvasNode && <Handle id={handleSourceId} position={Position.Right} type="source" />}
        </NodePanel.Header>
        {isCanvasNode && (
          <NodePanel.Content className={styles['content']}>
            <div>
              <SettingInfo
                label="Chat Model"
                actionLabel={chatModel ? chatModel.label : 'Add Chat'}
                icon={chatModel?.icon}
                className={clsx({ [styles['selected-model-icon']]: chatModel })}
              />
              <SettingInfo
                label="Memory"
                actionLabel={memoryModel ? memoryModel.label : 'Add Memory'}
                icon={memoryModel?.icon}
                className={clsx({ [styles['selected-memory-icon']]: memoryModel })}
              />
              <ToolInfo>
                {selectedTools?.map((_, index) => (
                  <ToolNodeItem key={index} label={`Tool #${++index}`}>
                    <Handle id={`${id}-${index}-tool-source`} position={Position.Right} type="source" />
                  </ToolNodeItem>
                ))}
              </ToolInfo>
            </div>
          </NodePanel.Content>
        )}
      </NodePanel.Root>
    );
  },
);
