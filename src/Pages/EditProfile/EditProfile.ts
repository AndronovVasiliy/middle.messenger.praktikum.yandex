import Handlebars from "handlebars";
import EditProfileTmpl from "./EditProfile.tmpl.ts";
import styles from "./EditProfile.module.less";

export const EditProfile = () => {
    const template = Handlebars.compile(EditProfileTmpl);

    return template({
        wrapper_edit_profile_class: styles.wrapper_edit_profile,
        edit_profile_main_class: styles.edit_profile_main,
        edit_profile_main_avatar_name_block_class: styles.edit_profile_main_avatar_name_block,
        edit_profile_main_info_class: styles.edit_profile_main_info,
        edit_profile_main_form_class: styles.edit_profile_main_form,
        avatar_name_block_class: styles.avatar_name_block,
        name: "Петр",
    });
};
