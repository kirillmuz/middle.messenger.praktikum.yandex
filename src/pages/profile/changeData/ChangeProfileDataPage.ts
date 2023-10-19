import Block from '../../../core/Block';
import Router from '../../../core/Router';
import { RoutesAdresses } from '../../../constants/commonConstants';
import { connect } from '../../../utils/storeUtils';
import { ChangeProfileDataPageProps } from './changeProfileDataPageProps';
import template from './changeProfileDataPageTemplate.hbs?raw';
import '../../pagesStyles.scss';
import '../profilePageStyles.scss';

/**
 * Страница изменения данных профиля пользователя
 */
class ChangeProfileDataPage extends Block {
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
        } as ChangeProfileDataPageProps);
        this._router = new Router();
    }

    protected render(): string {
        return template;
    }
}

export default connect((state) => ({profile: state.currentUser}))(ChangeProfileDataPage);
