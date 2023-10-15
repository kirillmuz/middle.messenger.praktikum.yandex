import { Errors } from '../constants/commonConstants';

/**
 * Распарсить ошибки запросов
 */
export const parseApiError = (errorText: string) => {
    const errorObject = JSON.parse(errorText) as {reason: string};
    switch(errorObject.reason) {
    case Errors.UserAlreadyInSystem:
        return 'Вы уже вошли в систему';
    case Errors.IncorrectCreds:
        return 'Неверные логин или пароль';
    case Errors.EmailAlreadyExists:
        return 'Пользователь с таким email уже зарегистрирован';
    case Errors.CookieIsNotValid:
        return 'Нет прав';
    case Errors.UserNotFound:
        return 'Пользователь не найден';
    default:
        return 'Произошла непредвиденная ошибка';
    }
};
