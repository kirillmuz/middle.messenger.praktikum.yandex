import Block from '../../core/Block';
import { ApiHost } from '../../constants/commonConstants';
import { getDate, getTime, isToday } from '../../utils/dateTimeUtils';
import { initChat } from '../../services/MessagesService';
import { Message } from '../../types/chats';
import { getChatUsers } from '../../services/ChatsService';
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
        const state = window.store?.getState();
        const currentUser = state?.currentUser;
        const selectedChat = state?.selectedChat;
        const prepareLastMessage = (lastMessage?: Message | null) => {
            if (!lastMessage) {
                return undefined;
            }
            const time = isToday(lastMessage.time) ? getTime(lastMessage.time) : getDate(lastMessage.time);
            const userDisplayName = currentUser?.login === lastMessage.user.login 
                ? 'Вы' 
                : lastMessage.user.displayName ?? `${lastMessage.user.secondName} ${lastMessage.user.firstName}`;
            return {
                ...lastMessage,
                time,
                user: {
                    ...lastMessage.user,
                    displayName: userDisplayName
                }
            } as Message;
        }

        super({
            ...props,
            resourcesUrl: `${ApiHost}/resources/`,
            selected: props.id === selectedChat?.id,
            lastMessage: prepareLastMessage(props.lastMessage)
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
                getChatUsers(props.id).then(res => {
                    window.store?.set({
                        selectedChatUsers: res
                    });
                });
                initChat();
            }
        }
    }

    protected render(): string {
        return template;
    }
}
