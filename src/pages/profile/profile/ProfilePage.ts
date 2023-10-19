import Block from '../../../core/Block';
import Router from '../../../core/Router';
import { RoutesAdresses } from '../../../constants/commonConstants';
import { logout } from '../../../services/AuthService';
import { connect } from '../../../utils/storeUtils';
import { parseApiError } from '../../../utils/errorsUtils';
import { ProfilePageProps } from './profilePageProps';
import template from './profilePageTemplate.hbs?raw';
import '../../pagesStyles.scss';
import '../profilePageStyles.scss';

/**
 * Страница "Профиль пользователя"
 */
class ProfilePage extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ProfilePage';

    /**
     * Роутер
     */
    private _router: Router;

    constructor(props: ProfilePageProps) {
        super({
            ...props,
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
                logout().catch((err: string) => {
                    (this.refs.validationMessage as Block)
                        ?.setProps({validationMessage: parseApiError(err)})
                });
            }
        } as ProfilePageProps);
        this._router = new Router();
    }

    protected render(): string {
        return template;
    }
}

export default connect((state) => ({user: state.currentUser}))(ProfilePage);
