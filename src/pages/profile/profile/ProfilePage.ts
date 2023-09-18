import Block from '../../../core/Block';
import template from './profilePageTemplate.hbs?raw';
import '../../pagesStyles.scss';
import '../profilePageStyles.scss';

/**
 * Страница "Профиль пользователя"
 */
export class ProfilePage extends Block {
    constructor() {
        super();
    }

    protected render(): string {
        return template;
    }
}
