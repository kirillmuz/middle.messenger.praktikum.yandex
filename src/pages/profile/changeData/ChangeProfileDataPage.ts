import Block from '../../../core/Block';
import { PagesNames } from '../../../constants/commonConstants';
import { navigate } from '../../../utils/navigationUtils';
import { ChangeProfileDataPageProps } from './changeProfileDataPageProps';
import template from './changeProfileDataPageTemplate.hbs?raw';
import '../../pagesStyles.scss';
import '../profilePageStyles.scss';

/**
 * Страница изменения данных профиля пользователя
 */
export class ChangeProfileDataPage extends Block {
    constructor(props: ChangeProfileDataPageProps) {
        super({
            ...props,
            returnToProfile: (event: MouseEvent) => {
                event.preventDefault();
                navigate(PagesNames.Profile);
            }
        });
    }

    protected render(): string {
        return template;
    }
}
