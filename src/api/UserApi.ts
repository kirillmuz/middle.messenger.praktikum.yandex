import { ChatUserDto, UserDto, UserPasswordDataDto, UserProfileDataDto } from '../types/api/userTypes';
import HTTPTransport from './HTTPTransport';

const userApi = new HTTPTransport('/user');

/**
 * API для работы с пользователем
 */
export default class UserApi {
    /**
     * Запрос на смену данных пользователя
     */
    async changeProfileData(data: UserProfileDataDto): Promise<UserDto | Error> {
        return userApi.put('/profile', {
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
        return userApi.put('/profile/avatar', {data});
    }

    /**
     * Запрос на смену пароля
     */
    async changePassword(data: UserPasswordDataDto): Promise<void | Error> {
        return userApi.put('/password', {
            headers: {'Content-Type': 'application/json'},
            data
        });
    }

    /**
     * Найти пользователя
     */
    async findUser(login: string): Promise<Array<ChatUserDto> | Error> {
        const data = {login};
        return userApi.post('/search', {
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
