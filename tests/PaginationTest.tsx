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
import {Input, LoadingProgressBar} from "../src/components";
import {BootstrapColor, ErrorBoundary, SortableTable, SpinnerButton} from "../src";
import numeral from "numeral";


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

const tableFields: SortableTableField[] = [
    {field: 'id', title: 'ID', sortable: true},
    {field: 'value', title: 'Value', sortable: true},
    {field: 'color', title: 'Color', sortable: true, className: (row) => `text-${colors[Math.floor(row.id % 8)]}`},
    {field: 'bgColor', title: 'Background Color', sortable: true, render: (row) => <span>table-{row.bgColor}</span>},
];

const rowColor = (row: TableDataRow) => `table-${row.bgColor}`;

const TFoot = ({value}: { value: number }) => (
    <tfoot>
    <tr>
        <th>Total</th>
        <th>{numeral(value).format('0,0.000')}</th>
        <td colSpan={2} />
    </tr>
    </tfoot>
)

const PaginationTest: React.FC = () => {
    let timer: number;
    const dispatch = useDispatch();
    const [filter, setFilter] = useState(100);
    const [tableData, setTableData] = useState([] as TableDataRow[]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const data = buildDataSet();
        setTableData(data);
        dispatch(addPageSetAction({key: pagerKey, rowsPerPage: 25, current: 1}))
        dispatch(tableAddedAction({key: pagerKey, field: 'id', ascending: true}))
        return () => {
            window.clearTimeout(timer);
        }
    }, [])

    const sort = useSelector(sortableTableSelector(pagerKey));
    const filteredData = tableData
        .sort(testTableSorter(sort as TestSorterProps))
        .filter(row => row.value <= filter);
    const pageData = useSelector(pagedDataSelector(pagerKey, filteredData));
    const total = pageData.reduce((acc, row) => acc + row.value, 0);

    const rebuildData = () => {
        window.clearTimeout(timer);
        setLoading(true);
        timer = window.setTimeout(() => {
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
        setFilter(Number(ev.target.value));
    }

    const tfoot = (<TFoot value={total} />);

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
                           wait={250}
                           value={filter} onChange={filterChangeHandler} min={0} max={100}/>
                    <small>filter = {filter}</small>
                </div>
                <div className="col-auto">
                    <SpinnerButton spinning={loading} onClick={rebuildData} size="sm" spinnerAfter>Reload
                        Data</SpinnerButton>
                </div>
                <div className="col-auto">
                    <Input type="text" id="default" list="languages" fuzzyList value={language}
                           onChange={(ev) => setLanguage(ev.target.value)}/>
                    <datalist id="languages">
                        <option value="HTML"/>
                        <option value="CSS"/>
                        <option value="JavaScript"/>
                        <option value="Java"/>
                        <option value="Ruby And Go"/>
                        <option value="PHP And HTML"/>
                        <option value="Go"/>
                        <option value="Erlang"/>
                        <option value="Python And C++"/>
                        <option value="C"/>
                        <option value="C#"/>
                        <option value="C++"/>
                    </datalist>
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
