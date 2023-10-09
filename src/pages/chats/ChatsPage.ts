import Block from '../../core/Block';
import Router from '../../core/Router';
import { RoutesAdresses } from '../../constants/commonConstants';
import { ChatsPageProps } from './chatsPageProps';
import { getChatsList } from '../../services/ChatsService';
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
        super({
            ...props,
            openProfile: (event: MouseEvent) => {
                event.preventDefault();
                this._router.go(RoutesAdresses.Profile);
            },
            addChat: (event: MouseEvent) => {
                event.preventDefault();
                //createChat(`new_chat_${new Date().toLocaleTimeString()}`)
                //deleteChat(28387);
                //getChatToken(28149).then(res => console.log(res));
                //addUserToChat(28389, 'kiraololo').then(res => console.log(res));
                //deleteUserFromChat(28389, 'kiraololo');
                
            }
        });
        this._router = new Router();

        getChatsList().then(data => {
            this.setProps({
                ...props,
                chatsList: data
            } as ChatsPageProps);
        });
    }

    protected render(): string {
        return template;
    }
}
