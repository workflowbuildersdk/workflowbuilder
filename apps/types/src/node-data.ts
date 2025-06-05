import type { IconType } from './common';
import type { Edge, Node } from '@xyflow/react';
import type { UISchema } from '../../frontend/src/app/features/json-form/types/uischema';
import type { DefaultProperties } from '../../frontend/src/app/features/json-form/types/default-properties';
import type { BaseNodeProperties, NodeSchema } from './node-schema';

export type WorkflowBuilderNode = Node<NodeData>;
export type WorkflowBuilderEdge = Edge<EdgeData>;

export type NodeDefinition<T extends NodeSchema> = {
  schema: T;
  /** default values of schema based properties */
  defaultPropertiesData: DefaultProperties<T>;
  /** describes how the form looks like and to which fields data properties should be mapped */
  uischema?: UISchema;
} & Required<BaseNodeProperties> &
  Pick<NodeData, 'type' | 'icon'>;

export type NodeData = {
  segments?: []; // TODO: Add segments back, it's a placeholder suggestion where to hold segments data
  properties: BaseNodeProperties & Record<string, unknown>;
  icon: IconType;
  type: string;
};

export type EdgeData = {
  label?: string;
  icon?: IconType;
};
