import Handlebars from "handlebars";
import ChatMessagesTmpl from "./ChatMessages.tmpl.ts";
import styles from "./ChatMessages.module.less";

export const ChatMessages = (messages: any = []) => {
    const template = Handlebars.compile(ChatMessagesTmpl);
    
    // let mockMessages = [
    //     {
    //         isOwned: false,
    //         messages: "Привет",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Привет",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Как дела?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Норм, ты как?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Пойдешь пить пиво?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Да?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Привет",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Привет",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Как дела?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Норм, ты как?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Пойдешь пить пиво?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Да!",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Привет",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Привет",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Как дела?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Норм, ты как?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Пойдешь пить пиво?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Да?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Привет",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Привет",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Как дела?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Норм, ты как?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Пойдешь пить пиво?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Да!",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Привет",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Привет",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Как дела?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Норм, ты как?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Пойдешь пить пиво?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Да?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Привет",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Привет",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Как дела?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Норм, ты как?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: false,
    //         messages: "Пойдешь пить пиво?",
    //         images: "",
    //         time: "12:43",
    //     },
    //     {
    //         isOwned: true,
    //         messages: "Да!",
    //         images: "",
    //         time: "12:43",
    //     },
    // ]

    return template({
            wrapper_messages_class: styles.wrapper_messages,
            messages_history: messages
        })
}
