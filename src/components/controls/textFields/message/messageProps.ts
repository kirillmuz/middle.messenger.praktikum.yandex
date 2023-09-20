/**
 * Свойства компонента "Сообщение"
 */
export interface MessageProps {
    /**
     * Имя компонента
     */
    name: string;
    
    /**
     * Сообщение валидации
     */
    errorMessage?: string;

    /**
     * Событие потери фокуса на компоненте
     */
    onBlur?: () => void;
    
    /**
     * Значение
     */
    value?: string;    
}
