import Block from "../../../../core/Block";
import { GoToButtonProps } from './goToButtonProps';
import template from './goToButtonTemplate.hbs?raw';
import './goToButtonStyles.scss';

/**
 * Кнопка "Перейти к"
 */
export class GoToButton extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'GoToButton';

    constructor(props: GoToButtonProps) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {})
        }
    }

    protected render(): string {
        return template;
    }
};
