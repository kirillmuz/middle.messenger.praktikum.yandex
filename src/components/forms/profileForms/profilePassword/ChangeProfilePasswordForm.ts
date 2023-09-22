import Block from '../../../../core/Block';
import { InlineTextEditable } from '../../../controls';
import { PagesNames } from '../../../../constants/commonConstants';
import { navigate } from '../../../../utils/navigationUtils';
import template from './changePasswordFormTemplate.hbs?raw';

/**
 * Значение полей формы
 */
interface FieldsValues {
    oldPassword?: boolean | string;
    newPassword?: boolean | string;
    repeateNewPassword?: boolean | string;
}

/**
 * Форма изменения учетных данных пользователя
 */
export class ChangePasswordForm extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ChangePasswordForm';

    constructor() {
        super({
            validate: {
                oldPassword: (value: string) =>{
                    return value.length === 0 ? `Поле обязательное` : '';
                },
                newPassword: (value: string) =>{
                    return value.length === 0 ? `Поле обязательное` : '';
                },
                repeateNewPassword: (value: string) =>{
                    return value.length === 0 ? `Поле обязательное` : '';
                }
            },
            onSave: (event: MouseEvent) => {
                event.preventDefault();
                if(!this.validate()) {
                    return;
                }
                console.log({
                    component: ChangePasswordForm.Name,
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
        if(checkInvalid(fieldsValues.newPassword)
            || checkInvalid(fieldsValues.oldPassword)
            || checkInvalid(fieldsValues.repeateNewPassword)
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
            oldPassword: (this.refs.oldPassword as InlineTextEditable)?.value(),
            newPassword: (this.refs.newPassword as InlineTextEditable)?.value(),
            repeateNewPassword: (this.refs.repeateNewPassword as InlineTextEditable)?.value()
        }
    }

    protected render(): string {
        return template;
    }
}
