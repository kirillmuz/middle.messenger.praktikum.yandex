/**
 * Свойства компонента страницы ошибок
 */
export interface ErrorPageProps {
    /**
     * Код ошибки
     */
    errorCode: string;
    
    /**
     * Текст ошибки
     */
    errorText: string;

    /**
     * Текст кнопки "Назад"
     */
    goBackText: string;

    /**
     * Адрес страницы
     */
    goBackPage: string;
}
