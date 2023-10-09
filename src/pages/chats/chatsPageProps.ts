import { FeedMessage } from '../../types/commonTypes';
import { Chat } from '../../types/chats';

/**
 * Свойства компонента страницы чатов
 */
export interface ChatsPageProps {
    /**
     * Список чатов
     */
    chatsList?: Array<Chat>;

    /**
     * Список сообщений выбранного чата
     */
    selectedChatMessagesList?: Array<FeedMessage>;

    /**
     * Выбранный чат
     */
    selectedChat?: string; 
}
