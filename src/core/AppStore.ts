import { EventBus } from './EventBus';

const testPreCommit = 'dsdfgnsl gsdlknf kjgnsdfklj gnkjdfn kjgndfjnh kjgfh nfdgk hnfgjd hlkdnfgklj hnfdkjg hnlkfdgl ndfg lkdfn hklfngk hnlkgf hnlnf lkdnlhkfg gf lknfglkh nfglkh n';

/**
 * События хранилища
 */
export enum StoreEvents {
    Updated = 'Updated'
}

/**
 * Хранилище состояния приложения
 */
export class AppStore<State extends Record<string, unknown>> extends EventBus {
    private _state: State = {} as State;

    constructor(state: State) {
        super();
        this._state = state;
        this.set(state);
    }

    /**
     * Получить состояние
     */
    public getState() {
        return this._state;
    }

    /**
     * Установить состояние
     */
    public set(newState: Partial<State>) {
        const prevState = { ...this._state };
        this._state = { ...this._state, ...newState };
        this.emit(StoreEvents.Updated, prevState, newState);
        sessionStorage.setItem('state', JSON.stringify(this._state));
    }
}
