import Block from '../../../../core/Block';
import { TextField } from '../../../controls';
import { navigate } from '../../../../utils/navigationUtils';
import { PagesNames } from '../../../../constants/commonConstants';
import template from './autorizationFormTemplate.hbs?raw';
import '../identityFormsStyles.scss';

/**
 * Форма авторизации
 */
export class AutorizationForm extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'AutorizationForm';

    constructor() {
        super({
            onLogin: (event: MouseEvent) => {
                event.preventDefault();
                const login =  (this.refs.login as TextField)?.value();
                const password =  (this.refs.password as TextField)?.value();
                console.log({
                    component: AutorizationForm.Name,
                    login,
                    password
                });
                
                navigate(PagesNames.Chats);
            },
            onRegister: (event: MouseEvent) => {
                event.preventDefault();
                navigate(PagesNames.Registration);
            }
        });
    }

    protected render(): string {
        return template;
    }
}
