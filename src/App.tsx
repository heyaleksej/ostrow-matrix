import React, {useState} from 'react';
import './App.css';
import {MainTable} from "./MainTable";
import {v1} from "uuid";
import {RowType} from "./Bll/store";
import {Paper} from '@mui/material';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function App() {

    type TableStateType = {
        [key: string]: Array<RowType>
    }

    let tableId1 = v1();
    let tableId2 = v1();
    let tableId3 = v1();

    type TablesType = {
        id: string,
        title: string
    }

    let [tables, setTables] = useState<Array<TablesType>>([
        {id: tableId1, title: "Рыночные факторы"},
        {id: tableId2, title: "Факторы рекламного креатива"},
        {id: tableId3, title: "Медиафакторы"}
    ])

    let [cells, setCells] = useState<TableStateType>({
        [tableId1]: [
            {id: v1(), desc1: 'Известный бренд', param1: '', param2: '', param3: '', param4: '', desc2: 'Новый бренд'},
            {id: v1(), desc1: 'Большая рыночная доля бренда', param1: '', param2: '', param3: '', param4: '', desc2: 'Небольшая рыночная доля бренда'},
            {id: v1(), desc1: 'Высокая лояльность к бренду', param1: '', param2: '', param3: '', param4: '', desc2: 'Низкая лояльность к бренду'
            },
            {
                id: v1(),
                desc1: 'Длинный покупательский цикл',
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                desc2: 'Короткий покупательский цикл'
            },
            {
                id: v1(),
                desc1: 'Нечастое потребление',
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                desc2: 'Частое потребление'
            },
            {
                id: v1(),
                desc1: 'Маленькая доля голоса',
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                desc2: 'Большая доля голоса'
            },
            {
                id: v1(),
                desc1: 'ЦА – не пожилые люди и не дети',
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                desc2: 'ЦА – пожилые люди и дети'
            },
        ],
        [tableId2]: [
            {
                id: v1(),
                desc1: 'Несложное сообщение',
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                desc2: 'Сложное сообщение'
            },
            {
                id: v1(),
                desc1: 'Уникальное сообщение',
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                desc2: 'Неуникальное сообщение'
            },
            {id: v1(), desc1: 'Текущая кампания', param1: '', param2: '', param3: '', param4: '', desc2: 'Новая кампания'},
            {
                id: v1(),
                desc1: 'Продуктовое сообщение',
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                desc2: 'Имиджевое сообщение'
            },
            {
                id: v1(),
                desc1: 'Низкая вариативность сообщения',
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                desc2: 'Высокая вариативность сообщения'
            },
            {
                id: v1(),
                desc1: 'Высокая изнашиваемость',
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                desc2: 'Низкая изнашиваемость'
            },
            {
                id: v1(),
                desc1: 'Длинные рекламные блоки',
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                desc2: 'Короткие рекламные блоки'
            },
        ],
        [tableId3]: [
            {
                id: v1(),
                desc1: 'Малая активность категории (клаттер)',
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                desc2: 'Большая активность в категории (клаттер)'
            },
            {
                id: v1(),
                desc1: 'Благоприятное редакторское освещение',
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                desc2: 'Нейтральное редакторское освещение'
            },
            {
                id: v1(),
                desc1: 'Высокий уровень внимания аудитории',
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                desc2: 'Низкий уровень внимания аудитории'
            },
            {
                id: v1(),
                desc1: 'Протяженный график размещений',
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                desc2: 'Пульсирующий график размещений'
            },
            {
                id: v1(),
                desc1: 'Задействовано несколько медианосителей',
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                desc2: 'Задейстовано большое число медианосителей'
            },
            {
                id: v1(),
                desc1: 'Медиа с высокочастотным охватом',
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                desc2: 'Медиа с низкочастотным охватом'
            },
        ]
    });

    function changeCellValue1(id: string, newValue: string | null, tableId: string) {
        let cell = cells[tableId].find(t => t.id === id);
        //изменим таску, если она нашлась
        if (cell) {
            cell.param1 = '-2';
            cell.param2 = null;
            cell.param3 = null;
            cell.param4 = null;
            // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
            debugger
            setCells({...cells});
        }
    }
    function changeCellValue2(id: string, newValue: string | null, tableId: string) {
        let cell = cells[tableId].find(t => t.id === id);
        if (cell) {
            cell.param2 = '-1';
            cell.param1 = null;
            cell.param3 = null;
            cell.param4 = null;
            // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой

            setCells({...cells});
        }
    }

    function changeCellValue3(id: string, newValue: string | null, tableId: string) {
        let cell = cells[tableId].find(t => t.id === id);
        if (cell) {
            cell.param3 = '1';
            cell.param1 = ''
            cell.param2 = '';
            cell.param4 = '';
            setCells({...cells});
        }
    }

    function changeCellValue4(id: string, newValue: string | null, tableId: string) {
        let cell = cells[tableId].find(t => t.id === id);
        if (cell) {
            cell.param4 = '2';
            cell.param1 = null
            cell.param2=  null
            cell.param3=  null
            // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
            setCells({...cells});
        }
    }

    return (

        <div className="App">
            {tables.map(t => {
                return <Paper key={t.id}
                >
                    <TableRow>
                        <TableCell align="center">
                            {t.title}
                        </TableCell>
                    </TableRow>
                    <MainTable
                        key={t.id}
                        tableId={t.id}
                        changeCellValue1={changeCellValue1}
                        changeCellValue2={changeCellValue2}
                        changeCellValue3={changeCellValue3}
                        changeCellValue4={changeCellValue4}
                        cells={cells[t.id]}
                    />
                </Paper>
            })}
        </div>
    );
}

export default App;
