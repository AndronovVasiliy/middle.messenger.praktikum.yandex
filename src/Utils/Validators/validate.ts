import {
  emailRegex, lastNameRegex, loginRegex, nameRegex, passwordRegex, phoneRegex,
} from './validatorsRegExp';

export type ValidatorFunction = (value: string) => string | null;
type ValidationResult = string | null;

/**
 * Валидирует значение с помощью массива валидаторов (validators).
 */
export const validateValue = (
  value: Event | HTMLInputElement,
  validators: ValidatorFunction[],
): void => {
  let validationResult: ValidationResult = null;

  let inputValue: string;
  if (value instanceof HTMLInputElement) {
    inputValue = value.value;
  } else if (value instanceof Event) {
    const inputElement = value.target as HTMLInputElement;
    inputValue = inputElement.value;
  } else {
    throw new Error('Неверный тип аргумента value');
  }

  const inputsLabel = value instanceof HTMLInputElement
    ? value.parentNode
    : (value.target as HTMLInputElement).parentNode;

  const errorSpan = inputsLabel!.querySelector('span') as Element;

  const results = validators.map((validator) => validator(inputValue));

  validationResult = results.find((res) => res !== null) || null;
  if (validationResult) {
    errorSpan.textContent = validationResult;
  }

  if (!validationResult) {
    errorSpan.textContent = validationResult;
  }
};

/**
 * Обязательноесть заполнения
 */
export const required = (
  message = 'Обязательное поле',
): ValidatorFunction => (value) => (value ? null : message);

/**
 * Валидатор логина
 */
export const isValidLogin = (
  message = 'Логин должен быть от 3 до 20 символов и содержать только буквы, цифры, дефис и нижнее подчеркивание.',
): ValidatorFunction => (value) => (loginRegex.test(value) ? null : message);

/**
 * Валидатор имени
 */
export const isValidName = (
  message = 'Имя должно содержать только буквы, дефисы и пробелы.',
): ValidatorFunction => (value) => (nameRegex.test(value) ? null : message);

/**
 * Валидатор фамилии
 */
export const isValidLastName = (
  message = 'Фамилия должна содержать только буквы, дефисы и пробелы.',
): ValidatorFunction => (value) => (lastNameRegex.test(value) ? null : message);

/**
 * Валидатор email
 */
export const isValidEmail = (
  message = 'Неправильный формат email.',
): ValidatorFunction => (value) => (emailRegex.test(value) ? null : message);

/**
 * Валидатор пароля
 */
export const isValidPassword = (
  message = 'Пароль должен содержать от 8 до 40 символов и хотя бы одну заглавную букву и цифру.',
): ValidatorFunction => (value) => (passwordRegex.test(value) ? null : message);

/**
 * Валидация телефона
*/
export const isValidPhone = (
  message = 'Невалидный телефон',
): ValidatorFunction => (value) => (phoneRegex.test(value) ? null : message);
