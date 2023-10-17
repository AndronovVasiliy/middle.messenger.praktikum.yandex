import Block from '../../../Utils/Block';
import { template } from './Input.tmpl';
import styles from './input.module.less';

type TProps = {
  events?: Record<string, (event: Event) => void>,
  disabled?: string,
  name: string,
  placeholder?: string,
  type: string,
  value?: string,
};
export class Input extends Block {
  constructor(props: TProps) {
    super({
      input_wrapper_class: styles.input_wrapper,
      ...props,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
