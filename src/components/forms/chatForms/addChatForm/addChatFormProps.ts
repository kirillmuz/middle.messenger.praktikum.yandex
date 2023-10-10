/**
 * Свойства компонента формы создания чата
 */
export interface AddChatFormProps {
    /**
     * Валидация
     */
    validate: {
        chatName: (value?: string) => boolean;
    },
    /**
     * Обработчик создания чата
     */
    onChatCreate?: (event: MouseEvent) => void;
}