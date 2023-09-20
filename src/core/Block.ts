import {EventBus} from "./EventBus";
//import Handlebars from "handlebars";
import { compileTemplate, prepareTemplate as prepareTemplateUtil } from "./TemplateUtils";

// Нельзя создавать экземпляр данного класса
/*abstract*/ class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  //public Name: string = '';

  protected props: any;
  protected refs: Record<string, Block | HTMLElement> = {};
  public children: Record<string, Block>;
  private eventBus: () => EventBus;
  private _element: HTMLElement | null = null;
  //private _meta: { props: any; };

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(propsWithChildren: any = {}) {
    const eventBus = new EventBus();

    const {props, children} = this._getChildrenAndProps(propsWithChildren);

    //this.Name = name;

    /*this._meta = {
      props
    };*/

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildrenAndProps(childrenAndProps: any) {
    const props: Record<string, any> = {};
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

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
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

  componentDidMount() {
  }

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach(child => child.dispatchComponentDidMount());
  }

  private _componentDidUpdate(oldProps: any, newProps: any) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(_oldProps: any, _newProps: any) {
    return true;
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
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

    private compile(template: string, context: any) {
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

        children?.forEach(({embed}: any) => {
            embed(htmlTemplateElement.content);
        });
        return htmlTemplateElement.content;
    }

    protected prepareTemplate(template: string) {
      return prepareTemplateUtil(template, this.props);
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

  _makePropsProxy(props: any) {
    // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldTarget = {...target}

        target[prop] = value;

        // Запускаем обновление компоненты
        // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      }
    });
  }

  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this.getElement()!.style.display = "block";
  }

  hide() {
    this.getElement()!.style.display = "none";
  }
}

export default Block;



// import {EventBus} from "./EventBus";
// import Handlebars from "handlebars";
// import { generateGUID } from "./TemplateUtils";

// // Нельзя создавать экземпляр данного класса
// class Block {
//   static EVENTS = {
//     INIT: "init",
//     FLOW_CDM: "flow:component-did-mount",
//     FLOW_CDU: "flow:component-did-update",
//     FLOW_RENDER: "flow:render"
//   };

//   public id = generateGUID();
//   protected props: any;
//   protected refs: Record<string, Block> = {};
//   public children: Record<string, Block>;
//   private eventBus: () => EventBus;
//   private _element: HTMLElement | null = null;
//   private _meta: { props: any; };

//   /** JSDoc
//    * @param {string} tagName
//    * @param {Object} props
//    *
//    * @returns {void}
//    */
//   constructor(propsWithChildren: any = {}) {
//     const eventBus = new EventBus();

//     const {props, children} = this._getChildrenAndProps(propsWithChildren);

//     this._meta = {
//       props
//     };

//     this.children = children;
//     this.props = this._makePropsProxy(props);

//     this.eventBus = () => eventBus;

//     this._registerEvents(eventBus);

//     eventBus.emit(Block.EVENTS.INIT);
//   }

//   _getChildrenAndProps(childrenAndProps: any) {
//     const props: Record<string, any> = {};
//     const children: Record<string, Block> = {};

//     Object.entries(childrenAndProps).forEach(([key, value]) => {
//       if (value instanceof Block) {
//         children[key] = value;
//       } else {
//         props[key] = value;
//       }
//     });

//     return {props, children};
//   }

//   _addEvents() {
//     const {events = {}} = this.props as { events: Record<string, () => void> };

//     Object.keys(events).forEach(eventName => {
//       this._element?.addEventListener(eventName, events[eventName]);
//     });
//   }

//   _registerEvents(eventBus: EventBus) {
//     eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
//     eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
//     eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
//     eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
//   }

//   private _init() {
//     this.init();

//     this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
//   }

//   protected init() {
//   }

//   _componentDidMount() {
//     this.componentDidMount();
//   }

//   componentDidMount() {
//   }

//   public dispatchComponentDidMount() {
//     this.eventBus().emit(Block.EVENTS.FLOW_CDM);

//     Object.values(this.children).forEach(child => child.dispatchComponentDidMount());
//   }

//   private _componentDidUpdate(oldProps: any, newProps: any) {
//     if (this.componentDidUpdate(oldProps, newProps)) {
//       this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
//     }
//   }

//   protected componentDidUpdate(oldProps: any, newProps: any) {
//     return true;
//   }

//   setProps = (nextProps: any) => {
//     if (!nextProps) {
//       return;
//     }

//     Object.assign(this.props, nextProps);
//   };

//   get element() {
//     return this._element;
//   }

//   private _render() {
//     const fragment = this.compile(this.render(), this.props);

//     const newElement = fragment.firstElementChild as HTMLElement;

//     if (this._element) {
//       this._element.replaceWith(newElement);
//     }

//     this._element = newElement;

//     this._addEvents();
//   }

//   private compile(template: string, context: any) {
//     const contextAndStubs = {...context, __refs: this.refs};

//     const html = Handlebars.compile(template)(contextAndStubs);

//     const temp = document.createElement('template');

//     temp.innerHTML = html;

//     contextAndStubs.__children?.forEach(({embed}: any) => {
//       embed(temp.content);
//     });

//     return temp.content;
//   }

//   protected render(): string {
//     return '';
//   }

//   getContent() {
//     return this.element;
//   }

//   _makePropsProxy(props: any) {
//     // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
//     const self = this;

//     return new Proxy(props, {
//       get(target, prop) {
//         const value = target[prop];
//         return typeof value === "function" ? value.bind(target) : value;
//       },
//       set(target, prop, value) {
//         const oldTarget = {...target}

//         target[prop] = value;

//         // Запускаем обновление компоненты
//         // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
//         self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
//         return true;
//       },
//       deleteProperty() {
//         throw new Error("Нет доступа");
//       }
//     });
//   }

//   _createDocumentElement(tagName: string) {
//     // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
//     return document.createElement(tagName);
//   }

//   show() {
//     this.getContent()!.style.display = "block";
//   }

//   hide() {
//     this.getContent()!.style.display = "none";
//   }
// }

// export default Block;
