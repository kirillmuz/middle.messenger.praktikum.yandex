/**
 * Адрес API
 */
export const ApiHost = 'https://ya-praktikum.tech/api/v2';

/**
 * Адрес API для WebSocket
 */
export const WebSocketHost = 'wss://ya-praktikum.tech/ws'

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
    EmailAlreadyExists = 'Email already exists',
    CookieIsNotValid = 'Cookie is not valid',
    UserNotFound = 'User not found'
}
