import Block from '../../core/Block';
import { ChatItemProps } from './chatItemProps';
import { getDate, getTime, isToday } from '../../utils/dateTimeUtils';
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
        if(props.lastMessage && isToday(props.lastMessage.time)) {
            props.lastMessage.time = getTime(props.lastMessage.time);    
        } else if(props.lastMessage) {
            props.lastMessage.time = getDate(props.lastMessage.time);    
        }
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {})
        }
    }

    protected render(): string {
        return template;
    }
}
