import Block from '../../../../core/Block';
import { InlineTextEditable } from '../../../controls';
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
            onLogin: (event: MouseEvent) => {
                event.preventDefault();
                navigate(PagesNames.Login);
            },
            onRegister: (event: MouseEvent) => {
                event.preventDefault();
                const email =  (this.refs.email as InlineTextEditable)?.value();
                const login =  (this.refs.login as InlineTextEditable)?.value();
                const secondName =  (this.refs.secondName as InlineTextEditable)?.value();
                const firstName =  (this.refs.firstName as InlineTextEditable)?.value();
                const midleName =  (this.refs.midleName as InlineTextEditable)?.value();
                const phone =  (this.refs.phone as InlineTextEditable)?.value();
                const password =  (this.refs.password as InlineTextEditable)?.value();
                const repeatePassword =  (this.refs.repeatePassword as InlineTextEditable)?.value();
                console.log({
                    component: RegistrationForm.Name,
                    email,
                    login,
                    secondName,
                    firstName,
                    midleName,
                    phone,
                    password,
                    repeatePassword
                });
                navigate(PagesNames.Chats);
            }
        });
    }

    protected render(): string {
        return template;
    }
}
