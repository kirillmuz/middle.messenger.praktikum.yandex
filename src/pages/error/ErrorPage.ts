import Block from '../../core/Block';
import template from './errorPageTemplate.hbs?raw';
import { ErrorPageProps } from './errorPageProps';
import '../pagesStyles.scss';
import './errorPageStyles.scss';

/**
 * Страница ошибок
 */
export class ErrorPage extends Block {
    constructor(props: ErrorPageProps) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}
