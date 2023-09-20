import { ChatItemProps } from '../../components/chatItem/chatItemProps';

/**
 * Свойства компонента страницы чатов
 */
export interface ChatsPageProps {
    /**
     * Список чатов
     */
    chatsList?: Array<ChatItemProps>;
}
