import Block from '../../../core/Block';
import { connect, initStore, setStateAsync } from '../../../utils/storeUtils';
import { changeAvatar, deleteChat } from '../../../services/ChatsService';
import { ChatMenuDialogProps } from './chatMenuDialogProps';
import template from './chatMenuDialogTemplate.hbs?raw';
import '../dialogsStyles.scss';
import './chatMenuDialogStyles.scss';

/**
 * Диалоговое окно меню чата
 */
class ChatMenuDialog extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ChatMenuDialog';

    constructor(props: ChatMenuDialogProps) {
        initStore();
        super({
            ...props,
            show: props.show,
            onUnderlayClick: () => {
                setStateAsync({chatMenuDialogOpened: false});
            },
            onChangeAvatar: (event: MouseEvent) => {
                event.preventDefault();
                const avaFile = document.getElementById('chatAvatarFile');
                if(avaFile) {
                    avaFile.click();
                    avaFile.onchange = (e: Event) => {
                        setStateAsync({chatMenuDialogOpened: false});
                        const filesList = (e.target as HTMLInputElement)?.files ?? [];
                        if(filesList.length > 0) {
                            changeAvatar(28149, filesList[0]);
                        }
                    }
                }
            },
            onAddUser: (event: MouseEvent) => {
                event.preventDefault();
            },
            onDeleteChat: (event: MouseEvent) => {
                event.preventDefault();
                setStateAsync({chatMenuDialogOpened: false});
                deleteChat(0);
            }
        } as ChatMenuDialogProps);
    }

    protected render(): string {
        return template;
    }
}

export default connect((state) => ({show: state.chatMenuDialogOpened}))(ChatMenuDialog);