import Block from '../../Utils/Block';
import { template } from './Avatar.tmpl';
import styles from './Avatar.module.less';

type TProps = {
  avatar_size: string,
  avatar: string,
};

export class Avatar extends Block {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: TProps) {
    super(props);
  }

  render() {
    return this.compile(template, {
      wrapper_avatar_class: styles.wrapper_avatar,
      ...this.props,
    });
  }
}
