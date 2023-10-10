import Block from '../../../../core/Block';
import { initStore } from '../../../../utils/storeUtils';
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
        initStore();
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
