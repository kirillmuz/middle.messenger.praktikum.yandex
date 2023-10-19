import Block from '../../core/Block';
import { ApiHost } from '../../constants/commonConstants';
import { changeAvatar } from '../../services/UsersService';
import { AvatarProps } from './AvatarProps';
import template from './avatarTemplate.hbs?raw';
import './avatarStyles.scss';

/**
 * Компонент "Аватар"
 */
export class Avatar extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'Avatar';

    constructor(props: AvatarProps) {
        super({
            ...props,
            avatar: props.avatar ? `${ApiHost}/resources/${props.avatar}` : undefined
        } as AvatarProps);
        this.props.events = {
            click: () => {
                const avaFile = document.getElementById('file');
                if(avaFile) {
                    avaFile.click();
                    avaFile.onchange = (e: Event) => {
                        const filesList = (e.target as HTMLInputElement)?.files ?? [];
                        if(filesList.length > 0) {
                            changeAvatar(filesList[0]);
                        }
                    }
                }
            }
        }
    }

    protected render(): string {
        return template;
    }
}
