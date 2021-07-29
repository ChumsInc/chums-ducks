import React from "react";
import { Tab } from "./index";
export interface NavItemProps extends Tab {
    className?: string | object;
    onSelect: (id?: string) => void;
    onClose?: (id?: string) => void;
}
declare const NavItem: React.FC<NavItemProps>;
export default NavItem;
