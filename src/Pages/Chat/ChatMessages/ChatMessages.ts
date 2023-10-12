import Block from '../../../Utils/Block';
import styles from './ChatMessages.module.less';
import { Message } from './Message';
import { template } from './ChatMessages.tmpl';

type TMessage = {
  isOwned: boolean,
  messages: string,
  images: string,
  time: string,
};

type TProps = {
  messagesHistory: TMessage[],
};

export class ChatMessages extends Block {
  constructor(props: TProps) {
    const messagesHistoryArr = props.messagesHistory.map((el: TMessage) => new Message({
      isOwned: el.isOwned,
      time: el.time,
      img: '' || el.images,
      messageText: el.messages,
    }));

    super({
      wrapper_messages_class: styles.wrapper_messages,
      messagesHistoryArr,
      ...props,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
