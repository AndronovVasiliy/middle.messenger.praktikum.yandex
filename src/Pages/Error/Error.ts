import { Link } from '@components';
import Block from '../../Utils/Block';
import { template } from './Error.tmpl';
import styles from './Error.module.less';

type TProps = {
  titleText: string,
  subtitleText: string,
};

export class Error extends Block {
  constructor(props: TProps) {
    const link = new Link({
      children: 'Назад к чатам',
      href: '/chat',
    });

    super({
      wrapper_error_class: styles.wrapper_error,
      error_title_class: styles.error_title,
      error_subtitle_class: styles.error_subtitle,
      ...props,
      link,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
