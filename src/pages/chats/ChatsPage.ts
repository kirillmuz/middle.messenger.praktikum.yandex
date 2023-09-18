import Block from '../../core/Block';
import template from './chatsPageTemplate.hbs?raw';
import '../pagesStyles.scss';
import './chatsPageStyles.scss';

/**
 * Страница "Чаты"
 */
export class ChatsPage extends Block {
    constructor() {
        super();
    }

    protected render(): string {
        return template;
    }
}
