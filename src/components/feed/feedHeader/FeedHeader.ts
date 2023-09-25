import Block from '../../../core/Block';
import { FeedHeaderProps } from './feedHeaderProps';
import template from './feedHeaderTemplate.hbs?raw';
import './feedHeaderStyles.scss';

/**
 * Компонент "Шапка ленты"
 */
export class FeedHeader extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'FeedHeader';

    constructor(props: FeedHeaderProps) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {})
        }
    }

    protected render(): string {
        return template;
    }
}
