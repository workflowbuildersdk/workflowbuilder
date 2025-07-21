import { useEffect, useMemo, useState } from 'react';
import { useRemoveElements } from '@/hooks/use-remove-elements';
import { useNoAccessModal } from '@/features/modals/no-access/use-no-access-modal';
import { useTranslation } from 'react-i18next';
import { useSingleSelectedElement } from '@/features/properties-bar/use-single-selected-element';
import { PropertiesBar } from './components/properties-bar/properties-bar';

export function PropertiesBarContainer() {
  const { removeElements } = useRemoveElements();
  const { openNoAccessModal } = useNoAccessModal();
  const { t } = useTranslation();

  const [selectedTab, setSelectedTab] = useState('properties');

  const selection = useSingleSelectedElement();
  const selectionId = useMemo(() => selection?.node?.id, [selection]);

  useEffect(() => {
    setSelectedTab('properties');
  }, [selectionId]);

  function handleDeleteClick() {
    if (selection) {
      removeElements(selection);
    }
  }

  return (
    <PropertiesBar
      selection={selection}
      onMenuHeaderClick={openNoAccessModal}
      onDeleteClick={handleDeleteClick}
      headerLabel={t('propertiesBar.label')}
      deleteNodeLabel={t('propertiesBar.deleteNode')}
      deleteEdgeLabel={t('propertiesBar.deleteEdge')}
      selectedTab={selectedTab}
      onTabChange={setSelectedTab}
    />
  );
}
