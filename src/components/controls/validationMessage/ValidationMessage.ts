import Block from '../../../core/Block';
import template from './validationMessageTemplate.hbs?raw';
import { ValidationMessageProps } from './validationMessageProps';
import './validationMessageStyles.scss';

/**
 * Компонент "Сообщение валидации"
 */
export class ValidationMessage extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ValidationMessage';

    constructor(props: ValidationMessageProps) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}
