import { useState } from "react";
import { v1 } from "uuid";
import {RowType} from "./store";

// let tableId1 = v1();
// let tableId2 = v1();
// let tableId3 = v1();
//
// type TablesType = {
//     id: string,
//     title: string
// }
//
// let [tables, setTables] = useState<Array<TablesType>>([
//     {id: tableId1, title: "What to learn"},
//     {id: tableId2, title: "What to buy"},
//     {id: tableId3, title: "What to buy"}
// ])
//
// let [tasks, setTasks] = useState<TasksStateType>({
//     [todolistId1]: [
//         {id: v1(), title: "HTML&CSS", isDone: true},
//         {id: v1(), title: "JS", isDone: true}
//     ],
//     [todolistId2]: [
//         {id: v1(), title: "Milk", isDone: true},
//         {id: v1(), title: "React Book", isDone: true}
//     ]
// });
//
// const initialState: Array<RowType>  = [
//     {id:v1(), desc1:'Известный бренд',param1:0, param2:0,param3:0,param4:0, desc2:'Новый бренд' },
//     {id:v1(), desc1:'Большая рыночная доля бренда',param1:0, param2:0,param3:0,param4:0, desc2:'Небольшая рыночная доля бренда' },
//     {id:v1(), desc1:'Высокая лояльность к бренду',param1:0, param2:0,param3:0,param4:0, desc2:'Низкая лояльность к бренду' },
//     {id:v1(), desc1:'Длинный покупательский цикл',param1:0, param2:0,param3:0,param4:0, desc2:'Короткий покупательский цикл' },
//     {id:v1(), desc1:'Нечастое потребление',param1:0, param2:0,param3:0,param4:0, desc2:'Частое потребление' },
//     {id:v1(), desc1:'Маленькая доля голоса',param1:0, param2:0,param3:0,param4:0, desc2:'Большая доля голоса' },
//     {id:v1(), desc1:'ЦА – не пожилые люди и не дети',param1:0, param2:0,param3:0,param4:0, desc2:'ЦА – пожилые люди и дети' },
// ]
//
// export type TableStateType = {
//     [key: string]: Array<RowType>
// }
//
//
//
export const tableReducer = (state: any , action:ACTypes ):any =>{ switch (action.type) {

    case "UPDATE-CELL":
        return {

        }
    default:
        return state
}
}


//ac

export const updateCellAC = (tableId: string, rowId: string, value: number) => ({type: 'UPDATE-CELL', tableId, rowId, value} as const)

type ACTypes = ReturnType<typeof updateCellAC>