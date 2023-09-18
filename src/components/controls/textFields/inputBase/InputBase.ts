import Block from '../../../../core/Block';
import template from './inputBaseTemplate.hbs?raw';
import { InputBaseProps } from './inputBaseProps';

/**
 * Компонент базовый input
 */
export class InputBase extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'InputBase';
    
    constructor(props: InputBaseProps) {
        super({
            ...props,
            events: {
                blur: props.onBlur || (() => {})
            }
        })
    }

    protected render(): string {
        return template;
    }
}
