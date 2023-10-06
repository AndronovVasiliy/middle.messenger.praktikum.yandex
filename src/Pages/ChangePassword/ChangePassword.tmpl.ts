import {
  Avatar, BackArrow, Button, Header, Input,
} from '@components';

export default `
    <main class="{{wrapper_change_password_class}}">
        ${BackArrow()}
        <div class="{{change_password_main_class}}">
            <div class="{{password_main_avatar_name_block_class}}">
                ${Avatar('', '130px', '130px')}
                ${Header('{{name}}', '600', '16px')}
            </div>
            <div class="{{change_password_info_class}}">
                <form class="{{info_form_class}}">                
                    ${Input('login', 'text', 'Логин', 'Старый пароль')}
                    ${Input('password', 'text', 'Пароль', 'Новый пароль')}
                    ${Input('password', 'text', 'Пароль', 'Повторите новый пароль')}
                    ${Button('Сохранить', 'submit')}
                </form>
            </div>
        </div>
    </main>
`;
