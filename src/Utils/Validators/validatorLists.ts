import {
  isValidEmail,
  isValidLastName,
  isValidLogin, isValidName, isValidPassword, isValidPhone, required, ValidatorFunction,
} from './validate';

/**
 * Список валидаторов для логина
 */
export const loginValidatorlist = [required(), isValidLogin()];

/**
 * Список валидаторов для почты
 */
export const emailValidatorlist = [required(), isValidEmail()];

/**
 * Список валидаторов для Фамилии/Имени
 */
export const namelValidatorlist = [required(), isValidName()];

/**
 * Список валидаторов для Фамилии/Имени
 */
export const lastNamelValidatorlist = [required(), isValidLastName()];

/**
 * Список валидаторов для пароля
 */
export const passwordValidatorlist = [required(), isValidPassword()];

/**
 * Список валидаторов для телефона
 */
export const phonelValidatorlist = [required(), isValidPhone()];

/**
 * Список валидаторов для логина
 */

export const validatorsList: Record<string, ValidatorFunction[]> = {
  first_name: namelValidatorlist,
  second_name: lastNamelValidatorlist,
  login: loginValidatorlist,
  display_name: [],
  repeatPassword: passwordValidatorlist,
  password: passwordValidatorlist,
  email: emailValidatorlist,
  phone: phonelValidatorlist,
};
