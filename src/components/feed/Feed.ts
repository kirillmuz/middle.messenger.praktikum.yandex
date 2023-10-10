import Block from '../../core/Block';
import { connect } from '../../utils/storeUtils';
import { Chat } from '../../types/chats';
import template from './feedTemplate.hbs?raw';
import './feedStyles.scss';

/**
 * Класс компонента "Лента"
 */
class Feed extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'Feed';

    constructor(props: {selectedChat: Chat}) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}

/**
 * Лента
 */
export default connect((state) => ({selectedChat: state.selectedChat}))(Feed);
