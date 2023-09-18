
import Block from '../../../../core/Block';
import template from './registrationFormTemplate.hbs?raw';
import '../identityFormsStyles.scss';

/**
 * Форма регистрации
 */
export class RegistrationForm extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'RegistrationForm';

    constructor() {
        super({
            onLogin: (event: any) => {
                event.preventDefault();
                alert('Login click')
            },
            onRegister: (event: any) => {
                event.preventDefault();
                alert('Register click')
            }
        });
    }

    protected render(): string {
        return template;
    }
}
