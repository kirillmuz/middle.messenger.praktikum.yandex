import { FeedMessage } from '../../types/commonTypes';
import { ChatItemProps } from '../../components/chatItem/chatItemProps';

/**
 * Свойства компонента страницы чатов
 */
export interface ChatsPageProps {
    /**
     * Список чатов
     */
    chatsList?: Array<ChatItemProps>;

    /**
     * Список сообщений выбранного чата
     */
    selectedChatMessagesList?: Array<FeedMessage>;

    /**
     * Выбранный чат
     */
    selectedChat?: string; 
}
