import Block from '../../Utils/Block';
import styles from './Input.module.less';
import { template } from './InputLabel.tmpl';
import { Input } from './Input';
import { Label } from './Label';

type TProps = {
  events?: Record<string, (event: Event) => void>,
  disabled?: string,
  labelText?: string,
  name: string,
  placeholder?: string,
  type: string,
  value?: string,
};

export class InputLabel extends Block {
  constructor(props: TProps) {
    const input = new Input({
      type: props.type,
      name: props.name,
      placeholder: props.placeholder,
      events: props.events,
    });

    const label = new Label({
      labelText: props?.labelText,
      name: props.name,
    });

    super({
      wrapper_input_class: styles.wrapper_input_label,
      input_label_error_class: styles.input_label_error,
      input,
      label,
      ...props,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
