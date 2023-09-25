import { TitleType } from '../../../types/commonTypes';

/**
 * Свойства компонента Title
 */
export interface TitleProps {
    /**
     * Текст компонента
     */
    text: string;
    
    /**
     * Тип компонента
     */
    type: TitleType;
}
