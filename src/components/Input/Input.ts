import Handlebars from 'handlebars';
import InputTmpl from './Input.tmpl';
import styles from './Input.module.less';

export const Input = (
  name: string,
  type: string,
  placeholder: string,
  labelText?: string,
  value?: string,
  disabled?: string,
) => {
  const template = Handlebars.compile(InputTmpl);

  return template({
    wrapper_input_class: styles.wrapper_input,
    input_labels_class: styles.input_labels,
    input_class: styles.input,
    name,
    type,
    placeholder,
    labelText,
    value,
    disabled,
  });
};
