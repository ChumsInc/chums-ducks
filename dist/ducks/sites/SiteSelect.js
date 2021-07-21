import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sites, siteSelectedAction, currentSiteSelector } from './index';
var SiteSelect = function () {
    var dispatch = useDispatch();
    var changeHandler = function (ev) {
        var value = ev.target.value;
        var site = sites.filter(function (s) { return s.name === value; })[0];
        dispatch(siteSelectedAction(site));
    };
    var site = useSelector(currentSiteSelector);
    return (React.createElement("select", { className: "form-select form-select-sm", value: site.name, onChange: changeHandler }, sites.map(function (site) { return (React.createElement("option", { key: site.name, value: site.name }, site.domain)); })));
};
export default SiteSelect;
//# sourceMappingURL=SiteSelect.js.map