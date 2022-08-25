import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import TableBody from "@mui/material/TableBody";
import { RowType } from "../Bll/store";
import {EditableSpan} from "../EditableSpan";

type TableRowItemPropsType = {
    row: RowType
    changeCellValue1: (newValue: string | null) => void
    changeCellValue2: (newValue: string | null) => void
    changeCellValue3: (newValue: string | null) => void
    changeCellValue4: (newValue: string | null) => void

}

export const SubTable = ({row,changeCellValue1, changeCellValue2, changeCellValue3, changeCellValue4}: TableRowItemPropsType) => {

    return (
        <>

            <TableBody>
                <TableRow key={row.id}>
                    <TableCell>{row.desc1}</TableCell>
                    <TableCell align="right">
                        <EditableSpan value={row.param1} onChange={changeCellValue1} />
                    </TableCell>
                    <TableCell align="right">
                        <EditableSpan value={row.param2} onChange={changeCellValue2} />
                    </TableCell>
                    <TableCell align="right">
                        <EditableSpan value={row.param3} onChange={changeCellValue3} />
                    </TableCell><
                    TableCell align="right">
                        <EditableSpan value={row.param4} onChange={changeCellValue4} />
                    </TableCell>
                    {/*<TableCell align="right"><input onChange={onCellChangeHandler} type='number' value={value2}*/}
                    {/*                                style={{width: '40px'}}/></TableCell>*/}
                    {/*<TableCell align="right"><input onChange={onCellChangeHandler} type='number' value={value3}*/}
                    {/*                                style={{width: '40px'}}/></TableCell>*/}
                    {/*<TableCell align="right"><input onChange={onCellChangeHandler} type='number' value={value4}*/}
                    {/*                                style={{width: '40px'}}/></TableCell>*/}
                    <TableCell align="right">{row.desc2}</TableCell>

                </TableRow>            </TableBody>
        </>
    )
}