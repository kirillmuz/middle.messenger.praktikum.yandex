import Block from '../../../../core/Block';
import { TextField } from '../../../controls';
import { fieldsValidationUtils } from '../../../../utils/fieldsValidationUtils';
import { formsValidationUtils } from '../../../../utils/formsValidationUtils';
import { deleteUserFromChat } from '../../../../services/ChatsService';
import { parseApiError } from '../../../../utils/errorsUtils';
import { DeleteUserFormProps } from './deleteUserFormProps';
import template from './deleteUserFormTemplate.hbs?raw';
import '../chatFormsStyles.scss';

/**
 * Значение полей формы
 */
interface FieldsValues {
    userLogin?: boolean | string;
}

/**
 * Форма удаления пользователя из чата
 */
export class DeleteUserForm extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'DeleteUserForm';

    constructor(props: DeleteUserFormProps) {
        super({
            ...props,
            validate: {
                userLogin: (value?: string) => {
                    return fieldsValidationUtils.required(value);
                }
            },
            onUserDelete: (event: MouseEvent) => {
                event.preventDefault();
                if (!this.validate()) {
                    return;
                }
                const { userLogin } = this.getFieldsValues();
                const chatId = window.store?.getState().selectedChat?.id ?? 0;
                deleteUserFromChat(chatId, userLogin?.toString() ?? '').then(() => {
                    window.store?.set({
                        deleteUserDialogOpened: false,
                        floatMessage: 'Пользователь успешно удален из чата'
                    });
                }).catch((err: string) => {
                    (this.refs.validationMessage as Block)
                        ?.setProps({validationMessage: parseApiError(err)});
                });
            }
        } as DeleteUserFormProps);
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
            userLogin: (this.refs.chatName as TextField)?.value()
        }
    }

    protected render(): string {
        return template;
    }
}
