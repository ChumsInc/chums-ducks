import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sites, siteSelectedAction, currentSiteSelector } from './index';
const SiteSelect = () => {
    const dispatch = useDispatch();
    const changeHandler = (ev) => {
        const { value } = ev.target;
        const [site] = sites.filter(s => s.name === value);
        dispatch(siteSelectedAction(site));
    };
    const site = useSelector(currentSiteSelector);
    return (React.createElement("select", { className: "form-select form-select-sm", value: site.name, onChange: changeHandler }, sites.map(site => (React.createElement("option", { key: site.name, value: site.name }, site.domain)))));
};
export default SiteSelect;
//# sourceMappingURL=SiteSelect.js.map