/**
 * Свойства компонента диалогового окна
 */
export interface DialogProps {
    /**
     * Показать диалог
     */
    show: boolean;
    
    /**
     * Событие клика по подложке
     */
    onUnderlayClick?: (event: MouseEvent) => void;
}
