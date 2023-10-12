export const template = `
    <main class="{{wrapper_chat_class}}">
        <div class="{{chat_left_column_class}}">
            {{{search}}}
            {{{listUserChat}}}
        </div>
        <div class="{{chat_right_column_class}}">
             {{{chatHeader}}}
             {{{chatMessages}}}
             {{{sendMessage}}}
        </div>
    </main>
`;
