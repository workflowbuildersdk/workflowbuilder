import { LabelButton } from '@synergycodes/axiom';
import { useTranslation } from 'react-i18next';

type Props = {
  closeModal: () => void;
  handleConfirm: () => void;
};

export function ConditionModalFooter({ closeModal, handleConfirm }: Props) {
  const { t } = useTranslation();
  return (
    <>
      <LabelButton label={t('conditions.cancel')} variant="secondary" size="large" onClick={closeModal} type="button" />
      <LabelButton label={t('conditions.confirm')} size="large" onClick={handleConfirm} />
    </>
  );
}
