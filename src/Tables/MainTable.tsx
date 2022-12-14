import * as React from 'react';
import {RowType} from "../Bll/store";
import {RowTable} from "./RowTable";
import {Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import {memo} from "react";


type propsType = {
    tableId: string
    title: string
    cells: RowType[]
    changeCellValue1: (id: string, tableId: string) => void
    changeCellValue2: (id: string, tableId: string) => void
    changeCellValue3: (id: string, tableId: string) => void
    changeCellValue4: (id: string, tableId: string) => void
}


export const MainTable = memo(({title, tableId, changeCellValue1, changeCellValue2, changeCellValue3, changeCellValue4, cells}: propsType) => {
    const subTitleStyle = {
        ['@media (max-width:599px)']: {padding: '5px',lineHeight:'1'},
        ['@media (min-width:600px) and (max-width: 930px)']: {padding: '10px', fontWeight:'300', fontSize: '18px'}
    }

    const tablesBlockStyle = {width: "65%", padding: '40px 40px 40px 75px', overflowX:'inherit',
        ['@media (max-width:599px)']: {padding: '20px 0 0 0', width: "auto"},
        ['@media (min-width:600px) and (max-width: 930px)']: {padding: '40px', width: "auto"}
    }

    const singleTableStyle = {
        background: 'white',
        boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 28px 15px, ' +
            'rgba(0, 0, 0, 0.12) 0px -12px 30px, ' +
            'rgba(0, 0, 0, 0.12) 0px 4px 6px,' +
            'rgba(0, 0, 0, 0.17) 0px 12px 13px, ' +
            'rgba(0, 0, 0, 0.09) 0px -3px 5px'
    }

    return (
        <TableContainer sx={tablesBlockStyle}>
            <Table sx={singleTableStyle}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontWeight: '300', fontSize: '24px'}} align="center" colSpan={6}>
                            {title}
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{borderBottom: '2px solid grey'}}>
                        <TableCell sx={subTitleStyle} colSpan={1} align="center">???????????????????? ?????????????????? ??????????????</TableCell>
                        <TableCell sx={subTitleStyle} colSpan={4} align="center">???????????????? ??????????????</TableCell>
                        <TableCell sx={subTitleStyle} colSpan={1} align="center">?????????? ?????????????? ??????????????</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cells.map((m, index) => {

                            const onCellChangeHandler1 = () => changeCellValue1(m.id, tableId);
                            const onCellChangeHandler2 = () => changeCellValue2(m.id, tableId);
                            const onCellChangeHandler3 = () => changeCellValue3(m.id, tableId);
                            const onCellChangeHandler4 = () => changeCellValue4(m.id, tableId);
                            return <RowTable
                                key={m.id}
                                row={cells[index]}
                                changeCellValue1={onCellChangeHandler1}
                                changeCellValue2={onCellChangeHandler2}
                                changeCellValue3={onCellChangeHandler3}
                                changeCellValue4={onCellChangeHandler4}/>
                        }
                    )
                    }</TableBody>
            </Table>
        </TableContainer>
    );
})
