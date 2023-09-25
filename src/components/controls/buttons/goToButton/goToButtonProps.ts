/**
 * Свойства компонента кнопки "Перейти к"
 */
export interface GoToButtonProps {
    /**
     * Адрес страницы
     */
    goToPage: string;

    /**
     * Текст кнопки
     */
    text: string;

    /**
     * Событие клика по кнопке
     */
    onClick?: () => void
}
