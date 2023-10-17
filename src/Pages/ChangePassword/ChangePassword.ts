import {
  Avatar, BackArrow, Button, Header, Input,
} from '@components';
import Block from '../../Utils/Block';
import styles from './ChangePassword.module.less';
import { template } from './ChangePassword.tmpl';
import { validateValue } from '../../Utils/Validators/validate';
import { passwordValidatorlist } from '../../Utils/Validators/validatorLists';

export class ChangePassword extends Block {
  constructor() {
    const name = 'Петр';
    const avatarSrc = '';

    const backArrow = new BackArrow({});

    const header = new Header({
      fontSize: '16px',
      fontWeight: '600',
      name,
    });

    const avatar = new Avatar({
      avatar_size: '130px',
      avatar: avatarSrc,
    });

    const passwordInput = new Input({
      name: 'password',
      type: 'password',
      labelText: 'Введите пароль',
      events: {
        blur: (e) => validateValue(e, passwordValidatorlist),
        // input: (e) => validateValue(e, passwordValidatorlist),
      },
    });

    const oldPasswordInput = new Input({
      name: 'repeatPassword',
      type: 'password',
      labelText: 'Повторите пароль',
      events: {
        blur: (e) => validateValue(e, passwordValidatorlist),
        // input: (e) => validateValue(e, passwordValidatorlist),
      },
    });

    const repeatPasswordInput = new Input({
      name: 'repeatPassword',
      type: 'password',
      labelText: 'Повторите пароль',
      events: {
        blur: (e) => validateValue(e, passwordValidatorlist),
        // input: (e) => validateValue(e, passwordValidatorlist),
      },
    });

    const saveButton = new Button({
      children: 'Сохранить',
      type: 'submit',
    });

    super({
      wrapper_change_password_class: styles.wrapper_change_password,
      change_password_main_class: styles.change_password_main,
      password_main_avatar_name_block_class: styles.password_main_avatar_name_block,
      change_password_info_class: styles.change_password_info,
      info_form_class: styles.info_form,
      name,
      backArrow,
      header,
      avatar,
      oldPasswordInput,
      passwordInput,
      repeatPasswordInput,
      saveButton,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
