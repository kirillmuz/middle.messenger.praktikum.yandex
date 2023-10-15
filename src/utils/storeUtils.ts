import Block from '../core/Block';
import { AppStore, StoreEvents } from '../core/AppStore';
import { AppState } from '../types/core';
import isEqual from './isEqual';

/**
 * Начальное состояние
 */
const initialState: AppState = {
    currentUser: undefined,
    chatsList: [],
    selectedChat: undefined,
    addChatDialogOpened: false,
    chatMenuDialogOpened: false,
    addUserDialogOpened: false,
    deleteUserDialogOpened: false,
    token: undefined,
    messages: [],
    currentChatCachedUsers: [],
    floatMessage: undefined,
    selectedChatUsers: []
}

/**
 * Инициализировать хранилище
 */
const initStore = () => {
    if(!window.store) {
        const stateJson = sessionStorage.getItem('state');
        const currentState = stateJson ? JSON.parse(stateJson) as AppState : initialState;
        const store = new AppStore<AppState>(currentState);
        window.store = store;
        sessionStorage.setItem('state', JSON.stringify(store.getState()));
    }
}

/**
 * Подключить стейт к компоненту
 */
const connect = (mapStateToProps: (state: AppState) => Partial<AppState>) => {
    initStore();
    return function<P extends object>(Component: typeof Block) {
        return class extends Component {
            private onChangeStoreCallback: () => void;
            constructor(props: P) {
                const store = window.store;
                let state = mapStateToProps(store!.getState());
                super({...props, ...state});
                this.onChangeStoreCallback = () => {
                    const newState = mapStateToProps(store!.getState());
                    if (!isEqual(state, newState)) {
                        this.setProps({...newState});
                    }
                    state = newState;
                }
                store!.on(StoreEvents.Updated, this.onChangeStoreCallback);
            }

            componentWillUnmount() {
                super.componentWillUnmount();
                window.store?.off(StoreEvents.Updated, this.onChangeStoreCallback);
            }
        }
    }
}

const resetStore = () => {
    if(window.store) {
        window.store.set(initialState);
        sessionStorage.setItem('state', JSON.stringify(initialState));
    }
}

export {
    initStore,
    connect,
    resetStore
}
