import Block from '../../../core/Block';
import { connect } from '../../../utils/storeUtils';
import { DialogProps } from '../dialogProps';
import template from './deleteUserDialog.hbs?raw';
import '../dialogsStyles.scss';

/**
 * Класс диалогового окна удаления пользователя
 */
class DeleteUserDialog extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'DeleteUserDialog';

    constructor(props: DialogProps) {
        super({
            ...props,
            show: props.show,
            onUnderlayClick: () => {
                window.store?.set({
                    deleteUserDialogOpened: false
                })
            }
        } as DialogProps);
    }

    protected render(): string {
        return template;
    }
}

/**
 * Диалоговое окно удаления пользователя
 */
export default connect((state) => ({show: state.deleteUserDialogOpened}))(DeleteUserDialog);
