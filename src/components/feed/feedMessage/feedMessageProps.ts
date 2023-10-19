/**
 * Свойства компонента сообщения
 */
export interface FeedMessageProps {
    /**
     * Контент
     */
    content?: string;

    /**
     * Время отправки
     */
    time?: string;

    /**
     * ID отправителя
     */
    userId?: number;

    /**
     * Имя отправителя
     */
    userName?: string;

    /**
     * Тип сообщения
     */
    type?: 'incoming' | 'outgoing';
}
