import Block from '../../Utils/Block';
import { template } from './Button.tmpl';
import styles from './Button.module.less';

type TProps = {
  children: string,
  type: string,
  events?: Record<string, (event: Event) => void>,
};

export class Button extends Block {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: TProps) {
    super(props);
  }

  render() {
    return this.compile(template, {
      wrapper_button_class: styles.wrapper_button,
      ...this.props,
    });
  }
}
