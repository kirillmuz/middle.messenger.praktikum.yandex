import Block from '../../../../core/Block';
import { InlineTextEditable } from '../../../controls';
import { ProfileData } from '../../../../types/commonTypes';
import { PagesNames } from '../../../../constants/commonConstants';
import { navigate } from '../../../../utils/navigationUtils';
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
                email: (value: string) =>{
                    return value.length === 0 ? `Поле обязательное` : '';
                },
                login: (value: string) =>{
                    return value.length === 0 ? `Поле обязательное` : '';
                },
                secondName: (value: string) =>{
                    return value.length === 0 ? `Поле обязательное` : '';
                },
                firstName: (value: string) =>{
                    return value.length === 0 ? `Поле обязательное` : '';
                },
                displayName: (value: string) =>{
                    return value.length === 0 ? `Поле обязательное` : '';
                },
                phone: (value: string) =>{
                    return value.length === 0 ? `Поле обязательное` : '';
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
        const fieldsValues = this.getFieldsValues();
        const checkInvalid = (value?: boolean | string) => 
            typeof value === 'boolean' && value === false;
        if(checkInvalid(fieldsValues.email)
            || checkInvalid(fieldsValues.firstName)
            || checkInvalid(fieldsValues.secondName)
            || checkInvalid(fieldsValues.phone)
            || checkInvalid(fieldsValues.login)
            || checkInvalid(fieldsValues.displayName)
        ) {
            return false;
        }
        return true;
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
