import Block from '../../../../core/Block';
import template from './searchFieldTemplate.hbs?raw';
import { SearchFieldProps } from './searchFieldProps';
import './searchFieldStyles.scss';

/**
 * Компонент SearchField (поиск)
 */
export class SearchField extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'SearchField';

    constructor(props: SearchFieldProps) {
        super({
            ...props
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
