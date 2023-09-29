import Block from '../../../../core/Block';
import { InlineTextEditable } from '../../../controls';
import { ProfileData } from '../../../../types/commonTypes';
import { fieldsValidationUtils } from '../../../../utils/fieldsValidationUtils';
import { formsValidationUtils } from '../../../../utils/formsValidationUtils';
import { RoutesAdresses } from '../../../../constants/commonConstants';
import Router from '../../../../core/Router';
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

    /**
     * Роутер
     */
    private _router: Router;

    constructor(props: {profile: ProfileData}) {
        const { profile } = props;
        super({
            ...profile,
            validate: {
                email: (value?: string) =>{
                    return fieldsValidationUtils.required(value)
                        || fieldsValidationUtils.email(value);
                },
                login: (value?: string) =>{
                    return fieldsValidationUtils.required(value)
                        || fieldsValidationUtils.login(value);
                },
                secondName: (value?: string) =>{
                    return fieldsValidationUtils.required(value)
                        || fieldsValidationUtils.personNameData(value);
                },
                firstName: (value?: string) =>{
                    return fieldsValidationUtils.required(value)
                        || fieldsValidationUtils.personNameData(value);
                },
                midleName: (value?: string) =>{
                    return fieldsValidationUtils.personNameData(value);
                },
                displayName: (value?: string) =>{
                    return fieldsValidationUtils.required(value);
                },
                phone: (value?: string) =>{
                    return fieldsValidationUtils.required(value)
                        || fieldsValidationUtils.phone(value);
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
                this._router.go(RoutesAdresses.Profile);
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
