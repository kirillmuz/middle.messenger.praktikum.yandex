import { SelectOption } from '../../../../types/commonTypes';
import { ChatUser } from '../../../../types/users';

/**
 * Свойства компонента формы удаления пользователя из чата
 */
export interface DeleteUserFormProps {
    /**
     * Валидация
     */
    validate: {
        selectedUser: (value?: string) => string;
    },
    /**
     * Обработчик удаления пользователя
     */
    onUserDelete?: (event: MouseEvent) => void;

    /**
     * Список пользователей
     */
    usersList?: Array<ChatUser>;

    /**
     * Список пользователей для селекта
     */
    usersListOptions?: Array<SelectOption>;
}
