/**
 * Объект страницы
 */
export interface PageItem {
    /**
     * Название
     */
    name: string;

    /**
     * Шаблон
     */
    template: string;

    /**
     * Контекст
     */
    context?: unknown;
}
