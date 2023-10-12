import {
  Avatar, BackArrow, Header, Input, Link,
} from '@components';
import Block from '../../Utils/Block';
import styles from './Profile.module.less';
import { template } from './Profile.tmpl';

export class Profile extends Block {
  constructor() {
    const name = 'Петр';
    const avatarSrc = '';

    const backArrow = new BackArrow({});

    const avatar = new Avatar({
      avatar_size: '130px',
      avatar: avatarSrc,
    });

    const header = new Header({
      fontSize: '16px',
      fontWeight: '600',
      name,
    });

    const emailInput = new Input({
      disabled: 'disabled',
      name: 'email',
      labelText: 'Почта',
      type: 'email',
      value: 'petrovich@ya.ru',
    });

    const loginInput = new Input({
      disabled: 'disabled',
      name: 'login',
      labelText: 'Логин',
      type: 'text',
      value: 'StreiD',
    });

    const firstNameInput = new Input({
      disabled: 'disabled',
      name: 'first_name',
      labelText: 'Имя',
      type: 'text',
      value: 'Вячеслав',
    });

    const secondNameInput = new Input({
      disabled: 'disabled',
      name: 'second_name',
      labelText: 'Фамилия',
      type: 'text',
      value: 'Андриянов',
    });

    const displayNameInput = new Input({
      disabled: 'disabled',
      name: 'display_name',
      labelText: 'Имя в чате',
      type: 'text',
      value: 'Петрович',
    });

    const phoneInput = new Input({
      disabled: 'disabled',
      name: 'phone',
      labelText: 'Телефон',
      type: 'phone',
      value: '89194986765',
    });

    const linkChangeProfileData = new Link({
      children: 'Изменить данные',
      href: '/profile/edit',
    });

    const linkChangePassword = new Link({
      children: 'Изменить пароль',
      href: '/change_password',
    });

    const linkLogOut = new Link({
      children: 'Выйти',
      href: '/login',
    });

    super({
      wrapper_profile_class: styles.wrapper_profile,
      profile_main_class: styles.profile_main,
      profile_main_avatar_name_block_class: styles.profile_main_avatar_name_block,
      avatar_name_block_class: styles.avatar_name_block,
      profile_main_info_class: styles.profile_main_info,
      profile_main_form_class: styles.profile_main_form,
      profile_main_additional_button_class: styles.profile_main_additional_button,
      additional_button_element_class: styles.additional_button_element,
      avatar,
      backArrow,
      header,
      name,
      emailInput,
      loginInput,
      firstNameInput,
      secondNameInput,
      displayNameInput,
      phoneInput,
      linkChangeProfileData,
      linkChangePassword,
      linkLogOut,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
