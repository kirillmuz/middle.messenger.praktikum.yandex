
import Block from '../../../../core/Block';
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
                alert('Login click')
                
                //const login =  this.refs.login.value();
                //const password =  this.refs.password.value();

                /*console.log({
                    login,
                    password
                })*/
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
