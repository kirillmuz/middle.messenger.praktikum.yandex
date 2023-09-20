import { HTMLInputTypeAttribute } from '../../../../types/commonTypes';

/**
 * Свойства компонента TextFielInlineTextEditable 
 * (поле ввода с инлайн редактированием)
 */
export interface TextFielInlineTextEditableProps {
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
}
