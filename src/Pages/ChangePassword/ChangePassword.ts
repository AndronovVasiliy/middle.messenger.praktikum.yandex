import Handlebars from "handlebars";
import styles from "./ChangePassword.module.less";
import ChangePasswordTmpl from "./ChangePassword.tmpl.ts";

export const ChangePassword = () => {
    const template = Handlebars.compile(ChangePasswordTmpl);

    return template({
        wrapper_change_password_class: styles.wrapper_change_password,
        change_password_main_class: styles.change_password_main,
        password_main_avatar_name_block_class: styles.password_main_avatar_name_block,
        avatar_name_block_class: styles.avatar_name_block,
        change_password_info_class: styles.change_password_info,
        info_form_class: styles.info_form,
        name: "Петр",
    });
};
