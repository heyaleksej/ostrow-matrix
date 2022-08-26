import * as React from "react";
import {useCallback} from "react";
import {TableStateType, TablesType} from "./App";
import s from './Counter.module.css'
import {Button} from "@mui/material";
import logo from "./logo/logo-transparent-2.gif";
import { ButtonX } from "./assest/ButtonX";

type propsType = {
    cells: TableStateType
    tables: TablesType[]
}


export const Counter = ({cells}: propsType) => {


    const sum1table = useCallback(() => {
        let i = 0;
        let sum1 =0
        let sum2 =0
        let sum3 =0
        let sum4 =0
        while (i < cells['tableId1'].length) {
            // @ts-ignore
            sum1 += +cells['tableId1'][i].param1
            // @ts-ignore
            sum2 += +cells['tableId1'][i].param2
            // @ts-ignore
            sum3 += +cells['tableId1'][i].param3
            // @ts-ignore
            sum4 += +cells['tableId1'][i].param4
            i++;
        }
        return sum1 + sum2 + sum3 + sum4

    }, [cells])

    const sum2table = useCallback(() => {
        let i = 0;
        let sum1 =0
        let sum2 =0
        let sum3 =0
        let sum4 =0
        while (i < cells['tableId2'].length) {
            // @ts-ignore
            sum1 += +cells['tableId2'][i].param1
            // @ts-ignore
            sum2 += +cells['tableId2'][i].param2
            // @ts-ignore
            sum3 += +cells['tableId2'][i].param3
            // @ts-ignore
            sum4 += +cells['tableId2'][i].param4
            i++;
        }
        return sum1 + sum2 + sum3 + sum4

    }, [cells])

    const sum3table = useCallback(() => {
        let i = 0;
        let sum1 =0
        let sum2 =0
        let sum3 =0
        let sum4 =0
        while (i < cells['tableId3'].length) {
            // @ts-ignore
            sum1 += +cells['tableId3'][i].param1
            // @ts-ignore
            sum2 += +cells['tableId3'][i].param2
            // @ts-ignore
            sum3 += +cells['tableId3'][i].param3
            // @ts-ignore
            sum4 += +cells['tableId3'][i].param4
            i++;
        }
        return sum1 + sum2 + sum3 + sum4

    }, [cells])


  let result = 3 + sum1table() + sum2table() + sum3table()


    return (
        <div className={s.wrapper}>
            <img className={s.logo} src={logo}/>
            <div className={s.result}>Итоговая частота
                для коммуникации с одним пользователем{' '}<div className={s.resultNum}>{result}</div></div>
            <ButtonX name={'Cбросить'} onClick={()=>{window.location.reload()}}/>
        </div>



    )
}