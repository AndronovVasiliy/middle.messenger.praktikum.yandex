import Handlebars from 'handlebars';
import ErrorTmpl from './Error.tmpl.ts';
import styles from './Error.module.less';

export const Error = (title: string, subtitle: string) => {
    const template = Handlebars.compile(ErrorTmpl);

    return template({
        wrapper_error_class: styles.wrapper_error,
        error_title_class: styles.error_title,
        error_subtitle_class: styles.error_subtitle,
        titleText: title,
        subtitleText: subtitle,
    });
};
