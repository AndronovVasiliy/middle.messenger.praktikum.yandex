import {
  Avatar, BackArrow, Button, Header, Input,
} from '@components';
import Block from '../../Utils/Block';
import styles from './EditProfile.module.less';
import { template } from './EditProfile.tmpl';
import { validateValue } from '../../Utils/Validators/validate';
import {
  emailValidatorlist,
  lastNamelValidatorlist,
  loginValidatorlist,
  namelValidatorlist, phonelValidatorlist,
} from '../../Utils/Validators/validatorLists';
import { submit } from '../../Utils/submitEvent';

export class EditProfile extends Block {
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
      name: 'email',
      type: 'email',
      labelText: 'Введите почту',
      events: {
        blur: (e) => validateValue(e, emailValidatorlist),
        // input: (e) => validateValue(e, emailValidatorlist),
      },
    });

    const loginInput = new Input({
      name: 'login',
      type: 'text',
      labelText: 'Введите логин',
      events: {
        blur: (e) => validateValue(e, loginValidatorlist),
        // input: (e) => validateValue(e, loginValidatorlist),
      },
    });

    const firstNameInput = new Input({
      name: 'first_name',
      type: 'text',
      labelText: 'Введите имя',
      events: {
        blur: (e) => validateValue(e, namelValidatorlist),
        // input: (e) => validateValue(e, namelValidatorlist),
      },
    });

    const secondNameInput = new Input({
      name: 'second_name',
      type: 'text',
      labelText: 'Введите фамилию',
      events: {
        blur: (e) => validateValue(e, lastNamelValidatorlist),
        // input: (e) => validateValue(e, lastNamelValidatorlist),
      },
    });

    const displayNameInput = new Input({
      name: 'display_name',
      type: 'text',
      labelText: 'Имя в чате',
    });

    const phoneInput = new Input({
      name: 'phone',
      type: 'phone',
      labelText: 'Введите телефон',
      events: {
        blur: (e) => validateValue(e, phonelValidatorlist),
        // input: (e) => validateValue(e, phonelValidatorlist),
      },
    });

    const saveButton = new Button({
      children: 'Сохранить',
      type: 'submit',
      events: {
        click: (event) => submit(event),
      },
    });

    super({
      wrapper_edit_profile_class: styles.wrapper_edit_profile,
      edit_profile_main_class: styles.edit_profile_main,
      edit_profile_main_avatar_name_block_class: styles.edit_profile_main_avatar_name_block,
      edit_profile_main_info_class: styles.edit_profile_main_info,
      edit_profile_main_form_class: styles.edit_profile_main_form,
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
      saveButton,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
