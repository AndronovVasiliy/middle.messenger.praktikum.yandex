import Handlebars from 'handlebars';
import LinkTmpl from './Link.tmpl';
import styles from './Link.module.less';

export const Link = (textLink: string, href: string) => {
  const template = Handlebars.compile(LinkTmpl);

  return template({
    textLink,
    class: styles.link,
    href,
  });
};
