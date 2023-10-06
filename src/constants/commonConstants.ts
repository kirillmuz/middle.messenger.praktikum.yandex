/**
 * Адрес API
 */
export const ApiHost = 'https://ya-praktikum.tech/api/v2';

/**
 * Список адресов
 */
export enum RoutesAdresses {
    Login = '/',
    Registration = '/sign-up',
    Chats = '/messenger',
    Profile = '/settings',
    ChangePassword = '/change-password',
    ChangeProfileData = '/change-data',
    Error500 = '/internal-server-error',
    Error404 = '/not-found'
}

/**
 * Список ошибок сервера
 */
export const enum Errors {
    UserAlreadyInSystem = 'User already in system',
    IncorrectCreds = 'Login or password is incorrect',
    EmailAlreadyExists = 'Email already exists'
}
