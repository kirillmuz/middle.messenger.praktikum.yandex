import Block from '../../../core/Block';
import { UnderlayProps } from './underlayProps';
import template from './underlayTemplate.hbs?raw';
import './underlayStyles.scss';

/**
 * Подложка диалогового окна
 */
export class Underlay extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'Underlay';

    constructor(props: UnderlayProps) {
        super({
            ...props,
            underlayType: props.underlayType || 'shaded'
        } as UnderlayProps);
        this.props.events = {
            click: this.props.onUnderlayClick || (() => {})
        }
    }

    protected render(): string {
        return template;
    }
}
