import { DatePicker, DatePickerProps } from '@synergycodes/axiom';
import { DatePickerControlProps } from '../../types/controls';
import { ControlWrapper } from '../control-wrapper';
import { createControlRenderer } from '../../utils/rendering';

function DatePickerControl(props: DatePickerControlProps) {
  const { data, handleChange, path, enabled } = props;

  const onChange: DatePickerProps['onChange'] = (value) => {
    handleChange(path, value);
  };

  return (
    <ControlWrapper {...props}>
      <DatePicker value={data} onChange={onChange} disabled={!enabled} />
    </ControlWrapper>
  );
}

export const datePickerControlRenderer = createControlRenderer('DatePicker', DatePickerControl);
