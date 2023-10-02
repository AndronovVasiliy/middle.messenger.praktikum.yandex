import Handlebars from 'handlebars';
import RegistrationTmpl from './Registration.tmpl.ts';
import styles from './Registration.module.less';

export const Registration = () => {
    const template = Handlebars.compile(RegistrationTmpl);

    return template({
        wrapper_registration_class: styles.wrapper_registration,
        registration_form_class: styles.registration_form,
        registration_form_title_class: styles.registration_form_title,
        titleText: "Регистрация",
    });
};
