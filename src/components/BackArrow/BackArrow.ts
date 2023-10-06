import Handlebars from 'handlebars';
import BackArrowTmpl from './BackArrow.tmpl';
import styles from './BackArrow.module.less';

export const BackArrow = () => {
  const template = Handlebars.compile(BackArrowTmpl);

  return template({
    wrapper_back_arrow_class: styles.wrapper_back_arrow,
  });
};
