import Block from '../../../../core/Block';
import template from './textFieldTemplate.hbs?raw';
import { TextFieldProps } from './textFieldProps';
import './textFieldStyles.scss';
import { ValidationMessage } from '../..';

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
            onBlur: () => this.validate()
        });
    }

    /**
     * Получить значение
     */
    public value() {
        if (!this.validate()) {
            return false;
        }
        return this.getValue();
    }

    private getValue() {
        if(this.refs.input instanceof Block) {
            return (this.refs.input.getElement() as HTMLInputElement)?.value ?? '';
        } else {
            return (this.refs.input as HTMLInputElement)?.value ?? '';
        }
    }

    private validate() {
        const value = this.getValue();
        const props = this.props as TextFieldProps;
        const error = props.validate ? props.validate(value) : '';
        const validationMessage = (this.refs.validationMessage as ValidationMessage);
        if (error) {
            validationMessage?.setProps({
                validationMessage: error
            });
            return false;
        }
        validationMessage?.setProps({
            validationMessage: ''
        });
        return true;
    }

    protected render(): string {
        return template;
    }
}
