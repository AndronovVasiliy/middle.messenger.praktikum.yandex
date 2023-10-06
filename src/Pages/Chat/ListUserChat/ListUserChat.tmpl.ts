import { ChatUser } from './UserChat';

export default `
    <ul class="{{wrapper_chat_list_class}}">
     {{#each chats}}
        ${
  ChatUser(
    '{{avatar}}',
    '{{name}}',
    '{{time}}',
    '{{last_message}}',
    '{{new_messages}}',
  )
}
     {{/each}}
    </ul>
`;
