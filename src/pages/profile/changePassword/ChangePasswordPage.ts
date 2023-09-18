import Block from '../../../core/Block';
import template from './changePasswordPageTemplate.hbs?raw';
import '../../pagesStyles.scss';
import '../profilePageStyles.scss';

/**
 * Страница изменения пароля пользователя
 */
export class ChangePasswordPage extends Block {
    constructor() {
        super();
    }

    protected render(): string {
        return template;
    }
}
