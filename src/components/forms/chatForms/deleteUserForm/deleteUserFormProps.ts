/**
 * Свойства компонента формы удаления пользователя из чата
 */
export interface DeleteUserFormProps {
    /**
     * Валидация
     */
    validate: {
        userLogin: (value?: string) => string;
    },
    /**
     * Обработчик удаления пользователя
     */
    onUserDelete?: (event: MouseEvent) => void;
}
