import Block from '../../../core/Block';
import { FeedBodyProps } from './feedBodyProps';
import template from './feedBodyTemplate.hbs?raw';
import './feedBodyStyles.scss';

/**
 * Компонент "Лента"
 */
export class FeedBody extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'FeedBody';

    constructor(props: FeedBodyProps) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {})
        }
    }

    protected render(): string {
        return template;
    }
};
