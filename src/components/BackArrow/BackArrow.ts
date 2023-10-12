import Block from '../../Utils/Block';
import { template } from './BackArrow.tmpl';
import styles from './BackArrow.module.less';

export class BackArrow extends Block {
  render() {
    return this.compile(template, {
      wrapper_back_arrow_class: styles.wrapper_back_arrow,
    });
  }
}
