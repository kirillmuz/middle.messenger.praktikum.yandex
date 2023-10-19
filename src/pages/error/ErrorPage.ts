import Block from '../../core/Block';
import template from './errorPageTemplate.hbs?raw';
import { ErrorPageProps } from './errorPageProps';
import Router from '../../core/Router';
import '../pagesStyles.scss';
import './errorPageStyles.scss';

/**
 * Страница ошибок
 */
export class ErrorPage extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ErrorPage';

    /**
     * Роутер
     */
    private _router: Router;

    constructor(props: ErrorPageProps) {
        super({
            ...props,
            onGoBack: (event: MouseEvent) => {
                event.preventDefault();
                this._router.go(props.goBackPage);
            }
        });
        this._router = new Router();
    }

    protected render(): string {
        return template;
    }
}
