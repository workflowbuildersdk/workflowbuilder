import { DefaultProperties } from '@/features/json-form/types/default-properties';
import { ConditionalNodeSchema } from './schema';

export const defaultPropertiesData: DefaultProperties<ConditionalNodeSchema> = {
  label: 'node.conditional.label',
  description: 'node.conditional.description',
  conditionsArray: [],
};
