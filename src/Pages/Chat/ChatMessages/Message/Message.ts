import Handlebars from "handlebars";
import OwnerMessageTmpl from "./Message.tmpl.ts";
import styles from "./Message.module.less";

export const Message = (messageText: string, img: string, time: string, isOwned: boolean) => {
    const template = Handlebars.compile(OwnerMessageTmpl);
    const additionalClass = isOwned ? styles.isOw : '';

    return template({
        wrapper_message_class: `${styles.wrapper_message} ${additionalClass}`,
        message_text_class: styles.message_text,
        message_img_class: styles.message_img,
        message_time_class: styles.message_time,
        message_text: messageText,
        img: img,
        time: time,
    })
}
