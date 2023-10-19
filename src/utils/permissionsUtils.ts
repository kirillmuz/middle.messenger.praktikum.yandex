import AuthApi from '../api/AuthApi';
import { RoutesAdresses } from '../constants/commonConstants';
import { UserDto } from '../types/api/userTypes';
import { parseApiError } from './errorsUtils';
import { initStore, resetStore } from './storeUtils'

/**
 * Пути роутов аутентификации
 */
const authPaths = [RoutesAdresses.Login, RoutesAdresses.Registration];

/**
 * Проверить права на путь, получить 
 * путь редиректа в случае отсутствия прав
 */
export const hasPermissionOrRedirectPath = async(path: string) => {
    initStore();
    const authApi = new AuthApi();
    const stateUser = window.store?.getState().currentUser;
    const currentUser = await authApi.getCurrentUser()
        .catch((err: string) => {
            if(parseApiError(err) === 'Нет прав') {
                return false;
            } 
        });

    // Если нет пользователя в стейте, но есть куки, разлогиниваем и редиректим
    if(!stateUser && currentUser || stateUser?.id !== (currentUser as UserDto).id) {
        await authApi.logout().catch(() => {
            console.log('Ошибка разлогина');
        });
        resetStore();
        return RoutesAdresses.Login;
    }

    // Проверить, что без юзера идем только на утентификацию
    if(!stateUser && !currentUser && !authPaths.some(p=>p === path)) {
        return RoutesAdresses.Login;
    }

    // Если вошли в систему, то нельзя идти на утентификацию
    if(stateUser && currentUser && stateUser.id === (currentUser as UserDto).id && authPaths.some(p=>p === path)) {
        return RoutesAdresses.Chats;
    }

    return path;
}
