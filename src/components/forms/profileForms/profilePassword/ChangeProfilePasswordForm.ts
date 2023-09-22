import Block from '../../../../core/Block';
import { InlineTextEditable } from '../../../controls';
import { PagesNames } from '../../../../constants/commonConstants';
import { navigate } from '../../../../utils/navigationUtils';
import { validationUtils } from '../../../../utils/validationUtils';
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
                oldPassword: (value?: string) =>{
                    // Текущий пароль проверяем только на обязательность
                    return validationUtils.required(value);
                },
                newPassword: (value?: string) =>{
                    return validationUtils.required(value)
                        || validationUtils.password(value);
                },
                repeateNewPassword: (value?: string) =>{
                    return validationUtils.required(value)
                        || validationUtils.password(value);
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
            oldPassword: (this.refs.oldPassword as InlineTextEditable)?.value(),
            newPassword: (this.refs.newPassword as InlineTextEditable)?.value(),
            repeateNewPassword: (this.refs.repeateNewPassword as InlineTextEditable)?.value()
        }
    }

    protected render(): string {
        return template;
    }
}
