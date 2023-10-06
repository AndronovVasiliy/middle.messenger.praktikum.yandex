import {
  Avatar, BackArrow, Header, Input, Link,
} from '@components';

export default `
    <main class="{{wrapper_profile_class}}">
        ${BackArrow()}
        <div class="{{profile_main_class}}">
            <div class="{{profile_main_avatar_name_block_class}}">
                ${Avatar('', '130px', '130px')}
                ${Header('{{name}}', '600', '16px')}
            </div>
            <div class="{{profile_main_info_class}}">
                <form class="{{profile_main_form_class}}" name="profile">
                    ${Input('email', 'text', '', 'Почта', 'ya@yande.ru', 'disabled')}
                    ${Input('login', 'text', 'Введите логин', 'Логин', 'Ivan@', 'disabled')}
                    ${Input('first_name', 'text', 'Введите имя', 'Имя', 'Иван', 'disabled')}
                    ${Input('second_name', 'text', 'Введите фамилию', 'Фамилия', 'Оглезнев', 'disabled')}
                    ${Input('display_name', 'text', 'Имя в чате', 'Имя в чате', 'Тупая пизда', 'disabled')}
                    ${Input('phone', 'text', 'Номер телефона', 'Телефон', '8-800-555-35-35', 'disabled')}
                </form>
                <ul class="{{profile_main_additional_button_class}}">
                    <li class="{{additional_button_element_class}}">
                        ${Link('Изменить данные', '/profile/edit')}
                    </li>
                    <li class="{{additional_button_element_class}}">
                        ${Link('Изменить пароль', '/change_password')}
                    </li>
                    <li class="{{additional_button_element_class}}">
                        ${Link('Выйти', '/login')}
                    </li>     
                </ul>
            </div>
        </div>
    </main>
`;
