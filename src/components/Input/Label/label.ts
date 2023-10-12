import Block from '../../../Utils/Block';
import styles from './label.module.less';
import { template } from './label.tmpl';

type TProps = {
  labelText?: string,
  name: string,
};

export class Label extends Block {
  constructor(props: TProps) {
    super({
      labels_wrapper_class: styles.labels_wrapper,
      ...props,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
