import Block from '../../../../core/Block';
import { InlineTextEditable } from '../../../controls';
import { PagesNames } from '../../../../constants/commonConstants';
import { navigate } from '../../../../utils/navigationUtils';
import { fieldsValidationUtils } from '../../../../utils/fieldsValidationUtils';
import { formsValidationUtils } from '../../../../utils/formsValidationUtils';
import { ChangeProfilePasswordFormProps } from './changeProfilePasswordFormProps';
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

    constructor(props: ChangeProfilePasswordFormProps) {
        super({
            ...props,
            validate: {
                oldPassword: (value?: string) =>{
                    // Текущий пароль проверяем только на обязательность
                    return fieldsValidationUtils.required(value);
                },
                newPassword: (value?: string) =>{
                    return fieldsValidationUtils.required(value)
                        || fieldsValidationUtils.password(value);
                },
                repeateNewPassword: (value?: string) =>{
                    return fieldsValidationUtils.required(value)
                        || fieldsValidationUtils.password(value);
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
        return formsValidationUtils
            .validateForm(this.getFieldsValues());
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
