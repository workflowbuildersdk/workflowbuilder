import { FORM_TOOLS_NAME } from '../add-ai-tool-form-content/add-ai-tool-form-content';
import styles from './add-ai-tool-footer.module.css';
import { LabelButton } from '@synergycodes/axiom';

type Props = {
  onCancelClick: () => void;
};

export function AddAiToolFooter({ onCancelClick }: Props) {
  return (
    <div className={styles['footer']}>
      <LabelButton label="Cancel" variant="secondary" onClick={onCancelClick} />
      <LabelButton label="Confirm" variant="primary" type="submit" form={FORM_TOOLS_NAME} />
    </div>
  );
}
