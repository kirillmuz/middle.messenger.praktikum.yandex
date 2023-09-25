/**
 * Свойства компонента "Сообщение"
 */
export interface MessageProps {
    /**
     * Имя компонента
     */
    name: string;

    /**
     * Событие потери фокуса на компоненте
     */
    onBlur?: () => void;
    
    /**
     * Значение
     */
    value?: string;

    /**
     * Валидация
     */
    validate?: (value?: string) => string;
}
