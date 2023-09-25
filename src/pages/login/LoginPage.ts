import Block from '../../core/Block';
import template from './loginPageTemplate.hbs?raw';
import '../pagesStyles.scss';

/**
 * Страница авторизации
 */
export class LoginPage extends Block {
    constructor() {
        super();
    }

    protected render(): string {
        return template;
    }
}
