import Block from '../../../core/Block';
import { ChatMenuProps } from './chatMenuProps';
import template from './chatMenuTemplate.hbs?raw';
import './chatMenuStyles.scss';

/**
 * Компонент "Меню чата"
 */
export class ChatMenu extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ChatMenu';

    constructor(props: ChatMenuProps) {
        super(props);
        this.props.events = {
            click: () => {
                window.store?.set({
                    chatMenuDialogOpened: true
                })
            }
        }
    }

    protected render(): string {
        return template;
    }
}
