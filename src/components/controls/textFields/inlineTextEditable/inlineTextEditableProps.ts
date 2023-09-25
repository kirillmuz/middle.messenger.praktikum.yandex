import { HTMLInputTypeAttribute } from '../../../../types/commonTypes';

/**
 * Свойства компонента InlineTextEditableProps 
 * (поле ввода с инлайн редактированием)
 */
export interface InlineTextEditableProps {
    /**
     * Имя компонента
     */
    name: string;

    /**
     * Находится ли компонент 
     * в режиме редактирования
     */
    isEdit?: boolean;

    /**
     * Подпись
     */
    label?: string;

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
