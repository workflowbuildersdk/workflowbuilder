import { NodeType } from '@workflow-builder/types/node-types';
import { NodeContainer } from './nodes/node-container';
import { NodeTypes } from '@xyflow/react';

export function getNodeTypesObject(): NodeTypes {
  return {
    [NodeType.Node]: NodeContainer,
  };
}
