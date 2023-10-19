import Block from '../../../core/Block';
import { connect } from '../../../utils/storeUtils';
import { FloatMessageDialogProps } from './floatMessageDialogProps';
import template from './floatMessageDialogTemplate.hbs?raw';
import '../dialogsStyles.scss';
import './floatMessageDialogStyles.scss';

/**
 * Класс всплывающего сообщения
 */
class FloatMessageDialog extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'FloatMessageDialog';

    constructor(props: FloatMessageDialogProps) {
        super({
            ...props,
            message: props.message,
            onUnderlayClick: () => {
                window.store?.set({
                    floatMessage: undefined
                });
            }
        } as FloatMessageDialogProps);
        this.props.events = {
            click: () => {
                window.store?.set({
                    floatMessage: undefined
                });
            }
        }
    }

    protected render(): string {
        setTimeout(() => {
            window.store?.set({floatMessage: undefined});
        }, 3000);
        return template;
    }
}

/**
 * Диалоговое окно добавления пользователя
 */
export default connect((state) => ({message: state.floatMessage}))(FloatMessageDialog);
