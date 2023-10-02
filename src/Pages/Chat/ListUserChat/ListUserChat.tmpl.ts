import { ChatUser1 } from "./UserChat/UserChat.ts";

export default `
    <ul class="{{wrapper_chat_list_class}}">
     {{#each chats}}
        ${
            ChatUser1(
                "{{avatar}}",
                "{{name}}",
                "{{time}}",
                "{{last_message}}",
                "{{new_messages}}"
            )
        }
     {{/each}}
    </ul>
`
