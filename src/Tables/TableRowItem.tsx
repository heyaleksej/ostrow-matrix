import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import {RowType} from "../Bll/store";
import {ChangeEvent, useState} from "react";
import {EditableSpan} from "../EditableSpan";


type TableRowItemPropsType = {
    tableId: string
    row: RowType
    changeCell: (rowId: string, newValue: number | null, tableId: string) => void
}

type ValueType = -2 | -1 | 1| 2


export const TableRowItem = (props: TableRowItemPropsType) => {


    // const [value, setValue] = useState<ValueType>(-1)
    // const [value2, setValue2] = useState('')
    // const [value3, setValue3] = useState('')
    // const [value4, setValue4] = useState('')
    //
    // // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // //     setValue(e.currentTarget.value)
    // // }
    // const onChangeHandler2 = (e: ChangeEvent<HTMLInputElement>) => setValue2(e.currentTarget.value)
    // const onChangeHandler3 = (e: ChangeEvent<HTMLInputElement>) => setValue3(e.currentTarget.value)
    // const onChangeHandler4 = (e: ChangeEvent<HTMLInputElement>) => setValue4(e.currentTarget.value)


    return (
        <>
            {/*{props.row.map((row) => {*/}

            {/*    const onCellChangeHandler = (newValue: number|null) => {*/}
            {/*        props.changeCell(row.id, newValue, props.tableId);*/}
            {/*    }*/}
            {/*    return (*/}
            {/*    // <TableRow key={row.id}>*/}
            {/*    // <TableCell>{row.desc1}</TableCell>*/}
            {/*    // <TableCell align="right">*/}
            {/*    // <EditableSpan value={row.param1} onChange={onCellChangeHandler} />*/}
            {/*    // </TableCell>*/}
            {/*    // <TableCell align="right"><input onChange={} type='number' value={value2}*/}
            {/*    // style={{width: '40px'}}/></TableCell>*/}
            {/*    // <TableCell align="right"><input onChange={onChangeHandler3} type='number' value={value3}*/}
            {/*    // style={{width: '40px'}}/></TableCell>*/}
            {/*    // <TableCell align="right"><input onChange={onChangeHandler4} type='number' value={value4}*/}
            {/*    // style={{width: '40px'}}/></TableCell>*/}
            {/*    // <TableCell align="right">{row.desc2}</TableCell>*/}

            {/*    // </TableRow>*/}
            {/*    // ) }  )}*/}

        </>
    )
}