import { SearchField } from '@components';
import Block from '../../Utils/Block';
import styles from './Chat.module.less';
import { ChatHeader } from './ChatHeader';
import { ListUserChat } from './ListUserChat';
import { template } from './Chat.tmpl';
import { SendMessage } from './SendMessage';
import { mockMessages, userList1 } from './mockDataChat';
import { ChatMessages } from './ChatMessages';

export class Chat extends Block {
  constructor() {
    const search = new SearchField();
    const chatHeader = new ChatHeader({
      avatar: 'https://sun9-61.userapi.com/impg/qmcoh3TbIgkqK9ku2XO2LRZ7p3tprephE9hvIw/'
        + 'TcIt6mLooRA.jpg?size=1060x1080&quality=95&sign=000bd8f151689fdbc81485ee6b7eb636&c_uniq_'
        + 'tag=37qWgTSHgMsO9lRMm_PD2goS3IrMvvKQHKma90_raBQ&type=album',
    });

    const listUserChat = new ListUserChat({
      listUser: userList1,
    });

    const sendMessage = new SendMessage({});

    const chatMessages = new ChatMessages({
      messagesHistory: mockMessages,
    });

    super({
      wrapper_chat_class: styles.wrapper_chat,
      chat_left_column_class: styles.chat_left_column,
      chat_right_column_class: styles.chat_right_column,
      search,
      chatHeader,
      listUserChat,
      chatMessages,
      sendMessage,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
