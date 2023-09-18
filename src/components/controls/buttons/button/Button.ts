import Block from "../../../../core/Block";
import { ButtonProps } from './buttonProps';
import template from './buttonTemplate.hbs?raw';
import './buttonStyles.scss';

/**
 * Компонент "Кнопка"
 */
export class Button extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'Button';

    constructor(props: ButtonProps) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {})
        }
    }

    protected render(): string {
        return template;
    }
};
