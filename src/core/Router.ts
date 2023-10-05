import Block, { IProps } from './Block';

const render = (query: string, component: Block) => {
    //const root = document.querySelector(query);
    const root = document.getElementById(query);
    if(root) {
        root.innerHTML = '';
        root.append(component.getElement()!);
    }
}

const isEqual = (lhs?: string | null, rhs?: string | null) => lhs === rhs;
  

class Route {
    private _pathname: string | null = null;
    private _blockClass: typeof Block | null = null;
    private _block: Block | null = null;
    private _props?: IProps;

    constructor(pathname: string, view: typeof Block, props?: IProps) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.unmount();
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    render() {
        if (/*!this._block && */this._blockClass) {
            this._block = new this._blockClass(this._props);
            render('root', this._block);
            return;
        }
        if(this._block) {
            render('root', this._block);
        }
    }
}

class Router {
    public static __instance: Router | null = null;

    private routes: Array<Route> = [];
    private history: History | null = null;
    private _currentRoute: Route | null = null;

    constructor() {
        if (Router.__instance) {
            return Router.__instance;
        }
        this.history = window.history;
        this._currentRoute = null;
        Router.__instance = this;
    }

    use(pathname: string, routeComponent: typeof Block, props?: IProps) {
        const route = new Route(pathname, routeComponent, props);
        this.routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = event => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this._onRoute((event as any)?.currentTarget?.location?.pathname);
        };
        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (route !== this._currentRoute && this._currentRoute && this._currentRoute.leave) {
            this._currentRoute.leave();
        }

        this._currentRoute = route ?? null;
        route?.render();//route, pathname);
    }

    go(pathname: string) {
        this.history?.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history?.back();
    }

    forward() {
        this.history?.forward();
    }

    getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }
}


export default Router;
