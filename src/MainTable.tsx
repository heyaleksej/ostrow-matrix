import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {SubTable} from "./Tables/SubTable";
import {RowType} from "./Bll/store";



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
    cells: RowType[]
    changeCellValue1: (id: string, newValue: string | null, tableId: string) => void
    changeCellValue2: (id: string, newValue: string | null, tableId: string) => void
    changeCellValue3: (id: string, newValue: string | null, tableId: string) => void
    changeCellValue4: (id: string, newValue: string | null, tableId: string) => void
}


export const MainTable = ({tableId, changeCellValue1, changeCellValue2, changeCellValue3, changeCellValue4, cells}: propsType) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 700}} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell>Достаточна невысокая частота</TableCell>
                        <TableCell align="center" colSpan={4}>Поправка частоты</TableCell>
                        <TableCell align="right"> Нужна высокая частота</TableCell>
                    </TableRow>
                </TableHead>
                {cells.map((m,index) => {

                    const onCellChangeHandler1 = (newValue: string | null) => {
                        changeCellValue1(m.id, newValue, tableId);
                    }
                    const onCellChangeHandler2 = (newValue: string | null) => {
                        changeCellValue2(m.id, newValue, tableId);
                    }
                    const onCellChangeHandler3 = (newValue: string | null) => {
                        changeCellValue3(m.id, newValue, tableId);
                    }
                    const onCellChangeHandler4 = (newValue: string | null) => {
                        changeCellValue4(m.id, newValue, tableId);
                    }
                        return <SubTable key={m.id}
                                         row={cells[index]}
                                         changeCellValue1={onCellChangeHandler1}
                                         changeCellValue2={onCellChangeHandler2}
                                         changeCellValue3={onCellChangeHandler3}
                                         changeCellValue4={onCellChangeHandler4}/>

                    }
                )
                }

                    </Table>
                    </TableContainer>
                    );
                }
