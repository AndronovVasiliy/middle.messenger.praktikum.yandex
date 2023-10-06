import {Avatar} from "../../../components";

export default `
    <header class="{{wrapper_chat_header_class}}">
        <div class="{{chat_header_user_info_class}}">
            ${Avatar('{{avatar}}','35px', '35px')}
             <span class="{{header_user_info_name_class}}">
                {{name}}
             </span>
        </div>
    </header>
`
