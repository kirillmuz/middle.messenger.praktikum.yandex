import Block from '../../../../core/Block';
import { TextField } from '../../../controls';
import { RoutesAdresses } from '../../../../constants/commonConstants';
import { fieldsValidationUtils } from '../../../../utils/fieldsValidationUtils';
import { formsValidationUtils } from '../../../../utils/formsValidationUtils';
import { AutorizationFormProps } from './autorizationFormProps';
import Router from '../../../../core/Router';
import template from './autorizationFormTemplate.hbs?raw';
import '../identityFormsStyles.scss';

/**
 * Значение полей формы
 */
interface FieldsValues {
    login?: boolean | string;
    password?: boolean | string;
}

/**
 * Форма авторизации
 */
export class AutorizationForm extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'AutorizationForm';

    /**
     * Роутер
     */
    private _router: Router;

    constructor(props: AutorizationFormProps) {
        super({
            ...props,
            // Здесь вылидация только на обязательность полей,
            // т.к. на логинке рассказывать про формат логина и пароля
            // неправильно, более обширная валидация будет на лругих формах
            validate: {
                login: (value?: string) => {
                    return fieldsValidationUtils.required(value);
                },
                password: (value?: string) => {
                    return fieldsValidationUtils.required(value);
                }
            },
            onLogin: (event: MouseEvent) => {
                event.preventDefault();
                if (!this.validate()) {
                    return;
                }
                console.log({
                    component: AutorizationForm.Name,
                    ...this.getFieldsValues()
                });
                this._router.go(RoutesAdresses.Chats);
            },
            onRegister: (event: MouseEvent) => {
                event.preventDefault();
                this._router.go(RoutesAdresses.Registration);
            }
        });
        this._router = new Router();
    }

    /**
     * Валидация
     */
    private validate(): boolean {
        return formsValidationUtils
            .validateForm(this.getFieldsValues());
    }

    /**
     * Получить значения полей
     */
    private getFieldsValues(): FieldsValues {
        return {
            login: (this.refs.login as TextField)?.value(),
            password: (this.refs.password as TextField)?.value()
        }
    }

    protected render(): string {
        return template;
    }
}
