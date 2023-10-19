import { User } from '../../../types/users';

/**
 * Свойства компонента страницы изменения данных профиля пользователя
 */
export interface ChangeProfileDataPageProps {
    /**
     * Вернуться в профиль
     */
    returnToProfile: (event: MouseEvent) => void;

    /**
     * Профиль пользователя
     */
    profile: User;
}
