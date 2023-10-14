import UserApi from '../api/UserApi';
import { RoutesAdresses } from '../constants/commonConstants';
import Router from '../core/Router';
import { ChatUserDto, UserDto, UserPasswordDataDto } from '../types/api/userTypes';
import { User } from '../types/users';
import { mapChatUserDtoToModel, mapUserDtoToModel } from '../utils/mapDtoToModels';
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
 * Найти пользователя
 */
const findUser = async(login: string) => {
    const findedUsers = await userApi.findUser(login);
    const findedUserDto = (findedUsers as Array<ChatUserDto>)[0];
    return mapChatUserDtoToModel(findedUserDto);
}

/**
 * Получить пользователя по id
 */
const getUserById = async(id: number) => {
    const user = await userApi.getUserById(id);
    return mapUserDtoToModel(user as UserDto);
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
    parseUserServiceError,
    findUser,
    getUserById
}
