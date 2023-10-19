import { User } from '../../../../types/users';

/**
 * Свойства компонента формы смены пароля
 */
export interface ChangeProfilePasswordFormProps {
    /**
     * Обработчик кнопки "Сохранить"
     */
    onSave: (event: MouseEvent) => void;
    
    /**
     * Валидация
     */
    validate: {
        oldPassword: (value?: string) => boolean;
        newPassword: (value?: string) => boolean;
        repeateNewPassword: (value?: string) => boolean;
    };

    /**
     * Пользователь
     */
    user: User;
}
