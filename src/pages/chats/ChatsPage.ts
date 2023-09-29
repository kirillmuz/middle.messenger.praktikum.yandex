import Block from '../../core/Block';
import { RoutesAdresses } from '../../constants/commonConstants';
import { ChatsPageProps } from './chatsPageProps';
import Router from '../../core/Router';
import template from './chatsPageTemplate.hbs?raw';
import '../pagesStyles.scss';
import './chatsPageStyles.scss';

/**
 * Страница "Чаты"
 */
export class ChatsPage extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ChatsPage';
    
    /**
     * Роутер
     */
    private _router: Router;

    constructor(props: ChatsPageProps) {
        super({
            ...props,
            openProfile: (event: MouseEvent) => {
                event.preventDefault();
                this._router.go(RoutesAdresses.Profile);
            },
        });
        this._router = new Router();
    }

    protected render(): string {
        return template;
    }
}
