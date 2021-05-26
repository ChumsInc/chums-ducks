import React from "react";
import { Tab } from "../types";
export interface TabItemProps extends Tab {
    onSelect: (id: string) => void;
    onClose?: (id: string) => void;
}
declare const TabItem: React.FC<TabItemProps>;
export default TabItem;
