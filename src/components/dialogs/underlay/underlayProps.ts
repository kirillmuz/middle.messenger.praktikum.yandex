type UnderlayType = 'shaded' | 'transparent';

/**
 * Свойства компонента подложки
 */
export interface UnderlayProps {
    /**
     * Событие клика по подложке
     */
    onUnderlayClick?: (event: MouseEvent) => void;

    /**
     * Тип подложки
     */
    underlayType?: UnderlayType;
}
