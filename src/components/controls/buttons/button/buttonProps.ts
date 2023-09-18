import { ButtonType } from "../../../../types/commonTypes"

/**
 * Свойства компонента кнопки
 */
export interface ButtonProps {
    /**
     * Навигация на страницу
     */
    goToPage: string,
    
    /**
     * Текст кнопки
     */
    text: string;

    /**
     * Тип кнопки
     */
    type: ButtonType;

    /**
     * Набор css-классов
     */
    className?: string;

    /**
     * Событие клика по кнопке
     */
    onClick?: () => void
}
