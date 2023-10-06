import Handlebars from 'handlebars';
import ChatHeaderTmpl from './ChatHeader.tmpl.ts';
import styles from './ChatHeader.module.less';

export const ChatHeader = (name: string, avatar: string) => {
    const template = Handlebars.compile(ChatHeaderTmpl);

    return template({
        wrapper_chat_header_class: styles.wrapper_chat_header,
        chat_header_user_info_class: styles.chat_header_user_info,
        header_user_info_avatar_class: styles.header_user_info_avatar,
        header_user_info_name_class: styles.header_user_info_name,
        name: name,
        avatar: avatar
    });
};
