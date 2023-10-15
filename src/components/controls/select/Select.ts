import Block from '../../../core/Block';
import { ValidationMessage } from '../validationMessage';
import { SelectProps } from './selectProps';
import template from './selectTemplate.hbs?raw';
import './selectStyles.scss';


/**
 * Компонент выпадающий список
 */
export class Select extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'Select';
    
    constructor(props: SelectProps) {
        super({
            ...props,
            placeholder: props.placeholder ?? 'Выберите',
        } as SelectProps);
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
        if(this.refs.select instanceof Block) {
            return (this.refs.select.getElement() as HTMLInputElement)?.value ?? '';
        } else {
            return (this.refs.select as HTMLInputElement)?.value ?? '';
        }
    }

    private validate() {
        const value = this.getValue();
        const props = this.props as SelectProps;
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
