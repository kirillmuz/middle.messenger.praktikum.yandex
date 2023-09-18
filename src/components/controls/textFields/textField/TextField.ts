import Block from '../../../../core/Block';
import template from './textFieldTemplate.hbs?raw';
import { TextFieldProps } from './textFieldProps';
import './textFieldStyles.scss';

/**
 * Компонент TextField (поле ввода)
 */
export class TextField extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'TextField';

    constructor(props: TextFieldProps) {
        super({
            ...props,
            onBlur: () => console.log('Blur') //this.validate()
        });
    }

    protected render(): string {
        return template;
    }
}
