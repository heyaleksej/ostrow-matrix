import React from 'react';
import './App.module.css';
import {MainTable} from "./Tables/MainTable";
import {AppRootStateType, RowType} from "./Bll/store";
import {Counter} from "./Counter";
import {useDispatch, useSelector} from 'react-redux';
import {update1CellAC, update2CellAC, update3CellAC, update4CellAC} from './Bll/table-reducer';

export type TableStateType = {
    [key: string]: Array<RowType>
}

export type TablesType = {
    id: string,
    title: string
}


function App() {
    const dispatch = useDispatch()

    const cells = useSelector<AppRootStateType, TableStateType>(state => state.table)

    let tables = [
        {id: 'tableId1', title: "Рыночные факторы"},
        {id: 'tableId2', title: "Факторы рекламного креатива"},
        {id: 'tableId3', title: "Медиафакторы"}
    ]


    const changeCellValue1 = (id: string, tableId: string) => dispatch(update1CellAC(tableId, id))
    const changeCellValue2 = (id: string, tableId: string) => dispatch(update2CellAC(tableId, id))
    const changeCellValue3 = (id: string, tableId: string) => dispatch(update3CellAC(tableId, id))
    const changeCellValue4 = (id: string, tableId: string) => dispatch(update4CellAC(tableId, id))


    return (
        <>
            {tables.map(t => <MainTable
                    key={t.id}
                    title={t.title}
                    tableId={t.id}
                    changeCellValue1={changeCellValue1}
                    changeCellValue2={changeCellValue2}
                    changeCellValue3={changeCellValue3}
                    changeCellValue4={changeCellValue4}
                    cells={cells[t.id]}
                />
            )}

            <Counter cells={cells} tables={tables}/>
        </>

    );
}

export default App;
