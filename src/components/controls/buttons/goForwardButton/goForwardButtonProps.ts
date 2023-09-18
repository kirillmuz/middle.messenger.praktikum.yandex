/**
 * Свойства компонента кнопки "Вперед"
 */
export interface GoForwardButtonProps {
    /**
     * Адрес страницы
     */
    goToPage: string;

    /**
     * Событие клика по кнопке
     */
    onClick?: () => void
}
