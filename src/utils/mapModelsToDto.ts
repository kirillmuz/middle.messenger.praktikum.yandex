import { UserDto, UserRegistrationDataDto } from '../types/api/userTypes';
import { RegisteringUser, User } from '../types/users';

/**
 * Замапить модель на поля пользователя
 */
export const mapUserModelToDto = (userModel: User) => {
    return {
        avatar: userModel.avatar,
        display_name: userModel.displayName,
        email: userModel.email,
        first_name: userModel.firstName,
        id: userModel.id,
        login: userModel.login,
        phone: userModel.phone,
        second_name: userModel.secondName
    } as UserDto;
};

/**
 * Замапить модель на поля регистрируемого пользователя
 */
export const mapRegisteringUserToDto = (registeringUserModel: RegisteringUser) => {
    return {
        email: registeringUserModel.email,
        first_name: registeringUserModel.firstName,
        login: registeringUserModel.login,
        password: registeringUserModel.password,
        phone: registeringUserModel.phone,
        second_name: registeringUserModel.secondName,
    } as UserRegistrationDataDto;
}
