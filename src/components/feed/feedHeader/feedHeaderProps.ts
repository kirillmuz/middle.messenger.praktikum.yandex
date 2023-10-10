import { Chat } from '../../../types/chats';

/**
 * Свойства компонента "Шапка ленты"
 */
export interface FeedHeaderProps {
    /**
     * Чат
     */
    chat: Chat;

    /**
     * Путь к ресурсам
     */
    resourcesUrl?: string;
}
