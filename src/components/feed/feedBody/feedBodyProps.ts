import { FeedMessage } from '../../../types/commonTypes';

/**
 * Свойства компонента "Лента"
 */
export interface FeedBodyProps { 
    /**
     * Список сообщений
     */
    messagesList: Array<FeedMessage>;
}
