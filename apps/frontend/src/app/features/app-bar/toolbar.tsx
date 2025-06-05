import styles from './app-bar.module.css';
import Logo from '../../../assets/workflow-builder-logo.svg?react';
import { NavButton } from '@synergycodes/axiom';
import { Icon } from '@workflow-builder/icons';
import { useTranslation } from 'react-i18next';
interface ToolbarProps {
  onSave: () => void;
  onOpen: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  isReadOnlyMode: boolean;
}

export function Toolbar({ onSave, onOpen, onUndo, onRedo, canUndo, canRedo, isReadOnlyMode }: ToolbarProps) {
  const { t } = useTranslation(undefined, { keyPrefix: 'tooltips' });

  return (
    <div className={styles['toolbar']}>
      <Logo className={styles['logo']} />
      <div className={styles['nav-segment']}>
        <NavButton onClick={onSave} icon={<Icon name="FloppyDisk" />} tooltip={t('save')} />
        <NavButton onClick={onOpen} icon={<Icon name="FolderOpen" />} tooltip={t('open')} />
        <NavButton
          onClick={onUndo}
          icon={<Icon name="ArrowUUpLeft" />}
          disabled={!canUndo || isReadOnlyMode}
          tooltip={t('undo')}
        />
        <NavButton
          onClick={onRedo}
          icon={<Icon name="ArrowUUpRight" />}
          disabled={!canRedo || isReadOnlyMode}
          tooltip={t('redo')}
        />
      </div>
    </div>
  );
}
