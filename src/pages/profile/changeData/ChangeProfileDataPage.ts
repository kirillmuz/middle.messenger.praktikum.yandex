import Block from '../../../core/Block';
import { RoutesAdresses } from '../../../constants/commonConstants';
import { ChangeProfileDataPageProps } from './changeProfileDataPageProps';
import Router from '../../../core/Router';
import template from './changeProfileDataPageTemplate.hbs?raw';
import '../../pagesStyles.scss';
import '../profilePageStyles.scss';

/**
 * Страница изменения данных профиля пользователя
 */
export class ChangeProfileDataPage extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ChangeProfileDataPage';

    /**
     * Роутер
     */
    private _router: Router;
    
    constructor(props: ChangeProfileDataPageProps) {
        super({
            ...props,
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
