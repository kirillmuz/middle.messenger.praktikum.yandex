import Block from '../../../../core/Block';
import { Select } from '../../../controls';
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
    selectedUserId?: boolean | string;
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
        const usersList = window.store?.getState().selectedChatUsers ?? [];

        super({
            ...props,
            validate: {
                selectedUser: (value?: string) => {
                    return fieldsValidationUtils.required(value);
                }
            },
            onUserDelete: (event: MouseEvent) => {
                event.preventDefault();
                if (!this.validate()) {
                    return;
                }
                const selectedUserId = this.getFieldsValues().selectedUserId ?? 0;
                const chatId = window.store?.getState().selectedChat?.id ?? 0;
                deleteUserFromChat(chatId, parseInt(selectedUserId?.toString())).then((res) => {
                    const existingChatUsers = window.store?.getState().selectedChatUsers ?? [];
                    window.store?.set({
                        deleteUserDialogOpened: false,
                        floatMessage: 'Пользователь успешно удален из чата',
                        selectedChatUsers: existingChatUsers.filter(u => u.id !== res.id)
                    });
                }).catch((err: string) => {
                    (this.refs.validationMessage as Block)
                        ?.setProps({validationMessage: parseApiError(err)});
                });
            },
            usersListOptions: usersList.filter(u => u.role !== 'admin')
                .map(u=>{return {
                    text: u.login ?? `${u.secondName} ${u.firstName}`,
                    value: u.id ?? '' 
                }})
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
            selectedUserId: (this.refs.userSelect as Select)?.value()
        }
    }

    protected render(): string {
        return template;
    }
}
