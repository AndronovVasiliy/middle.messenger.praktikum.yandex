import Block from '../../Utils/Block';
import styles from './SearchField.module.less';
import { template } from './SearchField.tmpl';

export class SearchField extends Block {
  constructor() {
    super({
      searchFieldClass: styles.wrapper,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
