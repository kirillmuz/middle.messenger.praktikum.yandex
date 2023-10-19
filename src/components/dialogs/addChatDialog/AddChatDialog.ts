import Block from '../../../core/Block';
import { connect } from '../../../utils/storeUtils';
import { DialogProps } from '../dialogProps';
import template from './addChatDialogTemplate.hbs?raw';
import '../dialogsStyles.scss';

/**
 * Класс диалогового окна создания чата
 */
class AddChatDialog extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'AddChatDialog';

    constructor(props: DialogProps) {
        super({
            ...props,
            show: props.show,
            onUnderlayClick: () => {
                window.store?.set({
                    addChatDialogOpened: false
                })
            }
        } as DialogProps);
    }

    protected render(): string {
        return template;
    }
}

/**
 * Диалоговое окно создания чата
 */
export default connect((state) => ({show: state.addChatDialogOpened}))(AddChatDialog);
