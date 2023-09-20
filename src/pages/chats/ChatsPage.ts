import Block from '../../core/Block';
import template from './chatsPageTemplate.hbs?raw';
import { ChatsPageProps } from './chatsPageProps';
import '../pagesStyles.scss';
import './chatsPageStyles.scss';

/**
 * Страница "Чаты"
 */
export class ChatsPage extends Block {
    constructor(props: ChatsPageProps) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}
