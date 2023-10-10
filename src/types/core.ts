import { Chat } from './chats';
import { User } from './users';

/**
 * Состояние приложения
 */
export interface AppState extends Record<string, unknown> {
    /**
     * Текущий пользователь
     */
    currentUser?: User;

    /**
     * Список чатов
     */
    chatsList?: Array<Chat>;

    /**
     * Состояние отображения диалогового 
     * окна создания чата
     */
    addChatDialogOpened?: boolean;

    /**
     * Состояние отображения 
     * диалогового окна меню чата
     */
    chatMenuDialogOpened?: boolean;
}
