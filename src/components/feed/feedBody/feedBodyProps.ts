import { RealtimeMessage } from '../../../types/messges';

/**
 * Свойства компонента "Лента"
 */
export interface FeedBodyProps { 
    /**
     * Список сообщений
     */
    messagesList: Array<RealtimeMessage>;
}
