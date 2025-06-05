import styles from './form-control-with-label.module.css';

import { Label } from '../label/label';
import { PropsWithChildren } from 'react';
import { ItemSize } from '@synergycodes/axiom';
import { IndicatorDot } from '../../../features/json-form/components/indicator-dot/indicator-dot';

type Props = {
  label: string;
  required?: boolean;
  size?: ItemSize;
  hasErrors?: boolean;
};

export function FormControlWithLabel({
  label,
  required,
  size = 'medium',
  hasErrors = false,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className={styles['container']}>
      <Label label={label} required={required} size={size} />
      {hasErrors && <IndicatorDot>{children}</IndicatorDot>}
      {!hasErrors && children}
    </div>
  );
}
