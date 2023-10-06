import UserApi from '../api/UserApi';
import { RoutesAdresses } from '../constants/commonConstants';
import Router from '../core/Router';
import { UserDto, UserPasswordDataDto } from '../types/api/userTypes';
import { User } from '../types/users';
//import { Errors } from '../constants/commonConstants';
import { mapUserDtoToModel } from '../utils/mapDtoToModels';
import { mapUserModelToDto } from '../utils/mapModelsToDto';
import { initStore } from '../utils/storeUtils';

initStore();
const userApi = new UserApi();
const router = new Router();

/**
 * Изменить данные пользователя
 */
const changeProfileData = async(data: User) => {
    const currentUserDto = await userApi.changeProfileData(mapUserModelToDto(data));
    if(currentUserDto) {
        window.store?.set({
            currentUser: mapUserDtoToModel(currentUserDto as UserDto)
        });
        router.go(RoutesAdresses.Profile);
    }
}

/**
 * Изменить аватар 
 */
const changeAvatar = async(file: File) => {
    const currentUserDto = await userApi.changeAvatar(file);
    if(currentUserDto) {
        window.store?.set({
            currentUser: mapUserDtoToModel(currentUserDto as UserDto)
        });
    }
};

/**
 * Изменить данные пользователя
 */
const changePassword = async(data: UserPasswordDataDto) => {
    await userApi.changePassword(data);
    router.go(RoutesAdresses.Profile);
}

/**
 * Распарсить ошибки авторизации
 */
const parseUserServiceError = (errorText: string) => {
    const errorObject = JSON.parse(errorText) as {reason: string};
    switch(errorObject.reason) {
    default:
        return 'Произошла непредвиденная ошибка';
    }
};

export {
    changeAvatar,
    changeProfileData,
    changePassword,
    parseUserServiceError
}
