import {v1} from "uuid";
import {RowType} from "./store";

const initialState: TableStateType = {
    ['tableId1']: [
        {
            id: v1(),
            desc1: 'Известный бренд',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Новый бренд'
        },
        {
            id: v1(),
            desc1: 'Большая рыночная доля бренда',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Небольшая рыночная доля бренда'
        },
        {
            id: v1(),
            desc1: 'Высокая лояльность к бренду',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Низкая лояльность к бренду'
        },
        {
            id: v1(),
            desc1: 'Длинный покупательский цикл',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Короткий покупательский цикл'
        },
        {
            id: v1(),
            desc1: 'Нечастое потребление',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Частое потребление'
        },
        {
            id: v1(),
            desc1: 'Маленькая доля голоса',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Большая доля голоса'
        },
        {
            id: v1(),
            desc1: 'ЦА – не пожилые люди и не дети',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'ЦА – пожилые люди и дети'
        },
    ],
    ['tableId2']: [
        {
            id: v1(),
            desc1: 'Несложное сообщение',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Сложное сообщение'
        },
        {
            id: v1(),
            desc1: 'Уникальное сообщение',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Неуникальное сообщение'
        },
        {
            id: v1(),
            desc1: 'Текущая кампания',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Новая кампания'
        },
        {
            id: v1(),
            desc1: 'Продуктовое сообщение',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Имиджевое сообщение'
        },
        {
            id: v1(),
            desc1: 'Низкая вариативность сообщения',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Высокая вариативность сообщения'
        },
        {
            id: v1(),
            desc1: 'Высокая изнашиваемость',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Низкая изнашиваемость'
        },
        {
            id: v1(),
            desc1: 'Длинные рекламные блоки',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Короткие рекламные блоки'
        },
    ],
    ['tableId3']: [
        {
            id: v1(),
            desc1: 'Малая активность категории (клаттер)',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Большая активность в категории (клаттер)'
        },
        {
            id: v1(),
            desc1: 'Благоприятное редакторское освещение',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Нейтральное редакторское освещение'
        },
        {
            id: v1(),
            desc1: 'Высокий уровень внимания аудитории',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Низкий уровень внимания аудитории'
        },
        {
            id: v1(),
            desc1: 'Протяженный график размещений',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Пульсирующий график размещений'
        },
        {
            id: v1(),
            desc1: 'Задействовано несколько медианосителей',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Задейстовано большое число медианосителей'
        },
        {
            id: v1(),
            desc1: 'Медиа с высокочастотным охватом',
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            desc2: 'Медиа с низкочастотным охватом'
        },
    ]
}
export const tableReducer = (state: TableStateType = initialState, action: ACTypes): TableStateType => {
    switch (action.type) {

        case "UPDATE-FIRST-CELL":
            return {...state,
                [action.tableId]: state[action.tableId].map(m => m.id === action.rowId ? {
                    ...m,
                    param1: '-2',
                    param2: '',
                    param3: '',
                    param4: ''
                } : m)
            }
        case "UPDATE-SECOND-CELL":
            return {...state,
                [action.tableId]: state[action.tableId].map(m => m.id === action.rowId ? {
                    ...m,
                    param1: '',
                    param2: '-1',
                    param3: '',
                    param4: ''
                } : m)
            }
        case "UPDATE-THIRD-CELL":
            return {...state,
                [action.tableId]: state[action.tableId].map(m => m.id === action.rowId ? {
                    ...m,
                    param1: '',
                    param2: '',
                    param3: '1',
                    param4: ''
                } : m)
            }
        case "UPDATE-FOURTH-CELL":
            return {
                ...state,
                [action.tableId]: state[action.tableId].map(m => m.id === action.rowId ? {
                    ...m,
                    param1: '',
                    param2: '',
                    param3: '',
                    param4: '2'
                } : m)
            }
        default:
            return state
    }
}


//ac

export const update1CellAC = (tableId: string, rowId: string) => ({
    type: 'UPDATE-FIRST-CELL',
    tableId,
    rowId
} as const)
export const update2CellAC = (tableId: string, rowId: string) => ({
    type: 'UPDATE-SECOND-CELL',
    tableId,
    rowId
} as const)
export const update3CellAC = (tableId: string, rowId: string) => ({
    type: 'UPDATE-THIRD-CELL',
    tableId,
    rowId
} as const)
export const update4CellAC = (tableId: string, rowId: string) => ({
    type: 'UPDATE-FOURTH-CELL',
    tableId,
    rowId
} as const)


export type TableStateType = {
    [key: string]: Array<RowType>
}

type ACTypes =
    | ReturnType<typeof update1CellAC>
    | ReturnType<typeof update2CellAC>
    | ReturnType<typeof update3CellAC>
    | ReturnType<typeof update4CellAC>