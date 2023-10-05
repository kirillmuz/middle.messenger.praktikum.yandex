import { UserRequest } from '../types/api/authTypes';
import { User } from '../types/users';

/**
 * Замапить поля ответа на модель пользователя
 */
export const mapUserDtoToModel = (userDto: UserRequest) => {
    return {
        avatar: userDto.avatar,
        displayName: userDto.display_name,
        email: userDto.email,
        firstName: userDto.first_name,
        id: userDto.id,
        login: userDto.login,
        phone: userDto.phone,
        secondName: userDto.second_name
    } as User;
};
