import Handlebars from 'handlebars';
import HeaderTmpl from './Header.tmpl';
import styles from './Header.module.less';

export const Header = (name: string, fontWeight: string, fontSize: string) => {
  const template = Handlebars.compile(HeaderTmpl);

  return template({
    wrapper_header: styles.wrapper_header,
    fontWeight,
    fontSize,
    name,
  });
};
