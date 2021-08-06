import React from "react";
import { Tab } from "./index";
export interface NavRouterLinkProps extends Tab {
    to: string | object | ((any: any) => string | object);
    className?: string | object;
    onClose?: (id?: string) => void;
}
declare const NavRouterLink: React.FC<NavRouterLinkProps>;
export default NavRouterLink;
