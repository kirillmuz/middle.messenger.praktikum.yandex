import Block from '../../core/Block';
import template from './registrationPageTemplate.hbs?raw';
import '../pagesStyles.scss';

export class RegistrationPage extends Block {
    constructor() {
        super();
    }

    protected render(): string {
        return template;
    }
}
