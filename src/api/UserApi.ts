import { ChatUserDto, UserDto, UserPasswordDataDto, UserProfileDataDto } from '../types/api/userTypes';
import HTTPTransport, { RequestMethods } from './HTTPTransport';

const userApi = new HTTPTransport('/user');

/**
 * API для работы с пользователем
 */
export default class UserApi {
    /**
     * Запрос на смену данных пользователя
     */
    async changeProfileData(data: UserProfileDataDto): Promise<UserDto | Error> {
        return userApi.request('/profile', {
            method: RequestMethods.PUT,
            headers: {'Content-Type': 'application/json'},
            data
        });
    }

    /**
     * Запрос на смену аватара
     */
    async changeAvatar(file: File): Promise<UserDto | Error> {
        const data = new FormData();
        data.append('avatar', file);
        return userApi.request('/profile/avatar', {
            method: RequestMethods.PUT,
            data
        });
    }

    /**
     * Запрос на смену пароля
     */
    async changePassword(data: UserPasswordDataDto): Promise<void | Error> {
        return userApi.request('/password', {
            method: RequestMethods.PUT,
            headers: {'Content-Type': 'application/json'},
            data
        });
    }

    /**
     * Найти пользователя
     */
    async findUser(login: string): Promise<Array<ChatUserDto> | Error> {
        const data = {login};
        return userApi.request('/search', {
            method: RequestMethods.POST,
            headers: {'Content-Type': 'application/json'},
            data
        });
    }

    /**
     * Получить пользователя по id
     */
    async getUserById(id: number): Promise<UserDto | Error> {
        return userApi.get(`/${id}`);
    }
}
