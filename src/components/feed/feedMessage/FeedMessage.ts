import Block from '../../../core/Block';
import { FeedMessage as FeedMessageProps } from '../../../types/commonTypes';
import template from './feedMessageTemplate.hbs?raw';
import './feedMessageStyles.scss';

/**
 * Компонент "Сообщение ленты"
 */
export class FeedMessage extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'FeedMessage';

    constructor(props: FeedMessageProps) {
        super(props);
    }

    protected render(): string {
        return template;
    }
};
