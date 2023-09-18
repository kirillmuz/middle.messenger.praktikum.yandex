import Block from '../../../core/Block';
import template from './infoTemplate.hbs?raw';
import { InfoProps } from './infoProps';
import './infoStyles.scss';

/**
 * Компонент Info
 */
export class Info extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'Info';

    constructor(props: InfoProps) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}
