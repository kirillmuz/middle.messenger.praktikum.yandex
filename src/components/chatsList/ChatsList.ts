import Block from '../../core/Block';
import { connect } from '../../utils/storeUtils';
import { ChatsListProps } from './chatsListProps';
import template from './chatsListTemplate.hbs?raw';
import './chatsListStyles.scss';

/**
 * Класс компонента "Список чатов"
 */
class ChatsList extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ChatsList';

    constructor(props: ChatsListProps) {
        super({
            ...props,
            chatsList: props.chatsList ?? []
        } as ChatsListProps);
    }

    protected render(): string {
        return template;
    }
}

/**
 * Список чатов
 */
export default connect((state) => ({chatsList: state.chatsList, selectedChat: state.selectedChat}))(ChatsList);
