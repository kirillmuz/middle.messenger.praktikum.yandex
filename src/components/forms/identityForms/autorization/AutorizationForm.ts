import Block from '../../../../core/Block';
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
            onLogin: (event: any) => {
                event.preventDefault();
                console.log(AutorizationForm.Name);
                navigate(PagesNames.Chats);
            },
            onRegister: (event: any) => {
                event.preventDefault();
                navigate(PagesNames.Registration);
            }
        });
    }

    protected render(): string {
        return template;
    }
}
