import { Sidebar } from '@/components/sidebar/sidebar';
import { PropertiesBarHeader } from './components/properties-bar-header';
import { LabelButton } from '@synergycodes/axiom';
import { useRemoveElements } from '@/hooks/use-remove-elements';
import { useNoAccessModal } from '@/features/modals/no-access/use-no-access-modal';
import { useTranslation } from 'react-i18next';
import { useSingleSelectedElement } from '@/features/properties-bar/use-single-selected-element';
import { NodeProperties } from './components/node-properties/node-properties';
import { EdgeProperties } from './components/edge-properties/edge-properties';

import style from './properties-bar-container.module.css';

export function PropertiesBarContainer() {
  const { removeElements } = useRemoveElements();
  const { openNoAccessModal } = useNoAccessModal();
  const { t } = useTranslation();

  const selection = useSingleSelectedElement();

  const name = selection?.node?.data?.properties?.label ?? selection?.edge?.data?.label;
  const isExpanded = !!selection;

  return (
    <Sidebar
      isExpanded={isExpanded}
      contentClassName={style['extend-bounds']}
      header={
        <PropertiesBarHeader
          isExpanded={isExpanded}
          header={t('propertiesBar.label')}
          name={name ?? ''}
          onDotsClick={openNoAccessModal}
        />
      }
      footer={
        isExpanded && (
          <LabelButton
            onClick={() => removeElements(selection)}
            label={selection?.node ? t('propertiesBar.deleteNode') : t('propertiesBar.deleteEdge')}
            variant="ghost-destructive"
          />
        )
      }
    >
      {isExpanded && selection.node && <NodeProperties node={selection.node} />}
      {isExpanded && selection.edge && <EdgeProperties edge={selection.edge} />}
    </Sidebar>
  );
}
