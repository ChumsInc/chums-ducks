import React from "react";
import { Tab } from "./index";
export interface TabItemProps extends Tab {
    className?: string | object;
    onSelect: (id?: string) => void;
    onClose?: (id?: string) => void;
}
declare const _default: React.NamedExoticComponent<TabItemProps>;
export default _default;
