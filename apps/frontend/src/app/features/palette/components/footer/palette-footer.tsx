import styles from './palette-footer.module.css';
import { useTranslation } from 'react-i18next';
import { LabelButton } from '@synergycodes/axiom';

type Props = {
  onTemplateClick: () => void;
  onHelpClick: () => void;
};

export function PaletteFooter({ onTemplateClick, onHelpClick }: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles['container']}>
      <LabelButton variant="secondary" onClick={onTemplateClick} size="small" label={t('palette.templates')} />
      <LabelButton variant="secondary" onClick={onHelpClick} size="small" label={t('palette.helpSupport')} />
    </div>
  );
}
