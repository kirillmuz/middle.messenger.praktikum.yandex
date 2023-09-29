import Block from '../../../core/Block';
import { RoutesAdresses } from '../../../constants/commonConstants';
import Router from '../../../core/Router';
import template from './changePasswordPageTemplate.hbs?raw';
import '../../pagesStyles.scss';
import '../profilePageStyles.scss';

/**
 * Страница изменения пароля пользователя
 */
export class ChangePasswordPage extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ChangePasswordPage';

    /**
     * Роутер
     */
    private _router: Router;

    constructor() {
        super({
            returnToProfile: (event: MouseEvent) => {
                event.preventDefault();
                this._router.go(RoutesAdresses.Profile);
            }
        });
        this._router = new Router();
    }

    protected render(): string {
        return template;
    }
}
