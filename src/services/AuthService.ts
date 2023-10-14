import AuthApi from '../api/AuthApi';
import Router from '../core/Router';
import { RoutesAdresses } from '../constants/commonConstants';
import { LoginDto } from '../types/api/authTypes';
import { UserDto, UserRegistrationRequestDto } from '../types/api/userTypes';
import { RegisteringUser } from '../types/users';
import { mapUserDtoToModel } from '../utils/mapDtoToModels';
import { mapRegisteringUserToDto } from '../utils/mapModelsToDto';
import { initStore, resetStore } from '../utils/storeUtils';

initStore();
const authApi = new AuthApi();
const router = new Router();

/**
 * Получить текущего пользователя
 */
const getCurrentUser = async() => {
    const currentUser = await authApi.getCurrentUser();
    if(currentUser) {
        return mapUserDtoToModel(currentUser as UserDto);
    }
};

/**
 * Зарегистрировать пользователя
 */
const register = async (data: RegisteringUser) => {
    const currentUserIdData = await authApi.register(mapRegisteringUserToDto(data))
    if(currentUserIdData) {
        window.store?.set({
            currentUser: {
                id: (currentUserIdData as UserRegistrationRequestDto).id,
                avatar: '',
                displayName: '',
                email: data.email,
                firstName: data.firstName,
                login: data.login,
                phone: data.phone,
                secondName: data.secondName
            }
        });
        router.go(RoutesAdresses.Chats);
    }
}

/**
 * Войти
 */
const login = async(data: LoginDto) => {
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
    resetStore();
    router.go(RoutesAdresses.Login);
};

export {
    register,
    login,
    logout
}
