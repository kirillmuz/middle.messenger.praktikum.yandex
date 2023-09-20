import Block from '../../../core/Block';
import { PagesNames } from '../../../constants/commonConstants';
import { navigate } from '../../../utils/navigationUtils';
import template from './changePasswordPageTemplate.hbs?raw';
import '../../pagesStyles.scss';
import '../profilePageStyles.scss';

/**
 * Страница изменения пароля пользователя
 */
export class ChangePasswordPage extends Block {
    constructor() {
        super({
            returnToProfile: (event: any) => {
                event.preventDefault();
                navigate(PagesNames.Profile);
            }
        });
    }

    protected render(): string {
        return template;
    }
}
