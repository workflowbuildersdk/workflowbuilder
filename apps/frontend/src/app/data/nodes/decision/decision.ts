import { PaletteItem } from '@workflow-builder/types/common';
import { defaultPropertiesData } from './default-properties-data';
import { DecisionSchema, schema } from './schema';
import { uischema } from './uischema';

export const decision: PaletteItem<DecisionSchema> = {
  label: 'node.decision.label',
  description: 'node.decision.description',
  type: 'decision',
  icon: 'ArrowsSplit',
  defaultPropertiesData,
  schema,
  uischema,
};
