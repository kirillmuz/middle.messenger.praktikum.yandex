import { 
    ChatDto, 
    ChatTokenDto, 
    CreateChatDto, 
    DeleteChatDto, 
    DeletedChatDto, 
    NewChatDto 
} from '../types/api/chatsTypes';
import HTTPTransport, { RequestMethods } from './HTTPTransport';

const chatsApi = new HTTPTransport('/chats');

/**
 * API взаимодействия с чатами
 */
export default class ChatsApi {
    /**
     * Получить список чатов
     */
    async getChats(): Promise<Array<ChatDto> | Error > {
        return chatsApi.get('');
    }

    /**
     * Создать чат
     */
    async createChat(data: CreateChatDto): Promise<NewChatDto | Error > {
        return chatsApi.request('', {
            method: RequestMethods.POST,
            headers: {'Content-Type': 'application/json'},
            data
        })
    }

    /**
     * Удалить чат
     */
    async deleteChat(data: DeleteChatDto): Promise<DeletedChatDto | Error > {
        return chatsApi.request('', {
            method: RequestMethods.DELETE,
            headers: {'Content-Type': 'application/json'},
            data
        })
    }

    /**
     * Запрос на смену аватара
     */
    async changeAvatar(chatId: number, file: File): Promise<ChatDto | Error> {
        const data = new FormData();
        data.append('chatId', chatId.toString());
        data.append('avatar', file);
        return chatsApi.request('/avatar', {
            method: RequestMethods.PUT,
            data
        });
    }

    /**
     * Добавить пользователя в чат
     */
    async addUserToChat(userId: number, chatId: number): Promise<void | Error> {
        const data = {
            chatId,
            users: [userId]
        }
        return chatsApi.request('/users', {
            method: RequestMethods.PUT,
            headers: {'Content-Type': 'application/json'},
            data
        });
    }

    /**
     * Удалить пользователя из чата
     */
    async deleteUserFromChat(userId: number, chatId: number): Promise<void | Error> {
        const data = {
            chatId,
            users: [userId]
        }
        return chatsApi.request('/users', {
            method: RequestMethods.DELETE,
            headers: {'Content-Type': 'application/json'},
            data
        });
    }

    /**
     * Получить токен чата
     */
    async getChatToken(chatId: number): Promise<ChatTokenDto | Error > {
        return chatsApi.request(`/token/${chatId}`, {
            method: RequestMethods.POST,
            headers: {'Content-Type': 'application/json'}
        })
    }
}
