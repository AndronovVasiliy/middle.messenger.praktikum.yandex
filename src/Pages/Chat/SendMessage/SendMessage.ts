import Block from '../../../Utils/Block';
import styles from './SendMessage.module.less';
import { template } from './SendMessage.tmpl';

export class SendMessage extends Block {
  constructor(props: any) {
    super({
      wrapper_send_message_class: styles.wrapper_send_message,
      send_message_form_class: styles.send_message_form,
      input_send_message_class: styles.input_send_message,
      send_button_class: styles.send_button,
      button_img_class: styles.button_img,
      ...props,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
