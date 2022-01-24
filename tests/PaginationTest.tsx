import * as React from "react";
import {ChangeEvent, useEffect, useState} from "react";
import {
    addAlertAction,
    addPageSetAction,
    AlertList,
    dismissContextAlert,
    pagedDataSelector,
    PagerDuck,
    SortableTableField,
    sortableTableSelector,
    SorterProps,
    tableAddedAction
} from "../src/ducks";
import {useDispatch, useSelector} from "react-redux";
import {Input, LoadingProgressBar, ToggleButton} from "../src/components";
import {BootstrapColor, ErrorBoundary, SortableTable, SpinnerButton} from "../src";
import numeral from "numeral";
import {languages} from './languages'


interface TableDataRow {
    id: number,
    value: number,
    color: string,
    bgColor: string,
}

export type TableDataRowField = keyof TableDataRow;

export interface TestSorterProps extends SorterProps {
    field: TableDataRowField,
}

const testTableSorter = ({field, ascending}: TestSorterProps) => (a: TableDataRow, b: TableDataRow) => {
    return (
        a[field] === b[field]
            ? (a.id - b.id)
            : ((a[field] ?? '') === (b[field] ?? '') ? 0 : ((a[field] ?? '') > (b[field] ?? '') ? 1 : -1))
    ) * (ascending ? 1 : -1);
}

const colors: BootstrapColor[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark',];

const buildDataSet = (): TableDataRow[] => {
    return new Array(1000)
        .fill(null)
        .map((el, index) => ({
            id: index,
            value: Math.random() * 100,
            color: colors[index % 8],
            bgColor: colors[Math.floor(Math.random() * 8)]
        }))
}
const pagerKey = 'test-pagination';

const ValueTitle:React.FC = () => {
    const now = new Date();
    return (
        <span>Value @ {now.toLocaleTimeString()}</span>
    )
}

const tableFields: SortableTableField[] = [
    {field: 'id', title: 'ID', sortable: true},
    {field: 'color', title: 'Color', sortable: true, className: (row) => `text-${colors[Math.floor(row.id % 8)]}`},
    {field: 'bgColor', title: 'Background Color', sortable: true, render: (row) => <span>table-{row.bgColor}</span>},
    {field: 'value', title: (<ValueTitle />), sortable: true, className: 'right', render: (row) => numeral(row.value).format('0,0.0000')},
];

const rowColor = (row: TableDataRow) => `table-${row.bgColor}`;

const TFoot = ({value}: { value: number }) => (
    <tfoot>
    <tr>
        <th>Total</th>
        <td colSpan={2} />
        <th className="right">{numeral(value).format('0,0.0000')}</th>
    </tr>
    </tfoot>
)

const PaginationTest: React.FC = () => {
    let rebuildTimer: number;
    const dispatch = useDispatch();
    const [filterValue, setFilterValue] = useState(100);
    const [filter, setFilter] = useState(filterValue);
    const [tableData, setTableData] = useState([] as TableDataRow[]);
    const [loading, setLoading] = useState(false);
    const [filterTimer, setFilterTimer] = useState(0);
    const [toggleCheck, setToggleCheck] = useState(true);


    useEffect(() => {
        const data = buildDataSet();
        setTableData(data);
        dispatch(addPageSetAction({key: pagerKey, rowsPerPage: 25, current: 1}))
        dispatch(tableAddedAction({key: pagerKey, field: 'id', ascending: true}))
        return () => {
            window.clearTimeout(rebuildTimer);
            window.clearTimeout(filterTimer);
        }
    }, [])

    const sort = useSelector(sortableTableSelector(pagerKey));
    const filteredData = tableData
        .sort(testTableSorter(sort as TestSorterProps))
        .filter(row => row.value <= filter);
    const pageData = useSelector(pagedDataSelector(pagerKey, filteredData));
    const total = pageData.reduce((acc, row) => acc + row.value, 0);

    const rebuildData = () => {
        window.clearTimeout(rebuildTimer);
        setLoading(true);
        rebuildTimer = window.setTimeout(() => {
            const data = buildDataSet();
            setTableData(data);
            setLoading(false);
        }, 2500);
    }

    const [language, setLanguage] = useState('');

    const tableClickHandler = (row: TableDataRow) => dispatch(addAlertAction({
        message: JSON.stringify(row),
        context: `context-${row.id}`,
        color: colors[row.id % 8]
    }));

    useEffect(() => {
        if (tableData.length && filteredData.length < 10) {
            dispatch(addAlertAction({
                message: `Less than 10 rows returned`,
                context: 'filteredData',
                canDismiss: false
            }));
        } else if (filteredData.length > 10) {
            dispatch(dismissContextAlert('filteredData'));
        }
    }, [filteredData.length]);

    const filterChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        console.log('filterChangeHandler()', ev.target.value);
        setFilterValue(Number(ev.target.value));

        window.clearTimeout(filterTimer);
        const t = window.setTimeout(() => {
            setFilter(Number(ev.target.value));
        }, 450);
        setFilterTimer(t);
    }

    const tfoot = (<TFoot value={total} />);

    const onClickToggle = () => {
        console.log('onClickToggle', toggleCheck, !toggleCheck)
        setToggleCheck(!toggleCheck);
    }

    return (
        <div>
            <div className="row g-3">
                <div className="col-auto">
                    <ErrorBoundary>
                        <PagerDuck pageKey={pagerKey} dataLength={filteredData.length}
                                   filtered={filteredData.length < tableData.length}/>
                    </ErrorBoundary>
                </div>
                <div className="col-auto"><label className="form-label">Filter Values:</label></div>
                <div className="col-auto">
                    <Input type="number" className="from-control form-control-sm"
                           value={filterValue} onChange={filterChangeHandler} min={0} max={100}/>
                    <small>filter = {filter}</small>
                </div>
                <div className="col-auto">
                    <SpinnerButton spinning={loading} onClick={rebuildData} size="sm" spinnerAfter color="outline-success">
                        Reload Data
                    </SpinnerButton>
                </div>
                <div className="col-auto">
                    <Input type="text" id="default" list="languages" fuzzyList value={language}
                           onChange={(ev) => setLanguage(ev.target.value)}/>
                    <datalist id="languages">
                        {languages.map((val, index) => (<option key={index} value={val}/>))}
                    </datalist>
                </div>
                <div className="col-auto">
                    <ToggleButton id={'test-toggle'} size="sm" color="success" checked={toggleCheck}
                                  onClick={onClickToggle}>Toggle this muthafucka!</ToggleButton>
                </div>
            </div>
            <AlertList/>
            {loading && <LoadingProgressBar animated/>}
            <SortableTable tableKey={pagerKey} keyField={"id"} size="xs" fields={tableFields} data={pageData}
                           rowClassName={rowColor} onSelectRow={tableClickHandler} tfoot={tfoot}/>
        </div>
    )
}

export default PaginationTest;
