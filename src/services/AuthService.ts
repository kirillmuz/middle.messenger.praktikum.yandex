import AuthApi from '../api/AuthApi';
import { Errors, RoutesAdresses } from '../constants/commonConstants';
import Router from '../core/Router';
import { LoginRequest } from '../types/api/authTypes';
import { mapUserDtoToModel } from '../utils/mapDtoToModels';
import { initStore } from '../utils/storeUtils';

initStore();
const authApi = new AuthApi();
const router = new Router();

/**
 * Получить текущего пользователя
 */
const getCurrentUser = async() => {
    const currentUser = await authApi.getCurrentUser();
    if(currentUser) {
        return mapUserDtoToModel(currentUser);
    }
};

/**
 * Войти
 */
const login = async(data: LoginRequest) => {
    await authApi.login(data);
    const currentUser = await getCurrentUser();
    window.store?.set({
        currentUser
    });
    router.go(RoutesAdresses.Chats);
};

/**
 * Выйти
 */
const logout = async() => {
    await authApi.logout();
    window.store?.set({
        currentUser: undefined
    })
    router.go(RoutesAdresses.Login);
};

/**
 * Распарсить ошибки авторизации
 */
const parseAuthError = (errorText: string) => {
    const errorObject = JSON.parse(errorText) as {reason: string};
    switch(errorObject.reason) {
    case Errors.UserAlreadyInSystem:
        return 'Вы уже вошли в систему';
    case Errors.IncorrectCreds:
        return 'Неверные логин или пароль';
    default:
        return 'Произошла непредвиденная ошибка';
    }
};

export {
    login,
    logout,
    parseAuthError
}
