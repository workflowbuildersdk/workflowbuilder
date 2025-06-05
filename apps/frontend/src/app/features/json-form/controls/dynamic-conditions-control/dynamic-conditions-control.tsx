import clsx from 'clsx';
import { useCallback, useContext, useMemo, useRef } from 'react';
import { NavButton, TextArea } from '@synergycodes/axiom';
import { useTranslation } from 'react-i18next';
import { DynamicCondition, DynamicConditionsControlProps } from '../../types/controls';
import { createControlRenderer } from '../../utils/rendering';
import { ControlWrapper } from '../control-wrapper';
import { ModalContext } from '@/features/modals/modal-provider';
import { ConditionsForm, ConditionsFormHandle } from './dynamic-conditions-form/conditions-form';
import { Icon } from '@workflow-builder/icons';
import styles from './dynamic-conditions-control.module.css';
import { conditionsToDependencies } from '../../utils/conditional-transform';
import { ConditionModalFooter } from './dynamic-condition-modal-footer/condition-modal-footer';

function DynamicConditionsControl(props: DynamicConditionsControlProps) {
  const { openModal, closeModal } = useContext(ModalContext);
  const { data = [], handleChange, path, enabled } = props;
  const formRef = useRef<ConditionsFormHandle>(null);

  const { t } = useTranslation();

  const dependencies = useMemo(() => {
    return conditionsToDependencies(data);
  }, [data]);

  const onChange = useCallback(
    (value: DynamicCondition[]) => {
      handleChange(path, value);
    },
    [handleChange, path],
  );

  const handleConfirm = useCallback(() => {
    formRef.current?.handleConfirm();
  }, []);

  const openEditorModal = useCallback(() => {
    openModal({
      content: <ConditionsForm ref={formRef} onChange={onChange} value={data} />,
      title: t('conditions.title'),
      footer: <ConditionModalFooter closeModal={closeModal} handleConfirm={handleConfirm} />,
    });
  }, [data, onChange, openModal, closeModal, formRef, handleConfirm, t]);

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <span className={clsx('ax-public-h10', styles['title'])}>Conditions</span>
        <NavButton
          size="small"
          onClick={openEditorModal}
          icon={<Icon name="FrameCorners" size="small" />}
          tooltip={t('conditions.title')}
        />
      </div>
      <ControlWrapper {...props} uischema={{ ...props.uischema, label: 'Dependencies' }}>
        <TextArea disabled={!enabled} value={dependencies.join(' ')} onClick={openEditorModal} size="medium" />
        <span className={styles['tag']}>{t('conditions.totalNumber', { count: data.length })}</span>
      </ControlWrapper>
    </div>
  );
}

export const dynamicConditionsControlRenderer = createControlRenderer('DynamicConditions', DynamicConditionsControl);
