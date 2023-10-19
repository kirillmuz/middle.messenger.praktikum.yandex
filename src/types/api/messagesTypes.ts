import { MessageType } from '../messges';

/**
 * Объект сообщения ленты
 */
export interface RealtimeMessageDto {
    type: MessageType,
    chat_id?: number;
    content?: string;
    file?: unknown | null;
    id?: number;
    is_read?: boolean;
    time?: string;
    user_id?: number;
}
