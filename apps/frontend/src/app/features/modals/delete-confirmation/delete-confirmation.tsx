import { Node, Edge } from '@xyflow/react';
import styles from './delete-confirmation.module.css';
import clsx from 'clsx';
import { Trans, useTranslation } from 'react-i18next';
import { Checkbox, LabelButton } from '@synergycodes/axiom';
import { useState } from 'react';

type DeleteConfirmationProps = {
  nodes: Node[];
  edges: Edge[];
  onShouldShowAgainChange?: (value: boolean) => void;
};

export function DeleteConfirmation({ nodes, edges, onShouldShowAgainChange }: DeleteConfirmationProps) {
  const [isChecked, setIsChecked] = useState(false);
  const { t } = useTranslation();

  const parts = [
    nodes.length > 0 ? t(`deleteConfirmation.${nodes.length > 1 ? 'nodes' : 'node'}`) : '',
    edges.length > 0 ? t(`deleteConfirmation.${edges.length > 1 ? 'edges' : 'edge'}`) : '',
  ].filter(Boolean);

  function handleChange() {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onShouldShowAgainChange?.(newValue);
  }

  const translatedParts = parts.join(` ${t('deleteConfirmation.andConnected')} `);
  const selectedText = t(`deleteConfirmation.${nodes.length > 1 ? 'selectedPlural' : 'selected'}`);

  return (
    <div className={styles['content']}>
      <span className={clsx('ax-public-p9', styles['text'])}>
        <Trans
          i18nKey="deleteConfirmation.text"
          values={{ selected: selectedText, parts: translatedParts }}
          components={{ b: <b /> }}
        />{' '}
      </span>
      <div className={styles['checkbox-wrapper']}>
        <Checkbox size="small" checked={isChecked} onChange={handleChange} />
        <span>{t('deleteConfirmation.dontShowMeThisAgain')}</span>
      </div>
    </div>
  );
}

type DeleteConfirmationButtonsProps = {
  onDeleteClick: () => void;
  onCancelClick: () => void;
};

export function DeleteConfirmationButtons({ onDeleteClick, onCancelClick }: DeleteConfirmationButtonsProps) {
  const { t } = useTranslation();

  return (
    <div className={styles['buttons']}>
      <LabelButton variant="secondary" onClick={onCancelClick} label={t('deleteConfirmation.cancel')} />
      <LabelButton
        onClick={onDeleteClick}
        label={t('deleteConfirmation.delete')}
        size="medium"
        variant="error"
        autoFocus
      />
    </div>
  );
}
