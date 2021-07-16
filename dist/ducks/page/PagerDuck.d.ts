import React from "react";
interface ConnectedPagerProps {
    pageKey?: string;
    dataLength?: number;
    filtered?: boolean;
}
declare const PagerDuck: React.FC<ConnectedPagerProps>;
export default PagerDuck;
