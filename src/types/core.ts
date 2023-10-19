import { Chat } from './chats';
import { RealtimeMessage } from './messges';
import { ChatUser, User } from './users';

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
     * Выбранный чат
     */
    selectedChat?: Chat;

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

    /**
     * Состояние отображения 
     * диалогового окна добавления пользователя
     */
    addUserDialogOpened?: boolean;

    /**
     * Состояние отображения 
     * диалогового окна удаления пользователя
     */
    deleteUserDialogOpened?: boolean;

    /**
     * Токен активного чата
     */
    token?: string;

    /**
     * Сообщения чата
     */
    messages?: Array<RealtimeMessage>;

    /**
     * Кэшированные пользователи чата
     */
    currentChatCachedUsers?: Array<{id: number, displayName: string}>;

    /**
     * Всплывающее сообщение
     */
    floatMessage?: string;

    /**
     * Список пользователей выбранного чата
     */
    selectedChatUsers?: Array<ChatUser>
}
