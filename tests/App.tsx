import * as React from "react";
import {useEffect} from "react";
import {
    ConnectedTabList,
    ErrorBoundary,
    onTabAdded,
    onTabListCreated,
    selectedTabSelector,
    Tab,
    TabItem,
    tabSelector
} from "../src";
import {useDispatch, useSelector} from "react-redux";
import PaginationTest from "./PaginationTest";
import ModalTest from "./ModalTest";

const tabs: Tab[] = [
    {id: 'pagination', title: 'Pagination Test', active: false},
    {id: 'modal', title: 'Modal Test', active: true},
    {id: 'disabled-item', title: 'Disabled Item', disabled: true},
    {id: 'form', title: 'Form Test', canClose: true},
]
const tempTab: Tab = {id: 'temp-tab', title: 'Temporary Tab', active: true, canClose: true};

const App: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(onTabListCreated(tabs));
        // dispatch(onTabSelected(tabs[0].id))
    }, []);

    const currentTab = useSelector(selectedTabSelector);
    const hasTempTab = !!useSelector(tabSelector(tempTab.id));
    const onAddItem = () => {
        dispatch(onTabAdded(tempTab));
    }
    return (
        <div>
            <ErrorBoundary>
                <ConnectedTabList className="mb-3">
                    <TabItem onSelect={onAddItem} id="add-tab" title="+" disabled={hasTempTab}/>
                </ConnectedTabList>
            </ErrorBoundary>
            {currentTab === 'pagination' && <PaginationTest/>}
            {currentTab === 'modal' && <ModalTest/>}
            {currentTab === 'form' && <div/>}
        </div>
    )
}
export default App;
