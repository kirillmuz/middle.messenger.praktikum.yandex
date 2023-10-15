import { SelectOption } from '../../../types/commonTypes';

/**
 * Свойства компонента выпадающего списка
 */
export interface SelectProps {
    /**
     * Подпись
     */
    label?: string;
    
    /**
     * Элементы
     */
    options?: Array<SelectOption>;

    /**
     * Подсказка
     */
    placeholder?: string;

    /**
     * Валидация
     */
    validate?: (value?: string) => string;
}
