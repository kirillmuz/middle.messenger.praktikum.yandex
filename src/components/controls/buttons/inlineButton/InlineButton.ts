import Block from '../../../../core/Block';
import { InlineButtonProps } from './inlineButtonProps';
import template from './inlineButtonTemplate.hbs?raw';
import './inlineButtonStyles.scss';

/**
 * Компонента кнопки-линии
 */
export class InlineButton extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'InlineButton';

    constructor(props: InlineButtonProps) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {})
        }
    }

    protected render(): string {
        return template;
    }
}
