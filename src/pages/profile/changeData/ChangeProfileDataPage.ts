import Block from '../../../core/Block';
import { PagesNames } from '../../../constants/commonConstants';
import { navigate } from '../../../utils/navigationUtils';
import template from './changeProfileDataPageTemplate.hbs?raw';
import '../../pagesStyles.scss';
import '../profilePageStyles.scss';

/**
 * Страница изменения данных профиля пользователя
 */
export class ChangeProfileDataPage extends Block {
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
