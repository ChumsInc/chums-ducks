"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const index_1 = require("./index");
const SiteSelect = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const changeHandler = (ev) => {
        const { value } = ev.target;
        const [site] = index_1.sites.filter(s => s.name === value);
        dispatch((0, index_1.siteSelectedAction)(site));
    };
    const site = (0, react_redux_1.useSelector)(index_1.currentSiteSelector);
    return (react_1.default.createElement("select", { className: "form-select form-select-sm", value: site.name, onChange: changeHandler }, index_1.sites.map(site => (react_1.default.createElement("option", { key: site.name, value: site.name }, site.domain)))));
};
exports.default = SiteSelect;
//# sourceMappingURL=SiteSelect.js.map