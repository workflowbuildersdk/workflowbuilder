import { FormControlWithLabel } from '@/components/form/form-control-with-label/form-control-with-label';
import { BaseControlProps } from '../types/controls';

type Props = BaseControlProps & {
  children: React.ReactNode;
};

export function ControlWrapper({ children, uischema, errors, ...props }: Props) {
  const { required, visible } = props;
  const { label } = uischema;

  if (!visible) {
    return;
  }

  const hasErrors = errors.length > 0;

  return (
    <>
      {typeof label === 'string' ? (
        <FormControlWithLabel label={label} required={required} hasErrors={hasErrors}>
          {children}
        </FormControlWithLabel>
      ) : (
        children
      )}
    </>
  );
}
