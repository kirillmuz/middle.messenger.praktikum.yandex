import { ChatUserDto } from './userTypes';

/**
 * Объект сообщения
 */
export interface MessageDto {
    user: ChatUserDto;
    time: string;
    content: string;
    id: number;
}

/**
 * Объект чата
 */
export interface ChatDto {
    id: number;
    title: string;
    avatar: string | null; 
    created_by: number;
    unread_count: number;
    last_message?: MessageDto | null;
}

/**
 * Объект создаваемого чата
 */
export interface CreateChatDto {
    title: string;
}

/**
 * Объект нового чата
 */
export interface NewChatDto {
    id: number;
}

/**
 * Объект удаляемого чата
 */
export interface DeleteChatDto {
    chatId: number;
}

/**
 * Объект удаленного чата
 */
export interface DeletedChatDto {
    result: {
        id: number;
        title: string;
        avatar?: string | null;
        created_by: number;
    };
    userId: number;
}

/**
 * Объект токена чата
 */
export interface ChatTokenDto {
    token: string;
}
