import Block from '../../core/Block';
import { navigate } from '../../utils/navigationUtils';
import { PagesNames } from '../../constants/commonConstants';
import template from './chatsPageTemplate.hbs?raw';
import { ChatsPageProps } from './chatsPageProps';
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

    constructor(props: ChatsPageProps) {
        super({
            ...props,
            openProfile: (event: any) => {
                event.preventDefault();
                navigate(PagesNames.Profile);
            },
        });
    }

    protected render(): string {
        return template;
    }
}
