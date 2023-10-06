/**
 * Ответ с пользователем
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

export interface UserProfileDataDto {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
}

export interface UserPasswordDataDto {
    oldPassword: string;
    newPassword: string;
}

export interface UserRegistrationDataDto {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

export interface UserRegistrationRequestDto {
    id: number;
}
