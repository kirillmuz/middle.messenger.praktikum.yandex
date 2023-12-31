import Block from '../../../core/Block';
import { connect } from '../../../utils/storeUtils';
import { changeAvatar, deleteChat } from '../../../services/ChatsService';
import { ChatMenuDialogProps } from './chatMenuDialogProps';
import template from './chatMenuDialogTemplate.hbs?raw';
import '../dialogsStyles.scss';
import './chatMenuDialogStyles.scss';

/**
 * Класс диалогового окна меню чата
 */
class ChatMenuDialog extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ChatMenuDialog';

    constructor(props: ChatMenuDialogProps) {
        super({
            ...props,
            show: props.show,
            onUnderlayClick: () => {
                window.store?.set({chatMenuDialogOpened: false});
            },
            onChangeAvatar: (event: MouseEvent) => {
                event.preventDefault();
                const avaFile = document.getElementById('chatAvatarFile');
                if(avaFile) {
                    avaFile.click();
                    avaFile.onchange = (e: Event) => {
                        window.store?.set({chatMenuDialogOpened: false});
                        const chatId = window.store?.getState().selectedChat?.id ?? 0;
                        const filesList = (e.target as HTMLInputElement)?.files ?? [];
                        if(filesList.length > 0) {
                            changeAvatar(chatId, filesList[0]);
                        }
                    }
                }
            },
            onAddUser: (event: MouseEvent) => {
                event.preventDefault();
                window.store?.set({
                    chatMenuDialogOpened: false,
                    addUserDialogOpened: true
                });
            },
            onDeleteUser: (event: MouseEvent) => {
                event.preventDefault();
                window.store?.set({
                    chatMenuDialogOpened: false,
                    deleteUserDialogOpened: true
                });
            },
            onDeleteChat: (event: MouseEvent) => {
                event.preventDefault();
                const selectedChat = window.store?.getState().selectedChat;
                if(selectedChat) {
                    window.store?.set({chatMenuDialogOpened: false});
                    if(confirm('Вы уверены, что хотите удалить чат?')) {
                        deleteChat(selectedChat.id);
                    }
                }
            }
        } as ChatMenuDialogProps);
    }

    protected render(): string {
        return template;
    }
}

/**
 * Диалоговое окно меню чата
 */
export default connect((state) => ({show: state.chatMenuDialogOpened}))(ChatMenuDialog);
