import Handlebars from 'handlebars';
import ProfileTmpl from './Profile.tmpl';
import styles from './Profile.module.less';

export const Profile = () => {
  const template = Handlebars.compile(ProfileTmpl);

  return template({
    wrapper_profile_class: styles.wrapper_profile,
    profile_main_class: styles.profile_main,
    profile_main_avatar_name_block_class: styles.profile_main_avatar_name_block,
    avatar_name_block_class: styles.avatar_name_block,
    profile_main_info_class: styles.profile_main_info,
    profile_main_form_class: styles.profile_main_form,
    profile_main_additional_button_class: styles.profile_main_additional_button,
    additional_button_element_class: styles.additional_button_element,
    name: 'Петр',
  });
};
