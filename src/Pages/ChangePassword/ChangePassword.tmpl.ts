import {Input, BackArrow, Button, Avatar} from '../../components';
// import Image from '../../Icons/Image.svg';
export default `
    <main class="{{wrapper_change_password_class}}">
        ${BackArrow()}
        <div class="{{change_password_main_class}}">
            <div class="{{password_main_avatar_name_block_class}}">
                ${Avatar('','130px', '130px')}
                <h1 class="{{avatar_name_block_class}}">{{name}}</h1>
            </div>
            <div class="{{change_password_info_class}}">
                <form class="{{info_form_class}}">                
                    ${Input("login", "text", "Логин", "Старый пароль")}
                    ${Input("password", "text", "Пароль", "Новый пароль")}
                    ${Input("password", "text", "Пароль", "Повторите новый пароль")}
                    ${Button("Сохранить", "submit")}
                </form>
            </div>
        </div>
    </main>
`;
