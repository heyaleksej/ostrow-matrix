import {combineReducers, createStore} from 'redux'
import { tableReducer } from './table-reducer';

export type RowType = {
    id:string
    desc1: string,
    param1: string | null,
    param2: string | null,
    param3: string | null,
    param4: string | null,
    desc2: string
}

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    table: tableReducer,
    // app: appReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
