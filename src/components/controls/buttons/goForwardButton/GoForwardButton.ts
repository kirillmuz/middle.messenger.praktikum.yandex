import Block from "../../../../core/Block";
import { GoForwardButtonProps } from './goForwardButtonProps';
import template from './goForwardButtonTemplate.hbs?raw';
import './goForwardButtonStyles.scss';

/**
 * Кнопка "Вперед"
 */
export class GoForwardButton extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'GoForwardButton';

    constructor(props: GoForwardButtonProps) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {})
        }
    }

    protected render(): string {
        return template;
    }
};
