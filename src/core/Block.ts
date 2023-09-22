/* eslint-disable @typescript-eslint/no-explicit-any */
import {EventBus} from './EventBus';
import { compileTemplate } from './TemplateUtils';

interface IProps extends Record<string, any> {
    events?: object;
} 

/**
 * Базовый класс компонента
 */
class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
        FLOW_CWUM: 'flow:component-will-unmount'
    };

    protected props: IProps;
    protected refs: Record<string, Block | HTMLElement> = {};
    public children: Record<string, Block>;
    private eventBus: () => EventBus;
    private _element: HTMLElement | null = null;

    constructor(propsWithChildren?: IProps) {
        const {props, children} = this._getChildrenAndProps(propsWithChildren ?? {});
        this.children = children;
        this.props = this._makePropsProxy(props, this);

        const eventBus = new EventBus();
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _getChildrenAndProps(childrenAndProps: IProps) {
        const props: IProps = {};
        const children: Record<string, Block> = {};

        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return {props, children};
    }

    _addEvents() {
        const {events = {}} = this.props as { events: Record<string, () => void> };

        Object.keys(events).forEach(eventName => {
            this._element?.addEventListener(eventName, events[eventName]);
        });
    }

    _removeEvents() {
        const {events = {}} = this.props as { events: Record<string, () => void> };

        Object.keys(events).forEach(eventName => {
            this._element?.removeEventListener(eventName, events[eventName]);
        });
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this, {}, this.props));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CWUM, this._componentWillUnmount.bind(this));
    }

    private _init() {
        this.init();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    protected init() {
    }

    _componentDidMount() {
        this.componentDidMount();
    }

    componentDidMount() {}

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        Object.values(this.children).forEach(child => child.dispatchComponentDidMount());
    }

    private _componentDidUpdate(oldProps: IProps, newProps: IProps) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    // отключаем линтер, т.к. это сигнатура переопределяемого метода
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected componentDidUpdate(_oldProps: IProps, _newProps: IProps) {
        return true;
    }

    private _componentWillUnmount() {
        this.componentWillUnmount()
        this._removeEvents();
    }

    protected componentWillUnmount() {}

    setProps = (nextProps: IProps) => {
        if (!nextProps) {
            return;
        }
        Object.assign(this.props ?? {}, nextProps);
    };

    get element() {
        return this._element;
    }

    private _render() {
        const fragment = this.compile(this.render(), this.props);
        const newElement = fragment.firstElementChild as HTMLElement;
        if (this._element) {
            this._element.replaceWith(newElement);
        }
        this._element = newElement;
        this._addEvents();
    }

    private compile(template: string, context: object) {
        const { children, html, refs } = compileTemplate(template, context);
        const htmlTemplateElement = document.createElement('template');
        htmlTemplateElement.innerHTML = html;

        const fragment = htmlTemplateElement.content;
        this.refs = Array.from(fragment.querySelectorAll('[ref]'))
            .reduce((list, element) => {
                const key = element.getAttribute('ref') as string;
                list[key] = element as HTMLElement;
                element.removeAttribute('ref');
                return list;
            }, refs);

        children?.forEach(({embed}: {embed(node: DocumentFragment): void}) => {
            embed(htmlTemplateElement.content);
        });
        return htmlTemplateElement.content;
    }

    protected render(): string {
        return '';
    }

    getElement() {
        if(!this.element) {
            this.render()
        }
        return this.element as HTMLElement;
    }

    _makePropsProxy(props: IProps, self: Block) {
        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop.toString()];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop, value) {
                const oldTarget = {...target};
                target[prop.toString()] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            }
        });
    }
}

export default Block;
