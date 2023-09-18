import Block from '../../../core/Block';
import template from './titleTemplate.hbs?raw';
import { TitleProps } from './titleProps';
import './titleStyles.scss';

/**
 * Компонент "Заголовок"
 */
export class Title extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'Title';

    constructor(props: TitleProps) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}
