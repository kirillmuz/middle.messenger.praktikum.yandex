import { ChatUser } from './users';

/**
 * Модель сообщения
 */
export interface Message {
    /**
     * Контент
     */
    content: string;
    
    /**
     * Идентификатор
     */
    id: number;

    /**
     * Время
     */
    time: string;

    /**
     * Автор
     */
    user: ChatUser;
}

export interface Chat {
    /**
     * Аватар
     */
    avatar: string | null; 
    
    /**
     * Владелец
     */
    createdBy: number;
    
    /**
     * Идентификатор
     */
    id: number;

    /**
     * Последнее сообщение
     */
    lastMessage?: Message | null;

    /**
     * Название
     */
    title: string;

    /**
     * Кол-во непрочитанных сообщений
     */
    unreadCount: number;
}
