import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import {RowType} from "../Bll/store";
import s from './RowTable.module.css'
import {TableBody} from "@mui/material";

type TableRowItemPropsType = {
    row: RowType
    changeCellValue1: () => void
    changeCellValue2: () => void
    changeCellValue3: () => void
    changeCellValue4: () => void

}

export const RowTable = ({
                             row,
                             changeCellValue1,
                             changeCellValue2,
                             changeCellValue3,
                             changeCellValue4
                         }: TableRowItemPropsType) => {

    const checkedCell = {
        border: '1px solid grey',
        background: '#609eec',
        color: 'white',
        fontWeight: '900',
        fontSize: '30px',
        alignItems: 'center',
        verticalAlign: 'center',
        height: '30px',
        width: '30px'
    }
    const cellStyle1 = row.param1 === '' ? {
        border: '1px solid grey', height: '30px',
        width: '30px'
    } : checkedCell
    const cellStyle2 = row.param2 === '' ? {
        border: '1px solid grey', height: '30px',
        width: '30px'
    } : checkedCell
    const cellStyle3 = row.param3 === '' ? {
        border: '1px solid grey', height: '30px',
        width: '30px'
    } : checkedCell
    const cellStyle4 = row.param4 === '' ? {
        border: '1px solid grey', height: '30px',
        width: '30px'
    } : checkedCell


    return (

            <TableRow>
            <TableCell >{row.desc1}</TableCell>
            <TableCell align="center" sx={cellStyle1}>
                <p onClick={changeCellValue1} className={s.cell}>
                    {row.param1 ? row.param1 : '_'}
                </p>
            </TableCell>
            <TableCell align="center" sx={cellStyle2}>
                <p onClick={changeCellValue2} className={s.cell}>
                    {row.param2 ? row.param2 : '_'}
                </p>
            </TableCell>
            <TableCell align="center" sx={cellStyle3}>
                <p onClick={changeCellValue3} className={s.cell}>
                    {row.param3 ? row.param3 : '_'}
                </p>
            </TableCell>
            <TableCell align="center" sx={cellStyle4}>
                <p onClick={changeCellValue4} className={s.cell}>
                    {row.param4 ? row.param4 : '_'}
                </p>
            </TableCell>
            <TableCell align="right">{row.desc2}</TableCell>
        </TableRow>

    )
}