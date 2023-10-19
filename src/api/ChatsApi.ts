import { 
    ChatDto, 
    ChatTokenDto, 
    CreateChatDto, 
    DeleteChatDto, 
    DeletedChatDto, 
    NewChatDto 
} from '../types/api/chatsTypes';
import { ChatUserDto } from '../types/api/userTypes';
import HTTPTransport from './HTTPTransport';

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
        return chatsApi.post('', {
            headers: {'Content-Type': 'application/json'},
            data
        })
    }

    /**
     * Удалить чат
     */
    async deleteChat(data: DeleteChatDto): Promise<DeletedChatDto | Error > {
        return chatsApi.delete('', {
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
        return chatsApi.put('/avatar', {data});
    }

    /**
     * Добавить пользователя в чат
     */
    async addUserToChat(userId: number, chatId: number): Promise<void | Error> {
        const data = {
            chatId,
            users: [userId]
        }
        return chatsApi.put('/users', {
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
        return chatsApi.delete('/users', {
            headers: {'Content-Type': 'application/json'},
            data
        });
    }

    /**
     * Получить токен чата
     */
    async getChatToken(chatId: number): Promise<ChatTokenDto | Error> {
        return chatsApi.post(`/token/${chatId}`, {
            headers: {'Content-Type': 'application/json'}
        })
    }

    /**
     * Получить пользователей чата
     */
    async getChatUsers(chatId: number): Promise<Array<ChatUserDto> | Error> {
        return chatsApi.get(`/${chatId}/users`);
    }
}
