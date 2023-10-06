import Handlebars from 'handlebars';
import UserChatTmpl1 from './UserChat.tmpl.ts';
import styles from './UserChat.module.less';

export const ChatUser1 = (avatar: string, name: string, time: string, last_message: string, new_message: string) => {
    const template = Handlebars.compile(UserChatTmpl1);
    let truncatedText = last_message;
    if(truncatedText.length  > 80) {
        truncatedText = truncatedText.slice(0, 80) + '...';
    }



    return template({
        wrapper_user_chat_class: styles.wrapper_user_chat,
        user_chat_info_class: styles.user_chat_info,
        chat_info_header_class: styles.chat_info_header_class,
        info_header_name_class: styles.info_header_name,
        info_header_time_class: styles.info_header_time,
        info_message_class: styles.info_message,
        message_last_message_class: styles.message_last_message,
        message_new_message_class: styles.message_new_message,
        avatar,
        name,
        time,
        last_message: truncatedText,
        new_message,
    });
};
