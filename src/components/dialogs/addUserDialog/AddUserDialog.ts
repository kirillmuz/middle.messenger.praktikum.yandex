import Block from '../../../core/Block';
import { connect, initStore } from '../../../utils/storeUtils';
import { DialogProps } from '../dialogProps';
import template from './addUserDialogTemplate.hbs?raw';
import '../dialogsStyles.scss';

/**
 * Класс диалогового окна добавления пользователя
 */
class AddUserDialog extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'AddUserDialog';

    constructor(props: DialogProps) {
        initStore();
        super({
            ...props,
            show: props.show,
            onUnderlayClick: () => {
                window.store?.set({
                    addUserDialogOpened: false
                })
            }
        } as DialogProps);
    }

    protected render(): string {
        return template;
    }
}

/**
 * Диалоговое окно добавления пользователя
 */
export default connect((state) => ({show: state.addUserDialogOpened}))(AddUserDialog);
