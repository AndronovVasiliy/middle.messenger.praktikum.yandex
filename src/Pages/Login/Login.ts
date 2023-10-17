import { Button, Input, Link } from '@components';
import styles from './Login.module.less';
import Block from '../../Utils/Block';
import { template } from './Login.tmpl';
import { validateValue } from '../../Utils/Validators/validate';
import { loginValidatorlist, passwordValidatorlist } from '../../Utils/Validators/validatorLists';
import { submit } from '../../Utils/submitEvent';

export class Login extends Block {
  constructor() {
    const loginInput = new Input({
      name: 'login',
      type: 'text',
      placeholder: 'Введите логин',
      events: {
        blur: (e) => validateValue(e, loginValidatorlist),
        // input: (e) => validateValue(e, loginValidatorlist),
      },
    });

    const passwordInput = new Input({
      name: 'password',
      type: 'password',
      placeholder: 'Введите пароль',
      events: {
        blur: (e) => validateValue(e, passwordValidatorlist),
        // input: (e) => validateValue(e, passwordValidatorlist),
      },
    });

    const button = new Button({
      children: 'Авторизоваться',
      type: 'submit',
      events: {
        click: (event) => submit(event),
      },
    });

    const linkRegistration = new Link({
      children: 'Зарегистрироваться',
      href: '/registration',
    });

    super({
      wrapper_login_class: styles.wrapper_login,
      login_form_class: styles.login_form,
      login_form_title_class: styles.login_form_title,
      titleText: 'Вход',
      loginInput,
      passwordInput,
      button,
      linkRegistration,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
