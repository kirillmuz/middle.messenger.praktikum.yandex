/**
 * Модель логина
 */
export interface LoginRequest {
    login: string;
    password: string;
}

/**
 * Ответ с пользователем
 */
export interface UserRequest {
    id: number;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    avatar: string;
    phone: string;
    email: string;
}
