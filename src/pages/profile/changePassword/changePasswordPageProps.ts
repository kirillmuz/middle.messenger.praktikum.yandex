import { User } from '../../../types/users';

/**
 * Свойства компонента страница смены пароля
 */
export interface ChangePasswordPageProps {
    /**
     * Вернуться в профиль
     */
    returnToProfile: (event: MouseEvent) => void;

    /**
     * Пользователь
     */
    user: User;
}
