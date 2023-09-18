import Block from '../../../core/Block';
import template from './changeProfileDataPageTemplate.hbs?raw';
import '../../pagesStyles.scss';
import '../profilePageStyles.scss';

/**
 * Страница изменения данных профиля пользователя
 */
export class ChangeProfileDataPage extends Block {
    constructor() {
        super();
    }

    protected render(): string {
        return template;
    }
}
