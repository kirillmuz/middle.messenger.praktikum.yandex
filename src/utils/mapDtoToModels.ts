import { ChatDto } from '../types/api/chatsTypes';
import { ChatUserDto, UserDto } from '../types/api/userTypes';
import { Chat, Message } from '../types/chats';
import { ChatUser, User } from '../types/users';

/**
 * Замапить поля объекта на модель пользователя
 */
export const mapUserDtoToModel = (userDto: UserDto) => {
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

/**
 * Замапить поля объекта на модель пользователя чата
 */
export const mapChatUserDtoToModel = (chatUserDto: ChatUserDto) => {
    return {
        avatar: chatUserDto.avatar,
        displayName: chatUserDto.display_name,
        firstName: chatUserDto.first_name,
        id: chatUserDto.id,
        secondName: chatUserDto.second_name,
        login: chatUserDto.login
    } as ChatUser;
};

/**
 * Замапить поля объекта на модель чата
 */
export const mapChatDtoToModel = (chatDto: ChatDto) => {
    return {
        avatar: chatDto.avatar,
        createdBy: chatDto.created_by,
        id: chatDto.id,
        lastMessage: chatDto.last_message ? {
            content: chatDto.last_message.content,
            id: chatDto.last_message.id,
            time: chatDto.last_message.time,
            user: {
                avatar: chatDto.last_message.user.avatar,
                displayName: chatDto.last_message.user.display_name,
                firstName: chatDto.last_message.user.first_name,
                login: chatDto.last_message.user.login,
                secondName: chatDto.last_message.user.second_name,
            } as ChatUser,
        } as Message : null,
        title: chatDto.title,
        unreadCount: chatDto.unread_count,
    } as Chat;
}
