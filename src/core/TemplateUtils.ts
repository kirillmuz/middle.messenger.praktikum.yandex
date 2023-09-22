import Handlebars from 'handlebars';
import Block from './Block';
import {HelperOptions} from 'handlebars';
import Partial from './Partial';

/**
 * Модель компонента
 */
export interface BlockComponent {
    element(): Element;
}

/**
 * Функция генерации идентификатора
 */
export const generateGUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
  
/**
 * Зарегистрировать компонент
 */
export function registerComponent(name: string, Component: typeof Block) {
    if (name in Handlebars.helpers) {
        throw `The ${name} component is already registered!`;
    }
    
    Handlebars.registerHelper(name, function (this: unknown, {hash, data, fn}: HelperOptions) {
        const component = new Component(hash);
        const dataAttribute = `data-id="${generateGUID()}"`;

        if ('ref' in hash) {
            (data.root.__refs = data.root.__refs || {})[hash.ref] = component;
        }

        (data.root.__children = data.root.__children || []).push({ 
            component, 
            embed(node: DocumentFragment){
                const placeholder = node.querySelector(`[${dataAttribute}]`);
                if(!placeholder) {
                    throw new Error(`Can't find data-id for component ${name}`);
                }

                const element = component.getElement();
                element.append(...Array.from(placeholder.childNodes));
                placeholder.replaceWith(element);
            }});

        const contents = fn ? fn(this) : '';
        return `<div ${dataAttribute}>${contents}</div>`;
    });
}

/**
 * Скомпилировать шаблон
 */
export const compileTemplate = (template: string, context: unknown) => {
    const data = {
        ...(context as object), 
        __children: [] as Array<{component: unknown, embed(node: DocumentFragment): void}>,
        __refs: {} as Record<string, Block | HTMLElement>,
    };
    const html = Handlebars.compile(template)(data);
    return { html, children: data.__children, refs: data.__refs };
};

/**
 * Зарегистрировать компонент частичного представления
 */
export const registerPartial = (Component: typeof Partial) => {
    const partialComponent = new Component().Component;
    Handlebars.registerPartial(partialComponent.name, partialComponent.component);
}
