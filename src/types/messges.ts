/**
 * Тип сообщения ленты
 */
export type MessageType = 'message' | 'file' | 'error';

/**
 * Сообщение ленты
 */
export interface RealtimeMessage {
    /**
     * Тип
     */
    type: MessageType,
    
    /**
     * ID чата
     */
    chatId?: number;
    
    /**
     * Контент
     */
    content?: string;
    
    /**
     * Файл
     */
    file?: unknown | null;
    
    /**
     * Идентификатор
     */
    id?: number;

    /**
     * Является ли прочитанным
     */
    isRead?: boolean;
    
    /**
     * Время отправки
     */
    time?: string;

    /**
     * ID отправителя
     */
    userId?: number;
}
