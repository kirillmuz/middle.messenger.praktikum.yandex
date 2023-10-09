import { Chat } from '../../types/chats';

/**
 * Свойства компонента "Элемент чата"
 */
export interface ChatItemProps extends Chat {
    /**
     * Событие клика по чату
     */
    onClick: () => void;
}
