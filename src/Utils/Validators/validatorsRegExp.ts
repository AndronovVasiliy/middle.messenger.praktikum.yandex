/**
 * Логин
 */
export const loginRegex = /^(?!^\d+$)[\w-]{3,20}$/;

/**
 * Имя/Фамилия
 */
export const nameRegex = /^[А-ЯЁA-Zа-яёa-z\- ]+$/;

/**
 * Имя/Фамилия
 */
export const lastNameRegex = /^[А-ЯЁA-Zа-яёa-z\- ]+$/;

/**
 * Email
 */
export const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

/**
 * Пароль
 */
export const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,40}$/;

/**
 * Телефон
 */
export const phoneRegex = /^\+?\d{10,15}$/;
