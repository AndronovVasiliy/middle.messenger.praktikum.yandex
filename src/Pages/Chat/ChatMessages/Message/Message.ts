import Block from '../../../../Utils/Block';
import styles from './Message.module.less';
import { template } from './Message.tmpl';

type TProps = {
  messageText: string,
  img: string,
  time: string,
  isOwned: boolean,
};

export class Message extends Block {
  constructor(props: TProps) {
    const additionalClass = props.isOwned ? styles.is_owned : '';
    super({
      wrapper_message_class: `${styles.wrapper_message} ${additionalClass}`,
      message_text_class: styles.message_text,
      message_img_class: styles.message_img,
      message_time_class: styles.message_time,
      ...props,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
