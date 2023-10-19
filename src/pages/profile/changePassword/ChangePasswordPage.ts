import Block from '../../../core/Block';
import Router from '../../../core/Router';
import { RoutesAdresses } from '../../../constants/commonConstants';
import { connect } from '../../../utils/storeUtils';
import { ChangePasswordPageProps } from './changePasswordPageProps';
import template from './changePasswordPageTemplate.hbs?raw';
import '../../pagesStyles.scss';
import '../profilePageStyles.scss';

/**
 * Страница изменения пароля пользователя
 */
class ChangePasswordPage extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ChangePasswordPage';

    /**
     * Роутер
     */
    private _router: Router;

    constructor(props: ChangePasswordPageProps) {
        super({
            ...props,
            returnToProfile: (event: MouseEvent) => {
                event.preventDefault();
                this._router.go(RoutesAdresses.Profile);
            }
        } as ChangePasswordPageProps);
        this._router = new Router();
    }

    protected render(): string {
        return template;
    }
}

export default connect((state) => ({user: state.currentUser}))(ChangePasswordPage);
