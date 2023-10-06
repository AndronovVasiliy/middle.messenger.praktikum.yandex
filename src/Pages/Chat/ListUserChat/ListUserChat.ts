import Handlebars from 'handlebars';
import ChatListTmpl from './ListUserChat.tmpl';
import styles from './ListUserChat.module.less';

export const ListUserChat = () => {
  const template = Handlebars.compile(ChatListTmpl);
  const userList = [
    {
      name: 'Картапол',
      last_message: 'Как дела',
      avatar: 'https://uprostim.com/wp-content/uploads/2021/03/image086-77.jpg',
      time: '13:12',
      new_messages: '1',
    },
    {
      name: 'Педрило',
      last_message: 'Жопа',
      avatar: 'https://pixelbox.ru/wp-content/uploads/2022/05/smeshoy-kotik-avatar-pixelbox.ru-15.jpg',
      time: '13:12',
      new_messages: '5',
    },
    {
      name: 'Тим Лид',
      last_message: 'Возьмешь еще одну задачу в спринт или нет пидора ответ?',
      avatar: 'https://sopranoclub.ru/images/memy-na-avu-275-memnyh-avatarok/file56870.jpeg',
      time: '13:12',
      new_messages: '3',
    },
  ];

  return template({
    wrapper_chat_list_class: styles.wrapper_chat_list,
    chats: userList,
  });
};
