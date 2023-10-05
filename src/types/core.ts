import { User } from './users';

/**
 * Состояние приложения
 */
export interface AppState extends Record<string, unknown> {
    /**
     * Текущий пользователь
     */
    currentUser?: User;
}
