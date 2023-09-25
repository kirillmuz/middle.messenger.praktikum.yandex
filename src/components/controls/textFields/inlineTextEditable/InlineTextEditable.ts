import Block from '../../../../core/Block';
import { ValidationMessage } from '../../validationMessage';
import template from './inlineTextEditableTemplate.hbs?raw';
import { InlineTextEditableProps } from './inlineTextEditableProps';
import './inlineTextEditableStyles.scss';

/**
 * Компонент InlineTextEditable (поле ввода с инлайн редактированием)
 */
export class InlineTextEditable extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'InlineTextEditable';

    constructor(props: InlineTextEditableProps) {
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
        const props = this.props as InlineTextEditableProps;
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
