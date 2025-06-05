import { sharedProperties } from '../shared/shared-properties';
import { NodeSchema } from '@workflow-builder/types/node-schema';

export const schema = {
  properties: {
    ...sharedProperties,
  },
} satisfies NodeSchema;

export type DecisionSchema = typeof schema;
