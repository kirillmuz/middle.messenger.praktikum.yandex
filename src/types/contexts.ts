/**
 * Контекст компонента страницы ошибок
 */
export interface ErrorPageContext {
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
     * Страница на которую возвращаемся
     */
    goBackPage: string;
};

/**
 * Контекст компонента InlineTextEditable
 */
export interface InlineTextEditableContext {
    /**
     * Флаг, указывающий, находится ли
     * компонент в режиме редактирования
     */
    isEdit: boolean;

    /**
     * Имя текстового поля
     */
    name: string;
    
    /**
     * Подпись
     */
    label: string;

    /**
     * Тип текстового поля
     */
    type: string;

    /**
     * Значение
     */
    value: string;
}