import { LoginDto } from '../types/api/authTypes';
import { UserDto, UserRegistrationDataDto, UserRegistrationRequestDto } from '../types/api/userTypes';
import HTTPTransport from './HTTPTransport';

const authApi = new HTTPTransport('/auth');

/**
 * API авторизации/аутентификации
 */
export default class AuthApi {
    /**
     * Запрос на регистрацию пользователя
     */
    async register(data: UserRegistrationDataDto): Promise<UserRegistrationRequestDto | Error> {
        return authApi.post('/signup', {
            headers: {'Content-Type': 'application/json'},
            data
        });
    }

    /**
     * Запрос на вход
     */
    async login(data: LoginDto): Promise<void | Error> {
        return authApi.post('/signin', {
            headers: {'Content-Type': 'application/json'},
            data
        });
    }

    /**
     * Запрос на выход
     */
    async logout(): Promise<void | Error> {
        return authApi.post('/logout');
    }

    /**
     * Запрос на получение текущего пользователя
     */
    async getCurrentUser(): Promise<UserDto | Error> {
        return authApi.get('/user');
    }
}
