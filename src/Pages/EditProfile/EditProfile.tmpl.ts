import {Input, BackArrow, Button, Avatar} from '../../components';
export default `
    <main class="{{wrapper_edit_profile_class}}">
        ${BackArrow()}
        <div class="{{edit_profile_main_class}}">
            <div class="{{edit_profile_main_avatar_name_block_class}}">
                ${Avatar('','130px', '130px')}
                <h1 class="{{avatar_name_block_class}}">{{name}}</h1>
            </div>
            <div class="{{edit_profile_main_info_class}}">
                <form class="{{edit_profile_main_form_class}}" name="profile">
                    ${Input("email", "text", "", "Почта", "ya@yande.ru")}
                    ${Input("login", "text", "Введите логин", "Логин", "Ivan@")}
                    ${Input("first_name", "text", "Введите имя", "Имя", "Иван")}
                    ${Input( "second_name", "text", "Введите фамилию", "Фамилия", "Оглезнев")}
                    ${Input( "display_name", "text", "Имя в чате", "Имя в чате", "Тупая пизда")}
                    ${Input( "phone", "text", "Номер телефона", "Телефон", "8-800-555-35-35")}
                </form>
                ${Button("Сохранить", "submit")}
            </div>
        </div>
    </main>
`;
