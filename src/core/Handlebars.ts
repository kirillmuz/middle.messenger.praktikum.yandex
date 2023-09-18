import { HelperOptions } from "handlebars";

export interface BlockComponent {
    element(): Element;
}

interface BlockComponentClass<T> extends BlockComponent {
    new (props: unknown): T;
}

type StaticMethods = {
    componentName: string;
}

export const compile = (template: string, context: object) => {
    const data = {
        ...context, 
        __children: [] as Array<{component: unknown, embed(node: DocumentFragment): void}>,
        __refs: {} as Record<string, unknown>,
    };
    const html = Handlebars.compile(template)(data);
    return { html, children: data.__children, refs: data.__refs };
};

let uniqueId = 0;

//type ComponentType<T extends BlockComponentClass<T>> = {new (props: ConstructorParameters<InstanceType<T>>)}

export function registerComponent<T extends BlockComponentClass<T>>(Component: any /*ComponentType<T> */) {
    if(Component.componentName in Handlebars.helpers) {
        throw `The ${Component.componentName} component is already registerd!`;
    }

    Handlebars.registerHelper(Component.componentName, function(this: unknown, {hash, data, fn}: HelperOptions)
    {
        const component = new Component(hash);
        const dataAttribute = `data-component-hbs-id=${++uniqueId}`;

        if('ref' in hash) {
            (data.root__refs = data.root__refs || {})[hash.ref] = component;
        }

        (data.root.__children = data.root.__children || []).push({ component, embed(node: DocumentFragment){
            const placeholder = node.querySelector(`[${dataAttribute}]`);
            if(!placeholder) {
                throw new Error(`Can't find data-id for component ${Component.componentName}`);
            }

            const element = component.element();
            element.append(...Array.from(placeholder.childNodes));
            placeholder.replaceWith(element);
        }});

        const contents = fn ? fn(this) : '';
        return `<div ${dataAttribute}>${contents}</div>`
    });
}
