import Block from '../../../../core/Block';
import { InlineTextEditable } from '../../../controls';
import { navigate } from '../../../../utils/navigationUtils';
import { PagesNames } from '../../../../constants/commonConstants';
import { validationUtils } from '../../../../utils/validationUtils';
import template from './registrationFormTemplate.hbs?raw';
import '../identityFormsStyles.scss';

/**
 * Значение полей формы
 */
interface FieldsValues {
    email?: boolean | string;
    login?: boolean | string;
    secondName?: boolean | string;
    firstName?: boolean | string;
    midleName?: boolean | string;
    phone?: boolean | string;
    password?: boolean | string;
    repeatePassword?: boolean | string;
}

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
            validate: {
                email: (value?: string) => {
                    return validationUtils.required(value)
                        || validationUtils.email(value);
                },
                login: (value?: string) =>{
                    return validationUtils.required(value)
                        || validationUtils.login(value);
                },
                secondName: (value?: string) =>{
                    return validationUtils.required(value)
                        || validationUtils.personNameData(value);
                },
                firstName: (value?: string) =>{
                    return validationUtils.required(value)
                        || validationUtils.personNameData(value);
                },
                midleName: (value?: string) =>{
                    return validationUtils.personNameData(value);
                },
                phone: (value?: string) =>{
                    return validationUtils.required(value)
                        || validationUtils.phone(value);
                },
                password: (value?: string) =>{
                    return validationUtils.required(value)
                        || validationUtils.password(value);
                },
                repeatePassword: (value?: string) =>{
                    return validationUtils.required(value)
                        || validationUtils.password(value);
                }
            },
            onLogin: (event: MouseEvent) => {
                event.preventDefault();
                navigate(PagesNames.Login);
            },
            onRegister: (event: MouseEvent) => {
                event.preventDefault();
                if(!this.validate()) {
                    return;
                }
                console.log({
                    component: RegistrationForm.Name,
                    ...this.getFieldsValues()
                });
                navigate(PagesNames.Chats);
            }
        });
    }

    /**
     * Валидация
     */
    private validate(): boolean {
        let isValid = true;
        const fieldsValues = this.getFieldsValues();
        const checkInvalid = (value?: boolean | string) => 
            typeof value === 'boolean' && value === false;
        Object.entries(fieldsValues).forEach(([_, value]) => {
            if(checkInvalid(value)) {
                isValid = false;
            }
        });
        return isValid;
    }

    /**
     * Получить значения полей
     */
    private getFieldsValues(): FieldsValues {
        return {
            email: (this.refs.email as InlineTextEditable)?.value(),
            login: (this.refs.login as InlineTextEditable)?.value(),
            secondName: (this.refs.secondName as InlineTextEditable)?.value(),
            firstName: (this.refs.firstName as InlineTextEditable)?.value(),
            midleName: (this.refs.midleName as InlineTextEditable)?.value(),
            phone: (this.refs.phone as InlineTextEditable)?.value(),
            password: (this.refs.password as InlineTextEditable)?.value(),
            repeatePassword: (this.refs.repeatePassword as InlineTextEditable)?.value()
        }
    }

    protected render(): string {
        return template;
    }
}
