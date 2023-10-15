import { ChatUserRole } from '../users';

/**
 * Объект пользователя
 */
export interface UserDto {
    id: number;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    avatar: string;
    phone: string;
    email: string;
}

/**
 * Объект данных профиля
 */
export interface UserProfileDataDto {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
}

/**
 * Объект данных о пароле пользователя
 */
export interface UserPasswordDataDto {
    oldPassword: string;
    newPassword: string;
}

/**
 * Объект данных регистрации пользователя
 */
export interface UserRegistrationDataDto {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

/**
 * Объект ответа регистрации пользователя
 */
export interface UserRegistrationRequestDto {
    id: number;
}

/**
 * Объект пользователя в чате
 */
export interface ChatUserDto {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    avatar: string;
    id?: number;
    role?: ChatUserRole;
}
