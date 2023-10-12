import { validateValue } from './Validators/validate';
import { validatorsList } from './Validators/validatorLists';

export const submit = (event: Event): void => {
  event.preventDefault();
  const inputs = (<HTMLElement>(<HTMLElement>event.target).parentNode).querySelectorAll('[name="input_label"]');
  const values: Record<string, string> = {};

  inputs.forEach((input) => {
    const el = input.querySelectorAll('input')[0];
    const fieldName = el.name;
    values[fieldName] = el.value;
    validateValue(el, validatorsList[fieldName]);
  });

  console.log('form values', values);
};
