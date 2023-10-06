import { Button, Input, Link } from '@components';

export default `
    <main class="{{wrapper_login_class}}">
        <form class="{{login_form_class}}">
            <span class="{{login_form_title_class}}">
                {{titleText}}
            </span>
            ${Input('login', 'text', 'Логин')}
            ${Input('password', 'text', 'Пароль')}
            ${Button('Авторизоваться', 'submit')}
            ${Link('Зарегистрироваться', '/registration')}
        </form>
    </main>
`;
