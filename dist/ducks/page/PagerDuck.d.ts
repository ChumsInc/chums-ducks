import React from "react";
interface ConnectedPagerProps {
    pageKey?: string;
    dataLength?: number;
    filtered?: boolean;
    onChangeRowsPerPage?: (value: number) => void;
}
declare const PagerDuck: React.FC<ConnectedPagerProps>;
export default PagerDuck;
