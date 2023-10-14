import Block from '../../core/Block';
import Router from '../../core/Router';
import { RoutesAdresses } from '../../constants/commonConstants';
import { ChatsPageProps } from './chatsPageProps';
import { getChatsList } from '../../services/ChatsService';
import { initStore } from '../../utils/storeUtils';
import { closeChatConnection, initChat } from '../../services/MessagesService';
import template from './chatsPageTemplate.hbs?raw';
import '../pagesStyles.scss';
import './chatsPageStyles.scss';

/**
 * Страница "Чаты"
 */
export class ChatsPage extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ChatsPage';
    
    /**
     * Роутер
     */
    private _router: Router;

    constructor(props: ChatsPageProps) {
        initStore();
        super({
            ...props,
            openProfile: (event: MouseEvent) => {
                event.preventDefault();
                this._router.go(RoutesAdresses.Profile);
            },
            addChat: (event: MouseEvent) => {
                event.preventDefault();
                window.store?.set({
                    addChatDialogOpened: true
                });
            }
        });
        this._router = new Router();

        getChatsList().then(data => {
            this.setProps({
                ...props,
                chatsList: data
            } as ChatsPageProps);
        });
        initChat();
    }

    protected componentWillUnmount(): void {
        closeChatConnection();
    }

    protected render(): string {
        return template;
    }
}
