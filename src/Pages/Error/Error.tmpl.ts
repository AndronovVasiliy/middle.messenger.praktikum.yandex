import { Link } from '../../components';

export default `
    <main class="{{wrapper_error_class}}">
        <span class="{{error_title_class}}">
            {{titleText}}
        </span>
        <span class="{{error_subtitle_class}}">
            {{subtitleText}}
        </span>
        ${Link("Назад к чатам", "/chat")}
    </main>
`;
