/**
 * Свойства компонента формы добавления пользователя в чат
 */
export interface AddUserFormProps {
    /**
     * Валидация
     */
    validate: {
        userLogin: (value?: string) => string;
    },
    /**
     * Обработчик добавления пользователя в чат
     */
    onUserAdd?: (event: MouseEvent) => void;
}
