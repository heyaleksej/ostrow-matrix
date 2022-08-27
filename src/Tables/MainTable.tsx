import * as React from 'react';
import {RowType} from "../Bll/store";
import {RowTable} from "./RowTable";
import {Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import TableCell from "@mui/material/TableCell";


type propsType = {
    tableId: string
    title: string
    cells: RowType[]
    changeCellValue1: (id: string, tableId: string) => void
    changeCellValue2: (id: string, tableId: string) => void
    changeCellValue3: (id: string, tableId: string) => void
    changeCellValue4: (id: string, tableId: string) => void
}


export const MainTable = ({
                              title,
                              tableId,
                              changeCellValue1,
                              changeCellValue2,
                              changeCellValue3,
                              changeCellValue4,
                              cells
                          }: propsType) => {


    return (
        <TableContainer
            sx={{
                maxWidth: '913px',
                padding: '40px 40px 40px 75px',
                ['@media (max-width:911px)']: {
                    padding: 0, overflowX: "inherit"
                }
            }}>
            <Table sx={{
                background: 'white',
                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 28px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
            }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontWeight: '300', fontSize: '24px'}} align="center" colSpan={6}>
                            {title}
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{borderBottom: '2px solid grey'}}>
                        <TableCell colSpan={1} align="center">Достаточна невысокая частота</TableCell>
                        <TableCell colSpan={4} align="center">Поправка частоты</TableCell>
                        <TableCell colSpan={1} align="center">Нужна высокая частота</TableCell>
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
}
