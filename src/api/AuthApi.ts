import { LoginRequest, UserRequest } from '../types/api/authTypes';
import HTTPTransport, { RequestMethods } from './HTTPTransport';

const authApi = new HTTPTransport('/auth');

export default class AuthApi {
    async register(data: object): Promise<unknown> {
        return authApi.request('/signup', {
            method: RequestMethods.POST,
            headers: {'Content-Type': 'application/json'},
            data
        });
    }

    async login(data: LoginRequest): Promise<void | Error> {
        return authApi.request('/signin', {
            method: RequestMethods.POST,
            headers: {'Content-Type': 'application/json'},
            data
        });
    }

    async logout(): Promise<unknown> {
        return authApi.request('/logout', {
            method: RequestMethods.POST
        });
    }

    async getCurrentUser(): Promise<UserRequest> {
        return authApi.get('/user');
    }
}
