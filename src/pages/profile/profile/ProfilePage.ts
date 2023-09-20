import Block from '../../../core/Block';
import { PagesNames } from '../../../constants/commonConstants';
import { navigate } from '../../../utils/navigationUtils';
import template from './profilePageTemplate.hbs?raw';
import '../../pagesStyles.scss';
import '../profilePageStyles.scss';

/**
 * Страница "Профиль пользователя"
 */
export class ProfilePage extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ProfilePage';

    constructor() {
        super({
            returnToChats: (event: any) => {
                event.preventDefault();
                navigate(PagesNames.Chats);
            },
            openChangeDataPage: (event: any) => {
                event.preventDefault();
                navigate(PagesNames.ChangeProfileData);
            },
            openChangePasswordPage: (event: any) => {
                event.preventDefault();
                navigate(PagesNames.ChangePassword);
            },
            logOut: (event: any) => {
                event.preventDefault();
                navigate(PagesNames.Login);
            }
        });
    }

    protected render(): string {
        return template;
    }
}
