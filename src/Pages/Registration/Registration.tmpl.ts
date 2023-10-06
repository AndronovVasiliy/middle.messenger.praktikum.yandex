import { Button, Input, Link } from '@components';

export default `
    <main class="{{wrapper_registration_class}}">
        <form class="{{registration_form_class}}">
            <span class="{{registration_form_title_class}}">
                Регистрация
            </span>
            ${Input('email', 'text', 'Введите почту')}
            ${Input('login', 'text', 'Введите логин')}
            ${Input('first_name', 'text', 'Введите имя')}
            ${Input('second_name', 'text', 'Введите фамилию')}
            ${Input('phone', 'text', 'Введите телефон')}
            ${Input('password', 'password', 'Введите пароль')}
            ${Input('password', 'password', 'Повторите пароль')}
            ${Button('Зарегистрироваться', 'submit')}
            ${Link('Войти', '/login')}
        </form>
    </main>
`;
