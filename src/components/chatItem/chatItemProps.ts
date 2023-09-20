import { ChatItem } from '../../types/commonTypes';

/**
 * Свойства компонента "Элемент чата"
 */
export interface ChatItemProps extends ChatItem {
    /**
     * Событие клика по чату
     */
    onClick: () => void;
}
