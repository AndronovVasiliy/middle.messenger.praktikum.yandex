import Handlebars from 'handlebars';
import LoginTmpl from './Login.tmpl';
import styles from './Login.module.less';

export const Login = () => {
  const template = Handlebars.compile(LoginTmpl);

  return template({
    wrapper_login_class: styles.wrapper_login,
    login_form_class: styles.login_form,
    login_form_title_class: styles.login_form_title,
    titleText: 'Вход',
  });
};
