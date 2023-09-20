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

    protected render(): string {
        return template;
    }
}
