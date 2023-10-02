import {Message} from "./Message/Message.ts";

export default `
    <div class="{{wrapper_messages_class}}">
            {{#each messages_history}}
                    {{#if isOwned}}
                        ${Message("{{messages}}", "{{images}}", "{{time}}", true)}
                    {{else}}    
                        ${Message("{{messages}}", "{{images}}", "{{time}}", false)}
                    {{/if}}
            {{/each}}
        
    </div>
`
