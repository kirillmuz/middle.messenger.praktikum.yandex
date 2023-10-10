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
    addChatDialogOpened: false,
    chatMenuDialogOpened: false
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

const setStateAsync = (state: AppState) => {
    initStore();
    setTimeout(() => {
        window.store?.set(state)
    }, 0);
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
                // сохраняем начальное состояние
                let state = mapStateToProps(store!.getState());
  
                super({...props, ...state});

                this.onChangeStoreCallback = () => {

                    // при обновлении получаем новое состояние
                    const newState = mapStateToProps(store!.getState());

                    // если что-то из используемых данных поменялось, обновляем компонент
                    if (!isEqual(state, newState)) {
                        this.setProps({...newState});
                    }

                    // не забываем сохранить новое состояние
                    state = newState;
                }
  
                // подписываемся на событие
                store!.on(StoreEvents.Updated, this.onChangeStoreCallback);
            }


            componentWillUnmount() {
                super.componentWillUnmount();
                window.store?.off(StoreEvents.Updated, this.onChangeStoreCallback);
            }
        }
    }
}

export {
    initStore,
    setStateAsync,
    connect
}
