import Block from '../../../../core/Block';
import { TextField } from '../../../controls';
import { fieldsValidationUtils } from '../../../../utils/fieldsValidationUtils';
import { formsValidationUtils } from '../../../../utils/formsValidationUtils';
import { addUserToChat } from '../../../../services/ChatsService';
import { parseApiError } from '../../../../utils/errorsUtils';
import { AddUserFormProps } from './addUserFormProps';
import template from './addUserFormTemplate.hbs?raw';
import '../chatFormsStyles.scss';

/**
 * Значение полей формы
 */
interface FieldsValues {
    userLogin?: boolean | string;
}

/**
 * Форма добавления пользователя в чат
 */
export class AddUserForm extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'AddUserForm';

    constructor(props: AddUserFormProps) {
        super({
            ...props,
            validate: {
                userLogin: (value?: string) => {
                    return fieldsValidationUtils.required(value);
                }
            },
            onUserAdd: (event: MouseEvent) => {
                event.preventDefault();
                if (!this.validate()) {
                    return;
                }
                const { userLogin } = this.getFieldsValues();
                const chatId = window.store?.getState().selectedChat?.id ?? 0;
                addUserToChat(chatId, userLogin?.toString() ?? '').then((res) => {
                    const existingChatUsers = window.store?.getState().selectedChatUsers ?? [];
                    window.store?.set({
                        addUserDialogOpened: false,
                        floatMessage: 'Пользователь успешно добавлен в чат',
                        selectedChatUsers: [...existingChatUsers, res]
                    });
                }).catch((err: string) => {
                    (this.refs.validationMessage as Block)
                        ?.setProps({validationMessage: parseApiError(err)});
                });
            }
        } as AddUserFormProps);
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
            userLogin: (this.refs.userLogin as TextField)?.value()
        }
    }

    protected render(): string {
        return template;
    }
}
