import { HTMLInputTypeAttribute } from '../../../../types/commonTypes';

/**
 * Свойства компонента InputBase
 */
export interface InputBaseProps {
    /**
     * Имя компонента
     */
    name: string;
    
    /**
     * Набор css-классов
     */
    className?: string;
    
    /**
     * Событие потери фокуса
     */
    onBlur?: () => void;

    /**
     * Текст-заполнитель
     */
    placeholder?: string;

    /**
     * Тип инпута
     */
    type?: HTMLInputTypeAttribute;

    /**
     * Значение
     */
    value?: string;
}
