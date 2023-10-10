import { Chat } from '../../types/chats';

/**
 * Свойства компонента "Элемент чата"
 */
export interface ChatItemProps extends Chat {
    /**
     * Выбран ли чат
     */
    selected: boolean;
    
    /**
     * Путь к ресурсам
     */
    resourcesUrl?: string;
}
