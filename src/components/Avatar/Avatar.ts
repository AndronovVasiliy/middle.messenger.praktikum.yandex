import Handlebars from 'handlebars';
import AvatarTmpl from './Avatar.tmpl';
import styles from './Avatar.module.less';

export const Avatar = (avatar: string, width: string, height: string) => {
  const template = Handlebars.compile(AvatarTmpl);

  return template({
    wrapper_avatar_class: styles.wrapper_avatar,
    avatar_width: width,
    avatar_height: height,
    avatar,
  });
};
