import { Button, Input, Link } from '@components';
import styles from './Registration.module.less';
import { template } from './Registration.tmpl';
import { validateValue } from '../../Utils/Validators/validate';
import {
  emailValidatorlist,
  lastNamelValidatorlist,
  loginValidatorlist,
  namelValidatorlist,
  passwordValidatorlist,
  phonelValidatorlist,
} from '../../Utils/Validators/validatorLists';
import { submit } from '../../Utils/submitEvent';
import Block from '../../Utils/Block';

export class Registration extends Block {
  constructor() {
    const emailInput = new Input({
      name: 'email',
      type: 'email',
      placeholder: 'Введите почту',
      events: {
        blur: (e) => validateValue(e, emailValidatorlist),
        // input: (e) => validateValue(e, emailValidatorlist),
      },
    });

    const loginInput = new Input({
      name: 'login',
      type: 'text',
      placeholder: 'Введите логин',
      events: {
        blur: (e) => validateValue(e, loginValidatorlist),
        // input: (e) => validateValue(e, loginValidatorlist),
      },
    });

    const firstNameInput = new Input({
      name: 'first_name',
      type: 'text',
      placeholder: 'Введите имя',
      events: {
        blur: (e) => validateValue(e, namelValidatorlist),
        // input: (e) => validateValue(e, namelValidatorlist),
      },
    });

    const secondNameInput = new Input({
      name: 'second_name',
      type: 'text',
      placeholder: 'Введите фамилию',
      events: {
        blur: (e) => validateValue(e, lastNamelValidatorlist),
        // input: (e) => validateValue(e, lastNamelValidatorlist),
      },
    });

    const displayNameInput = new Input({
      name: 'display_name',
      type: 'text',
      placeholder: 'Введите имя в чате',
    });

    const phoneInput = new Input({
      name: 'phone',
      type: 'phone',
      placeholder: 'Введите телефон',
      events: {
        blur: (e) => validateValue(e, phonelValidatorlist),
        // input: (e) => validateValue(e, phonelValidatorlist),
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

    const repeatPasswordInput = new Input({
      name: 'repeatPassword',
      type: 'password',
      placeholder: 'Повторите пароль',
      events: {
        blur: (e) => validateValue(e, passwordValidatorlist),
        // input: (e) => validateValue(e, passwordValidatorlist),
      },
    });

    const registrationButton = new Button({
      children: 'Зарегистрироваться',
      type: 'submit',
      events: {
        click: (event) => submit(event),
      },
    });

    const linkLogin = new Link({
      children: 'Войти',
      href: '/login',
    });

    super({
      wrapper_registration_class: styles.wrapper_registration,
      registration_form_class: styles.registration_form,
      registration_form_title_class: styles.registration_form_title,
      titleText: 'Регистрация',
      emailInput,
      loginInput,
      firstNameInput,
      secondNameInput,
      displayNameInput,
      phoneInput,
      passwordInput,
      repeatPasswordInput,
      registrationButton,
      linkLogin,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
