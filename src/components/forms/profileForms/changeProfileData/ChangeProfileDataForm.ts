import Block from '../../../../core/Block';
import { InlineTextEditable } from '../../../controls';
import { ProfileData } from '../../../../types/commonTypes';
import { PagesNames } from '../../../../constants/commonConstants';
import { navigate } from '../../../../utils/navigationUtils';
import { validationUtils } from '../../../../utils/validationUtils';
import template from './changeProfileDataFormTemplate.hbs?raw';

/**
 * Значение полей формы
 */
interface FieldsValues {
    email?: boolean | string;
    login?: boolean | string;
    secondName?: boolean | string;
    firstName?: boolean | string;
    midleName?: boolean | string;
    displayName?: boolean | string;
    phone?: boolean | string;
}

/**
 * Форма изменения профиля пользователя
 */
export class ChangeProfileDataForm extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ChangeProfileDataForm';

    constructor(props: {profile: ProfileData}) {
        const { profile } = props;
        super({
            ...profile,
            validate: {
                email: (value?: string) =>{
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
                displayName: (value?: string) =>{
                    return validationUtils.required(value);
                },
                phone: (value?: string) =>{
                    return validationUtils.required(value)
                        || validationUtils.phone(value);
                }
            },
            onSave: (event: MouseEvent) => {
                event.preventDefault();
                if(!this.validate()) {
                    return;
                }
                console.log({
                    component: ChangeProfileDataForm.Name,
                    ...this.getFieldsValues()
                });
                navigate(PagesNames.Profile);
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
        
        Object.entries(fieldsValues).forEach(([, value]) => {
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
            displayName: (this.refs.displayName as InlineTextEditable)?.value(),
            phone: (this.refs.phone as InlineTextEditable)?.value()
        }
    }

    protected render(): string {
        return template;
    }
}
