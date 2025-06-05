import { Handle } from '@xyflow/react';
import { IconType } from '@workflow-builder/types/common';
import { LayoutDirection } from '@workflow-builder/types/common';
import {
  getHandleSourceId,
  getHandleSourcePosition,
  getHandleTargetId,
  getHandleTargetPosition,
} from '../../../../utils/handle-utils';
import { memo, useMemo } from 'react';
import { NodeDescription, NodeIcon, NodePanel, Status } from '@synergycodes/axiom';
import { Icon } from '@workflow-builder/icons';

type Props = {
  id: string;
  icon: IconType;
  label: string;
  description: string;
  selected?: boolean;
  layoutDirection?: LayoutDirection;
  isConnecting?: boolean;
  showHandles?: boolean;
  isValid?: boolean;
};

export const WorkflowNodeTemplate = memo(
  ({
    id,
    icon,
    label,
    description,
    layoutDirection = 'RIGHT',
    selected = false,
    showHandles = true,
    isValid,
  }: Props) => {
    const handleTargetId = getHandleTargetId(id);
    const handleSourceId = getHandleSourceId(id);

    const handleTargetPosition = getHandleTargetPosition(layoutDirection);
    const handleSourcePosition = getHandleSourcePosition(layoutDirection);

    const iconElement = useMemo(() => <Icon name={icon} size="large" />, [icon]);

    return (
      <NodePanel.Root selected={selected}>
        <NodePanel.Header>
          <Status status={isValid === false ? 'invalid' : undefined} />
          <NodeIcon icon={iconElement} />
          <NodeDescription label={label} description={description} />
        </NodePanel.Header>
        <NodePanel.Handles isVisible={showHandles}>
          <Handle id={handleTargetId} position={handleTargetPosition} type="target" />
          <Handle id={handleSourceId} position={handleSourcePosition} type="source" />
        </NodePanel.Handles>
      </NodePanel.Root>
    );
  },
);
