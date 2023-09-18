/**
 * Свойства компонента кнопки "Назад"
 */
export interface GoBackButtonProps {
    /**
     * Адрес страницы
     */
    goToPage: string;

    /**
     * Событие клика по кнопке
     */
    onClick?: () => void
}
