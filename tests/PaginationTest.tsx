import * as React from "react";
import {useState} from "react";
import ConnectedRowsPerPage from "../src/ducks/page/ConnectedRowsPerPage";
import {default as ConnectedPagination, filterPage} from "../src/ducks/page/ConnectedPagination";
import {useDispatch, useSelector} from "react-redux";
import {addAlertAction, selectCurrentPage, selectRowsPerPage} from "../src";
import {AlertList} from "../src";
import {BootstrapColor} from "../src/types";


interface tableDataRow {
    key: number,
    value: number
}

const colors: BootstrapColor[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark',];


const tableData: tableDataRow[] = new Array(100).fill(null).map((el, index) => ({
    key: index,
    value: Math.random() * 100
}))
const PaginationTest: React.FC = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState(100);
    const rowsPerPage = useSelector(selectRowsPerPage);
    const page = useSelector(selectCurrentPage);
    const filteredData = tableData
        .filter(row => row.value < filter);
    const pageData = filteredData
        .filter(filterPage(page, rowsPerPage));
    const tableClickHandler = (row: tableDataRow) => dispatch(addAlertAction({
        message: JSON.stringify(row),
        context: `context-${row.key}`,
        color: colors[row.key % 8]
    }));

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
                <div className="col-auto">
                    <input type="number" className="from-control form-control-sm"
                           value={filter} onChange={(ev) => setFilter(Number(ev.target.value))} min={0} max={100}/>
                </div>
                <div className="col-auto">
                    <AlertList/>

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
                        <tr key={row.key} onClick={() => tableClickHandler(row)}>
                            <td>{row.key}</td>
                            <td>{row.value}</td>
                            <td>{colors[row.key % 8]}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default PaginationTest;
