import Block from '../../core/Block';
import { ApiHost } from '../../constants/commonConstants';
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
        const state = window.store?.getState();
        const currentUser = state?.currentUser;
        const selectedChat = state?.selectedChat;
        if(props.lastMessage && isToday(props.lastMessage.time)) {
            props.lastMessage.time = getTime(props.lastMessage.time);    
        } else if(props.lastMessage) {
            props.lastMessage.time = getDate(props.lastMessage.time);    
        }
        if(props.lastMessage) {
            props.lastMessage.user.displayName = 
                props.lastMessage.user.login === currentUser?.login ? 'Вы' 
                    : props.lastMessage.user.displayName;
        }
        super({
            ...props,
            resourcesUrl: `${ApiHost}/resources/`,
            selected: props.id === selectedChat?.id
        } as ChatItemProps);
        this.props.events = {
            click: (event: MouseEvent) => {
                event.preventDefault();
                window.store?.set({selectedChat: {
                    avatar: props.avatar,
                    createdBy: props.createdBy,
                    id: props.id,
                    title: props.title,
                    unreadCount: props.unreadCount,
                    lastMessage: props.lastMessage
                }});
            }
        }
    }

    protected render(): string {
        return template;
    }
}
