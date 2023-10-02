import Handlebars from 'handlebars';
import ButtonTmpl from './Button.tmpl.ts';
import styles from './Button.module.less';

export const Button = (textButton: string, type: string) => {
    const template = Handlebars.compile(ButtonTmpl);

    return template({
        wrapper_button_class: styles.wrapper_button,
        textButton,
        type,
    });
};
