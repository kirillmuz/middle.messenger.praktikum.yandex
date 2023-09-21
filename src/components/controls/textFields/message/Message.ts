import Block from '../../../../core/Block';
import template from './messageTemplate.hbs?raw';
import { MessageProps } from './messageProps';
import './messageStyles.scss';

/**
 * Компонент "Сообщение"
 */
export class Message extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'Message';

    constructor(props: MessageProps) {
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
