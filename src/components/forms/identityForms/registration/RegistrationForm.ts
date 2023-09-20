
import Block from '../../../../core/Block';
import { navigate } from '../../../../utils/navigationUtils';
import { PagesNames } from '../../../../constants/commonConstants';
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
                navigate(PagesNames.Login);
            },
            onRegister: (event: any) => {
                event.preventDefault();
                console.log(RegistrationForm.Name);
                navigate(PagesNames.Chats);
            }
        });
    }

    protected render(): string {
        return template;
    }
}
