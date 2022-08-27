import * as React from "react";
import {TableStateType, TablesType} from "./App";
import s from './Counter.module.css'
import logo from "./assest/logo/logo-transparent-2.gif";
import {ButtonX} from "./components/ButtonX";

type propsType = {
    cells: TableStateType
    tables: TablesType[]
}


export const Counter = ({tables, cells}: propsType) => {

    const sumTableCells = (tableId: string) => {
        let i = 0;
        let sum1 = 0
        let sum2 = 0
        let sum3 = 0
        let sum4 = 0
        while (i < cells[tableId].length) {
            // @ts-ignore
            sum1 += +cells[tableId][i].param1
            // @ts-ignore
            sum2 += +cells[tableId][i].param2
            // @ts-ignore
            sum3 += +cells[tableId][i].param3
            // @ts-ignore
            sum4 += +cells[tableId][i].param4
            i++;
        }
        return sum1 + sum2 + sum3 + sum4

    }

    const sum1table = () => sumTableCells(tables[0].id)
    const sum2table = () => sumTableCells(tables[1].id)
    const sum3table = () => sumTableCells(tables[2].id)

    const result = 3 + sum1table() + sum2table() + sum3table()

    return (
        <div className={s.wrapper}>
            <img className={s.logo} src={logo} alt={''}/>
            <div className={s.result}>Итоговая частота
                для коммуникации с одним пользователем
                <div className={s.resultNum}>{result}</div>
            </div>
            <ButtonX name={'Сбросить'} onClick={() => {
                window.location.reload()
            }}/>
        </div>


    )
}