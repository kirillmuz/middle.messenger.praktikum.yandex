import Block from '../../core/Block';
import { ChatItemProps } from './chatItemProps';
import template from './chatItemTemplare.hbs?raw';
import './chatItemStyles.scss';

/**
 * Компонент "Элемент чата"
 */
export class ChatItem extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ChatItem';

    constructor(props: ChatItemProps) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {})
        }
    }

    protected render(): string {
        return template;
    }
}
