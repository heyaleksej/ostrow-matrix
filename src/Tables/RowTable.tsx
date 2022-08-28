import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import {RowType} from "../Bll/store";
import s from './RowTable.module.css'
import {memo} from "react";

type TableRowItemPropsType = {
    row: RowType
    changeCellValue1: () => void
    changeCellValue2: () => void
    changeCellValue3: () => void
    changeCellValue4: () => void

}

export const RowTable = memo(({
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
        fontSize: '20px',
        alignItems: 'center',
        verticalAlign: 'center',
        height: '30px',
        width: '45px',
        padding: '10px',
        ['@media (min-width:600px) and (max-width: 930px)']: {
            padding: '9px',
            width: '15px',
            height: '40px',
            fontSize: '25px',
            fontWeight: '600',
            lineHeight: '1'
        },
        ['@media (max-width:599px)']: {
            padding: '9px',
            height: '40px', fontSize: '21px',

        },
        ['@media (max-width:280px)']: {
            padding: '2px',
            height: '40px',

        },



    }
    const baseCell = {
        border: '1px solid grey', minHeight: '30px', width: '45px', padding: '10px',
        ['@media (min-width:600px) and (max-width: 930px)']: {padding: '10px', width: '20px'},
        ['@media (max-width:599px)']: {padding: '9px', height: '40px'},
        ['@media (max-width:280px)']: {padding: '2px'}
    }
    const cellStyle1 = row.param1 === '' ? baseCell : checkedCell
    const cellStyle2 = row.param2 === '' ? baseCell : checkedCell
    const cellStyle3 = row.param3 === '' ? baseCell : checkedCell
    const cellStyle4 = row.param4 === '' ? baseCell : checkedCell
    const descStyle = {
        padding: '0 20px 0 20px',
        ['@media (min-width:600px) and (max-width: 930px)']: {padding: '10px', fontWeight: '400', height:'45px'},
        ['@media (max-width:599px)']: {padding: '3px', fontWeight: '300', lineHeight: '1', fontSize: '0.78rem',},
        ['@media (max-width:280px)']: {padding: '2px', height: '40px', fontSize: '0.65rem'}
    }


    return (

        <TableRow>
            <TableCell sx={descStyle}>{row.desc1}</TableCell>
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
            <TableCell sx={descStyle} align="right">{row.desc2}</TableCell>
        </TableRow>

    )
})