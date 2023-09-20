import Block from '../../../core/Block';
import { FeedFooterProps } from './feedFooterProps';
import template from './feedFooterTemplate.hbs?raw';
import './feedFooterStyles.scss';

/**
 * Компонент "Подвал ленты"
 */
export class FeedFooter extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'FeedFooter';

    constructor(props: FeedFooterProps) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {})
        }
    }

    protected render(): string {
        return template;
    }
};
