import React from "react";
import RowsPerPageDuck from "./RowsPerPageDuck";
import PaginationDuck from "./PaginationDuck";

interface ConnectedPagerProps {
    pageKey?: string,
    dataLength?: number,
    filtered?: boolean,
    onChangeRowsPerPage?: (value: number) => void,
}

const PagerDuck: React.FC<ConnectedPagerProps> = ({
                                                      pageKey = 'app',
                                                      dataLength = 0,
                                                      filtered = false,
    onChangeRowsPerPage,
                                                  }) => {
    const changeRowsPerPageHandler = (value:number) => {
        if (typeof onChangeRowsPerPage === 'function') {
            onChangeRowsPerPage(value);
        }
    }

    return (
        <div className="row g-3">
            <div className="col-auto">
                <RowsPerPageDuck pageKey={pageKey} onChange={changeRowsPerPageHandler}/>
            </div>
            <div className="col-auto">
                <PaginationDuck pageKey={pageKey} dataLength={dataLength} filtered={filtered}/>
            </div>
        </div>
    )
}
export default PagerDuck;
