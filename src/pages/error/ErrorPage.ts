import Block from '../../core/Block';
import { navigate } from '../../utils/navigationUtils';
import template from './errorPageTemplate.hbs?raw';
import { ErrorPageProps } from './errorPageProps';
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

    constructor(props: ErrorPageProps) {
        super({
            ...props,
            onGoBack: (event: MouseEvent) => {
                event.preventDefault();
                navigate(props.goBackPage);
            }
        });
    }

    protected render(): string {
        return template;
    }
}
