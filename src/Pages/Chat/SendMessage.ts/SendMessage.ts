import Handlebars from "handlebars";
import SendMessageTmpl from "./SendMessage.tmpl.ts";
import styles from "./SendMessage.module.less";

export const SendMessage = () => {
    const template = Handlebars.compile(SendMessageTmpl);

    return template({
        wrapper_sendMessage_class: styles.wrapper_sendMessage,
        sendMessage_form_class: styles.sendMessage_form,
        input_sendMessage_class: styles.input_sendMessage,
        send_button_class: styles.send_button,
        button_img_class: styles.button_img
    })
}
