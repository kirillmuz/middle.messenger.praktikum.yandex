import { removeListener } from "process";
import { BlockComponent, compile } from "./Handlebars";

type RefType = {
    [key: string]: Element | Block<object>
}

type EventListType = {[key: string]: ((e: Event) => void) | undefined;}
type EventsType<Refs> = { [key in keyof Refs]?: EventListType } | EventListType;

export abstract class Block<Props extends object, Refs extends RefType = RefType> implements BlockComponent {
    protected abstract template: string;
    protected props = {} as Props;
    protected refs = {} as Refs;
    protected readonly events = {} as EventsType<Refs>;
    private children: Array<Block<object>> = [];
    private domElement: Element | null = null;

    constructor(props: Props) {
        this.props = props;
        Object.entries(this.customProps()).forEach((prop) => {
            const [key, value] = prop;
            this.props[key as keyof Props] = value;
        });
    }

    protected customProps() {
        return {} as Props;
    }

    public setProps(props: Partial<Props>) {
        this.props = { ...this.props, ...props };
        this.render();
    }

    public element(): Element {
        if(!this.domElement) {
            this.render()
        }
        return this.domElement as Element;
    }

    public destroy() {
        this.unmountComponent();
        if(this.domElement) {
            this.domElement.replaceWith(document.createElement('template'));
        }
    }

    protected componentDidMount() {}

    componentWillUnmount() {

    }

    private attachListeners() {
        const addEventListener = (element: Element | Block<object>, event: string, callback: ((e: Event) => void ) | undefined) => {
            if(element && callback) {
                (element instanceof Element ? element : element.element())
                    .addEventListener(event, callback);
            }
        }

        for (const refOrEvent in this.events) {
            const eventsOrCallback = this.events[refOrEvent];
            if (typeof eventsOrCallback === 'function') {
                addEventListener(this.element(), refOrEvent, eventsOrCallback)
            } else {
                for (const event in eventsOrCallback) {
                    addEventListener(this.refs[refOrEvent], event, eventsOrCallback[event]);
                }
            }
        }
    }

    private removeListeners() {

    }

    

    private mountComponent() {
        this.attachListeners();
        this.componentDidMount();
    }

    private unmountComponent() {
        if(this.domElement) {
            this.componentWillUnmount();
            this.removeListeners();
            this.children.reverse().forEach(child => {
                child.unmountComponent();
            });
        }
    }

    protected render() {
        this.unmountComponent();
        const fragment = this.compile();
        if(this.domElement) {
            this.domElement.replaceWith(fragment);
        }
        this.domElement = fragment;
        this.mountComponent();
    }

    private compile() {
        const { children, html, refs } = compile(this.template, this.props);
        this.children = children.map(child => child.component as Block<object>);

        const templateElement = document.createElement('template');
        templateElement.innerHTML = html;
        const fragment = templateElement.content;

        this.refs = Array.from(fragment.querySelectorAll('[ref]'))
            .reduce((list, element) => {
                const key = element.getAttribute('ref') as string;
                list[key] = element as HTMLElement;
                element.removeAttribute('ref');
                return list;
            }, refs) as Refs;

        children.forEach(child => child.embed(fragment));

        if(!fragment.firstElementChild || fragment.firstElementChild?.nextElementSibling) {
            throw Error('Only one root suported!');
        }

        return fragment.firstElementChild;
    }
}
