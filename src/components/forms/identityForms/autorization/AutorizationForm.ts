import Block from '../../../../core/Block';
import { TextField } from '../../../controls';
import { navigate } from '../../../../utils/navigationUtils';
import { PagesNames } from '../../../../constants/commonConstants';
import { validationUtils } from '../../../../utils/validationUtils';
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

    constructor() {
        super({
            // Здесь вылидация только на обязательность полей,
            // т.к. на логинке рассказывать про формат логина и пароля
            // неправильно, более обширная валидация будет на лругих формах
            validate: {
                login: (value: string) =>{
                    return validationUtils.required(value);
                },
                password: (value: string) =>{
                    return validationUtils.required(value);
                }
            },
            onLogin: (event: MouseEvent) => {
                event.preventDefault();
                if(!this.validate()) {
                    return;
                }
                console.log({
                    component: AutorizationForm.Name,
                    ...this.getFieldsValues()
                });
                navigate(PagesNames.Chats);
            },
            onRegister: (event: MouseEvent) => {
                event.preventDefault();
                navigate(PagesNames.Registration);
            }
        });
    }

    /**
     * Валидация
     */
    private validate(): boolean {
        const fieldsValues = this.getFieldsValues();
        const checkInvalid = (value?: boolean | string) => 
            typeof value === 'boolean' && value === false;
        if(checkInvalid(fieldsValues.login) || checkInvalid(fieldsValues.password)) {
            return false;
        }
        return true;
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
