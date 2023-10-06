import { Avatar } from '@components';

export default `
    <li class="{{wrapper_user_chat_class}}">
        ${Avatar('{{avatar}}', '50px', '50px')}
        <div class="{{user_chat_info_class}}">
            <div class="{{chat_info_header_class}}">
                <h2 class="{{info_header_name_class}}">{{name}}</h2>
                <time class="{{info_header_time_class}}">{{time}}</time>            
            </div>
            <div class="{{info_message_class}}">
                <div class="{{message_last_message_class}}">
                    {{last_message}}
                </div>     
                <div class="{{message_new_message_class}}">
                    {{new_message}}
                </div>       
            </div>        
        </div>
    </li>
`;
