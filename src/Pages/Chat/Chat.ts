import Handlebars from 'handlebars';
import ChatTmpl from './Chat.tmpl.ts';
import styles from './Chat.module.less';

export const Chat = () => {
    const template = Handlebars.compile(ChatTmpl);

    return template({
        wrapper_chat_class: styles.wrapper_chat,
        chat_left_column_class: styles.chat_left_column,
        chat_right_column_class: styles.chat_right_column,
    });
};
