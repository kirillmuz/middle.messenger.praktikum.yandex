import Block from '../../../../core/Block';
import { TextField } from '../../../controls';
import { fieldsValidationUtils } from '../../../../utils/fieldsValidationUtils';
import { formsValidationUtils } from '../../../../utils/formsValidationUtils';
import { AddChatFormProps } from './addChatFormProps';
import template from './addChatFormTemplate.hbs?raw';
import '../chatFormsStyles.scss';

/**
 * Значение полей формы
 */
interface FieldsValues {
    chatName?: boolean | string;
}

/**
 * Форма создания чата
 */
export class AddChatForm extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'AddChatForm';

    constructor(props: AddChatFormProps) {
        super({
            ...props,
            validate: {
                chatName: (value?: string) => {
                    return fieldsValidationUtils.required(value);
                }
            },
            onChatCreate: (event: MouseEvent) => {
                event.preventDefault();
                if (!this.validate()) {
                    return;
                }
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
            chatName: (this.refs.chatName as TextField)?.value()
        }
    }

    protected render(): string {
        return template;
    }
}
