import Block from '../../../core/Block';
import { getDate, getTime, isToday } from '../../../utils/dateTimeUtils';
import { getUserById } from '../../../services/UsersService';
import { FeedMessageProps } from './feedMessageProps';
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
        const currentUser = window.store?.getState().currentUser;
        const messageType = (props.userId === currentUser?.id) ? 'outgoing' : 'incoming';
        const formatTime = (time?: string) => {
            return isToday(time) ? getTime(time) : getDate(time)
        };
        let userName = '';
        if(currentUser?.id !== props.userId && props.userId) {
            const cachedUsers = window.store?.getState().currentChatCachedUsers ?? [];
            const cachedUser = cachedUsers.find(u=>u.id === props.userId);
            if(!cachedUser) {
                getUserById(props.userId).then(res => {
                    userName = res.displayName ?? `${res.secondName} ${res.firstName}`;
                    this.setProps({
                        ...props,
                        userName,
                        time: formatTime(props.time),
                        type: messageType
                    } as FeedMessageProps);
                    window.store?.set({
                        currentChatCachedUsers: [...cachedUsers, {
                            displayName: userName,
                            id: res.id
                        }]
                    })
                });
            } else {
                userName = cachedUser.displayName;
            }
        }

        super({
            ...props,
            time: formatTime(props.time),
            type: messageType,
            userName
        } as FeedMessageProps);
    }

    protected render(): string {
        return template;
    }
}
