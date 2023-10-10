import Block from '../../../core/Block';
import { DialogProps } from '../dialogProps';
import template from './addChatDialogTemplate.hbs?raw';
import '../dialogsStyles.scss';
import { connect, initStore } from '../../../utils/storeUtils';

/**
 * Диалоговое окно создания чата
 */
class AddChatDialog extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'AddChatDialog';

    constructor(props: DialogProps) {
        initStore();
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

export default connect((state) => ({show: state.addChatDialogOpened}))(AddChatDialog);