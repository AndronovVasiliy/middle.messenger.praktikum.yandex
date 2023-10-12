import { Avatar } from '@components';
import Block from '../../../Utils/Block';
import { template } from './ChatHeader.tmpl';
import styles from './ChatHeader.module.less';

type TProps = {
  avatar: string
};

export class ChatHeader extends Block {
  constructor(props: TProps) {
    const avatar = new Avatar({
      avatar_size: '35px',
      avatar: props.avatar,
    });
    super({
      wrapper_chat_header_class: styles.wrapper_chat_header,
      chat_header_user_info_class: styles.chat_header_user_info,
      header_user_info_avatar_class: styles.header_user_info_avatar,
      header_user_info_name_class: styles.header_user_info_name,
      avatar,
      name: 'Петр',
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
