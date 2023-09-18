import Block from "../../../../core/Block";
import { GoBackButtonProps } from './goBackButtonProps';
import template from './goBackButtonTemplate.hbs?raw';
import './goBackButtonStyles.scss';

/**
 * Кнопка "Назад"
 */
export class GoBackButton extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'GoBackButton';

    constructor(props: GoBackButtonProps) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {})
        }
    }

    protected render(): string {
        return template;
    }
};
