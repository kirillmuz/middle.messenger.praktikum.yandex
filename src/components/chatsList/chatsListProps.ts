import { Chat } from '../../types/chats';

/**
 * Свойства компонента "Список чатов"
 */
export interface ChatsListProps {
    /**
     * Список чатов
     */
    chatsList: Array<Chat>;
}
