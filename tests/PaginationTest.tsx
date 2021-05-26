import * as React from "react";
import {ChangeEvent, useEffect, useState} from "react";
import ConnectedRowsPerPage from "../src/ducks/page/ConnectedRowsPerPage";
import {default as ConnectedPagination, filterPage} from "../src/ducks/page/ConnectedPagination";
import {useDispatch, useSelector} from "react-redux";
import {addAlertAction, AlertList, dismissContextAlert, Input, selectCurrentPage, selectRowsPerPage} from "../src";
import {BootstrapColor} from "../src/types";


interface tableDataRow {
    key: number,
    value: number
}

const colors: BootstrapColor[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark',];

const PaginationTest: React.FC = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState(100);
    const [tableData, setTableData] = useState([] as tableDataRow[]);
    useEffect(() => {
        const data = new Array(100).fill(null).map((el, index) => ({
            key: index,
            value: Math.floor(Math.random() * 100)
        }))
        setTableData(data);
    }, [])

    const rowsPerPage = useSelector(selectRowsPerPage);
    const page = useSelector(selectCurrentPage);

    const filteredData = tableData.filter(row => row.value <= filter);
    const pageData = filteredData.filter(filterPage(page, rowsPerPage));

    const [language, setLanguage] = useState('');

    const tableClickHandler = (row: tableDataRow) => dispatch(addAlertAction({
        message: JSON.stringify(row),
        context: `context-${row.key}`,
        color: colors[row.key % 8]
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

    return (
        <div>
            <div className="row g-3">
                <div className="col-auto">
                    <ConnectedRowsPerPage/>
                </div>
                <div className="col-auto">
                    <ConnectedPagination dataLength={filteredData.length}
                                         filtered={filteredData.length < tableData.length}/>
                </div>
                <div className="col-auto"><label className="form-label">Filter Values:</label></div>
                <div className="col-auto">
                    <Input type="number" className="from-control form-control-sm"
                           wait={250}
                           value={filter} onChange={filterChangeHandler} min={0} max={100}/>
                    <small>filter = {filter}</small>
                </div>
                <div className="col-auto">
                    <AlertList/>
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
            <table className="table table-xs">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Random Value</th>
                    <th>Color</th>
                </tr>
                </thead>
                <tbody>
                {
                    pageData.map(row => (
                        <tr key={row.key} onClick={() => tableClickHandler(row)}
                            className={`table-${colors[Math.floor(row.value % 8)]}`}>
                            <td>{row.key}</td>
                            <td>{row.value}</td>
                            <td className={`text-${colors[Math.floor(row.key % 8)]}`}>{colors[row.key % 8]}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default PaginationTest;
