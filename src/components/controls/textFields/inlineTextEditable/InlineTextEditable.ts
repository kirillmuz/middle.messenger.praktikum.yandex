import Block from '../../../../core/Block';
import template from './inlineTextEditableTemplate.hbs?raw';
import { TextFielInlineTextEditableProps } from './TextFielInlineTextEditableProps';
import './inlineTextEditableStyles.scss';

/**
 * Компонент InlineTextEditable (поле ввода с инлайн редактированием)
 */
export class InlineTextEditable extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'InlineTextEditable';

    constructor(props: TextFielInlineTextEditableProps) {
        super({
            ...props,
            onBlur: () => console.log('Blur') //this.validate()
        });
    }

    protected render(): string {
        return template;
    }
}
