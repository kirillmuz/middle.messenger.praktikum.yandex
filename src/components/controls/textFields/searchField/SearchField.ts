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

    protected render(): string {
        return template;
    }
}
