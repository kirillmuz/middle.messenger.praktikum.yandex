import { User } from '../../../types/users';

/**
 * Свойства компонента страницы профиля
 */
export interface ProfilePageProps {
    /**
     * Выйти
     */
    logOut: (event: MouseEvent) => void;
    
    /**
     * Перейти на страницу изменения профиля
     */
    openChangeDataPage: (event: MouseEvent) => void;

    /**
     * Перейти на страницу изменения пароля
     */
    openChangePasswordPage: (event: MouseEvent) => void;
    
    /**
     * Вернуться к чатам
     */
    returnToChats: (event: MouseEvent) => void;
    
    /**
     * Пользователь
     */
    user: User;
}
