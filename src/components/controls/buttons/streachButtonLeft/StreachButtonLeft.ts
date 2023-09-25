import Block from '../../../../core/Block';
import { StreachButtonLeftProps } from './streachButtonLeftProps';
import template from './streachButtonLeftTemplate.hbs?raw';
import './streachButtonLeftStyles.scss';

/**
 * Растягивающаяся кнопка ("влево") 
 */
export class StreachButtonLeft extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'StreachButtonLeft';

    constructor(props: StreachButtonLeftProps) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {})
        }
    }

    protected render(): string {
        return template;
    }
}
