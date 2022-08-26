import * as React from 'react';
import {RowType} from "./Bll/store";
import {RowTable} from "./Tables/RowTable";
import {Paper, Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import TableCell from "@mui/material/TableCell";


// function createRow(desc1: string, param1: string, param2: string, param3: string, param4: string, desc2: string) {
//     return { desc1, param1, param2, param3, param4, desc2 };
// }


// const rows1 = [
//     createRow('Известный бренд', 0, 0,0,0,'Новый бренд' ),
//     createRow('Большая рыночная доля бренда', 0, 0,0,0, 'Небольшая рыночная доля бренда'),
//     createRow('Высокая лояльность к бренду', 0, 0,0,0, 'Низкая лояльность к бренду'),
//     createRow('Длинный покупательский цикл', 2, 0, 0,0, 'Короткий покупательский цикл'),
//     createRow('Нечастое потребление', 2, 0, 0,0, 'Частое потребление'),
//     createRow('Маленькая доля голоса', 2, 0, 0,0, 'Большая доля голоса'),
//     createRow('ЦА – не пожилые люди и не дети', 2, 0, 0,0,'ЦА – пожилые люди и дети'),
// ];
//
// const rows2 = [
//     createRow('Несложное сообщение', 0, 0,0,0,'Сложное сообщение' ),
//     createRow('Уникальное сообщение', 0, 0,0,0, 'Неуникальное сообщение'),
//     createRow('Текущая кампания', 0, 0,0,0, 'Новая кампания'),
//     createRow('Продуктовое сообщение', 2, 0, 0,0, 'Имиджевое сообщение'),
//     createRow('Низкая вариативность сообщения', 2, 0, 0,0, 'Высокая вариативность сообщения'),
//     createRow('Высокая изнашиваемость', 2, 0, 0,0, 'Низкая изнашиваемость'),
//     createRow('Длинные рекламные блоки', 2, 0, 0,0,'Короткие рекламные блоки'),
// ];
//
// const rows3 = [
//     createRow('Малая активность категории (клаттер)', 0, 0,0,0,'Большая активность в категории (клаттер)' ),
//     createRow('Благоприятное редакторское освещение', 0, 0,0,0, 'Нейтральное редакторское освещение'),
//     createRow('Высокий уровень внимания аудитории', 0, 0,0,0, 'Низкий уровень внимания аудитории'),
//     createRow('Протяженный график размещений', 2, 0, 0,0, 'Пульсирующий график размещений'),
//     createRow('Задействовано несколько медианосителей', 2, 0, 0,0, 'Задейстовано большое число медианосителей'),
//     createRow('Медиа с высокочастотным охватом', 2, 0, 0,0, 'Медиа с низкочастотным охватом'),
// ];

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
        <TableContainer sx={{maxWidth: '900px', padding: '40px'}}>
            <Table sx={{background:'white', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 28px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontWeight:'300', fontSize:'24px'}} align="center" colSpan={6}>
                            {title}
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{borderBottom:'2px solid grey'}}>
                        <TableCell colSpan={1} >Достаточна невысокая частота</TableCell>
                        <TableCell colSpan={4} align="center">Поправка частоты</TableCell>
                        <TableCell colSpan={1} align="right">Нужна высокая частота</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cells.map((m, index) => {

                        const onCellChangeHandler1 = () => {
                            changeCellValue1(m.id, tableId);
                        }
                        const onCellChangeHandler2 = () => {
                            changeCellValue2(m.id, tableId);
                        }
                        const onCellChangeHandler3 = () => {
                            changeCellValue3(m.id, tableId);
                        }
                        const onCellChangeHandler4 = () => {
                            changeCellValue4(m.id, tableId);
                        }
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
