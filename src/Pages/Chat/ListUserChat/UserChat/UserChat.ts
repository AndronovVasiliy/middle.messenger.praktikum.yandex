import { Avatar } from '@components';
import Block from '../../../../Utils/Block';
import styles from './UserChat.module.less';
import { template } from './UserChat.tmpl';

type TProps = {
  avatar: string,
  name: string,
  time: string,
  lastMessage: string,
  newMessage: string
};

export class UserChat extends Block {
  constructor(props: TProps) {
    const avatarEl = new Avatar({
      avatar_size: '50px',
      avatar: props.avatar,
    });

    super({
      wrapper_user_chat_class: styles.wrapper_user_chat,
      user_chat_info_class: styles.user_chat_info,
      chat_info_header_class: styles.chat_info_header_class,
      info_header_name_class: styles.info_header_name,
      info_header_time_class: styles.info_header_time,
      info_message_class: styles.info_message,
      message_last_message_class: styles.message_last_message,
      message_new_message_class: styles.message_new_message,
      avatarEl,
      ...props,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
