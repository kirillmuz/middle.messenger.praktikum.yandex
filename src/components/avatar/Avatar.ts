import { ApiHost } from '../../constants/commonConstants';
import Block from '../../core/Block';
import template from './avatarTemplate.hbs?raw';
import { AvatarProps } from './AvatarProps';
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
            click: this.props.chooseAvatar || (() => {})
        }
    }

    protected render(): string {
        return template;
    }
}
