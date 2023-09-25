import { HTMLInputTypeAttribute } from '../../../../types/commonTypes';

/**
 * Свойства компонента TextField
 */
export interface TextFieldProps {
    /**
     * Имя компонента
     */
    name: string;
    
    /**
     * Подпись
     */
    label?: string;

    /**
     * Событие потери фокуса на компоненте
     */
    onBlur?: () => void;

    /**
     * Текст-заполнитель
     */
    placeholder?: string;

    /**
     * Тип текстового поля
     */
    type?: HTMLInputTypeAttribute;
    
    /**
     * Значение
     */
    value?: string;

    /**
     * Валидация
     */
    validate?: (value?: string) => string;
}
