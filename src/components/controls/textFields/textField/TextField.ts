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

    /**
     * Получить значение
     */
    public value() {
        if(this.refs.input instanceof Block) {
            return (this.refs.input.getElement() as HTMLInputElement)?.value ?? '';
        } else {
            return (this.refs.input as HTMLInputElement)?.value ?? '';
        }
    }

    protected render(): string {
        return template;
    }
}
