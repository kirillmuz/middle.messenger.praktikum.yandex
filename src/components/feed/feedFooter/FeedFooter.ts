import Block from '../../../core/Block';
import { Message } from '../../controls';
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
        super({
            ...props,
            sendMessage: (event: MouseEvent) => {
                event.preventDefault();
                const message =  (this.refs.message as Message)?.value();
                console.log({
                    component: FeedFooter.Name,
                    message
                });
            }
        });
    }

    protected render(): string {
        return template;
    }
};
