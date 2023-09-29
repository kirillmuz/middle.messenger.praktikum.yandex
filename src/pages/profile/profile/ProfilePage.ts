import Block from '../../../core/Block';
import { RoutesAdresses } from '../../../constants/commonConstants';
import Router from '../../../core/Router';
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

    /**
     * Роутер
     */
    private _router: Router;

    constructor() {
        super({
            returnToChats: (event: MouseEvent) => {
                event.preventDefault();
                this._router.go(RoutesAdresses.Chats);
            },
            openChangeDataPage: (event: MouseEvent) => {
                event.preventDefault();
                this._router.go(RoutesAdresses.ChangeProfileData);
            },
            openChangePasswordPage: (event: MouseEvent) => {
                event.preventDefault();
                this._router.go(RoutesAdresses.ChangePassword);
            },
            logOut: (event: MouseEvent) => {
                event.preventDefault();
                this._router.go(RoutesAdresses.Login);
            }
        });
        this._router = new Router();
    }

    protected render(): string {
        return template;
    }
}
