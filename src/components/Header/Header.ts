import Block from '../../Utils/Block';
import { template } from './Header.tmpl';
import styles from './Header.module.less';

type TProps = {
  fontWeight: string,
  fontSize: string,
  name: string
};

export class Header extends Block {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: TProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, {
      wrapper_header: styles.wrapper_header,
      ...this.props,
    });
  }
}
