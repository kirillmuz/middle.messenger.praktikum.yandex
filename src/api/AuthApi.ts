import { LoginDto } from '../types/api/authTypes';
import { UserDto, UserRegistrationDataDto, UserRegistrationRequestDto } from '../types/api/userTypes';
import HTTPTransport, { RequestMethods } from './HTTPTransport';

const authApi = new HTTPTransport('/auth');

/**
 * API авторизации/аутентификации
 */
export default class AuthApi {
    /**
     * Запрос на регистрацию пользователя
     */
    async register(data: UserRegistrationDataDto): Promise<UserRegistrationRequestDto | Error> {
        return authApi.request('/signup', {
            method: RequestMethods.POST,
            headers: {'Content-Type': 'application/json'},
            data
        });
    }

    /**
     * Запрос на вход
     */
    async login(data: LoginDto): Promise<void | Error> {
        return authApi.request('/signin', {
            method: RequestMethods.POST,
            headers: {'Content-Type': 'application/json'},
            data
        });
    }

    /**
     * Запрос на выход
     */
    async logout(): Promise<void | Error> {
        return authApi.request('/logout', {
            method: RequestMethods.POST
        });
    }

    /**
     * Запрос на получение текущего пользователя
     */
    async getCurrentUser(): Promise<UserDto | Error> {
        return authApi.get('/user');
    }
}
