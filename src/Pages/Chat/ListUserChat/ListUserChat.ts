import Block from '../../../Utils/Block';
import { UserChat } from './UserChat';
import styles from './ListUserChat.module.less';
import { template } from './ListUserChat.tmpl';

type User = {
  name: string,
  lastMessage: string,
  avatar: string,
  time: string,
  newMessage: string,
};

type TProps = {
  listUser: User[]
};

export class ListUserChat extends Block {
  constructor(props: TProps) {
    const listUser = props.listUser.map((el: User) => new UserChat({
      name: el.name,
      time: el.time,
      avatar: el.avatar,
      lastMessage: el.lastMessage,
      newMessage: el.newMessage,
    }));
    super({
      wrapper_chat_list_class: styles.wrapper_chat_list,
      chats: listUser,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
