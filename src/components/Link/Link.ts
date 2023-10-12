import Block from '../../Utils/Block';
import styles from './Link.module.less';
import { template } from './Link.tmpl';

type TProps = {
  children: string,
  href: string,
};
export class Link extends Block {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: TProps) {
    super({
      link_wrapper_class: styles.link_wrapper,
      ...props,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
