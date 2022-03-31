import * as React from "react";
import {useEffect, useState} from "react";
import {
    ErrorBoundary,
    FormCheck,
    NavItem, NavList, PillList,
    selectedTabSelector,
    Tab,
    tabAddedAction,
    TabList,
    tabListCreatedAction,
    tabSelector, tabToggleStatusAction
} from "../src";
import {useDispatch, useSelector} from "react-redux";
import PaginationTest from "./PaginationTest";
import ModalTest from "./ModalTest";

const tabSetId = 'test';
const tabs: Tab[] = [
    {id: 'pagination', title: 'Pagination Test', icon: 'bi-signpost-split-fill', active: true},
    {id: 'modal', title: 'Modal Test', },
    {id: 'disabled-item', title: 'Disabled Item', disabled: true},
    {id: 'test-disabled-tab', title: 'Disabled Test Tab', disabled: true},
    {id: 'form', title: 'Form Test', canClose: true},
]
const tempTab: Tab = {id: 'temp-tab', title: 'Temporary Tab', active: false, canClose: true};

const App: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(tabListCreatedAction(tabs, tabSetId, 'pagination'));
        // dispatch(onTabSelected(tabs[0].id))
    }, []);

    const currentTab = useSelector(selectedTabSelector(tabSetId));
    const hasTempTab = useSelector(tabSelector(tempTab.id));
    const onAddItem = () => {
        dispatch(tabAddedAction(tempTab, tabSetId));
    }
    const [navType, setNavType] = useState('tab');

    const [isTabEnabled, setIsTabEnabled] = useState(false);
    useEffect(() => {
        console.log(`\n...setting 'test-disabled-tab' to disabled: ${JSON.stringify(!isTabEnabled)}`);
        dispatch(tabToggleStatusAction('test-disabled-tab', tabSetId, isTabEnabled));
        console.log(`dispatch completed: ${JSON.stringify(!isTabEnabled)}\n\n`);
    }, [isTabEnabled]);

    return (
        <div>

            <ErrorBoundary>
                {navType === 'tab' && (
                    <TabList className="mb-3 tab-pills" tabKey={tabSetId}>
                        <NavItem onSelect={onAddItem} id="add-tab" title="+" disabled={!!hasTempTab}/>
                    </TabList>
                )}
                {navType === 'pill' && (
                    <PillList className="mb-3 tab-pills" tabKey={tabSetId}>
                        <NavItem onSelect={onAddItem} id="add-tab" title="+" disabled={!!hasTempTab}/>
                    </PillList>
                )}
                {navType === '' && (
                    <NavList className="mb-3 tab-pills" tabKey={tabSetId}>
                        <NavItem onSelect={onAddItem} id="add-tab" title="+" disabled={!!hasTempTab}/>
                    </NavList>
                )}
            </ErrorBoundary>
            <div className="row g-3 mb-3">
                <div className="col-auto">
                    Display Nav as:
                </div>
                <div className="col-auto">
                    <FormCheck label="Tabs" checked={navType === 'tab'} onClick={() => setNavType('tab')} type="radio" inline/>
                    <FormCheck label="Pills" checked={navType === 'pill'} onClick={() => setNavType('pill')} type="radio" inline/>
                    <FormCheck label="Navs" checked={navType === ''} onClick={() => setNavType('')} type="radio" inline/>
                    <FormCheck label="Toggle Test Tab" checked={isTabEnabled} onClick={() => setIsTabEnabled(!isTabEnabled)} type="checkbox" inline />
                </div>
            </div>
            <ErrorBoundary>
                {currentTab === 'pagination' && <PaginationTest/>}
                {currentTab === 'modal' && <ModalTest/>}
                {currentTab === 'form' && <div/>}
            </ErrorBoundary>
        </div>
    )
}
export default App;
