# chums-ducks

React & React/Redux Components for Chums apps, styled with Bootstrap 5.

## Generic Modules

### components/Badge.tsx 
Bootstrap 5 Badge
```ts
export interface Props {
    color: string,
    pill?: boolean,
    text?: string,
    className?: string | object,
    description?: string,
}
```
```tsx
<Badge color="warning" pill>
    ipsum lorem
</Badge>
```
```tsx
<Badge color="warning" 
       text="asdf"
       className="me-3"
       description="This is text for assistive technologies" />
```

### components/DateInput.tsx
HTML Date Input
```ts
export declare const formatInputDate: (date: Date) => string;
export declare const inputDate: (date: Date | number | string | readonly string[]) => string;
export declare const dateFromInputValue: (value: string) => Date | null;

export interface DateInputProps extends InputProps {
    date?: Date | string | number | null;
    onChangeDate?: (date: Date | null) => void;
}
```

```tsx
<InputGroup>
    <div className="input-group-text">Date Test</div>
    <DateInput date={date} onChangeDate={(d) => setDate(d)} />
</InputGroup>
```

### ErrorBoundary
A React error boundary that provides an alert component with message and componentStack.

```tsx
import {ErrorBoundary} from "chums-ducks";

<ErrorBoundary>
    <FaultyComponent />
</ErrorBoundary>
```

### FieldInput
An Input Component that implements onChange with field, value; Does not extend InputHTMLAttributes due to the non-standard onChange handler.
```ts
export interface FieldInputProps {
    field?: string,
    value?: string | ReadonlyArray<string> | number,
    placeholder?: string,
    required?: boolean,
    readOnly?: boolean,
    disabled?: boolean,
    wait?: number,
    onChange?: ({field, value}: InputField) => void,
}
```
```tsx

interface ChangeHandlerProps {
    field: keyof Obj,
    value: string|number,
}

const obj = useSelector(selectObject);

const changeHandler = ({field, value}:ChangeHandlerProps) => {
    dispatch(updateObjectAction({...obj, [field]: value}));
}
return (
    <FieldInput field="dlCode" value={obj.dlCode} onChange={changeHandler} />    
)
```

### components/FieldTextArea.tsx
Does not extend TextareaHTMLAttributes due to the non-standard onChange handler. Usage is similar to FieldInput component
```ts

interface FieldTextAreaProps {
    field?: string,
    value?: string | ReadonlyArray<string> | number,
    placeholder?: string,
    required?: boolean,
    readOnly?: boolean,
    disabled?: boolean,
    onChange?: ({field, value}: InputField) => void,
}

```
### components/FormCheck.tsx
A Bootstrap5 FormCheck element
```ts
export interface FormCheckProps {
    label: string,
    checked: boolean,
    onClick: () => void,
    inline?: boolean,
    className?: string | object,
    type: 'radio' | 'checkbox',
}
```
```tsx
<FormCheck label={"Hide Inactive"} checked={filterActive} 
           onClick={onToggleFilterActive}
           type="checkbox"/>
```

### components/FormColumn.tsx
A simple row & column wrapper for forms. Width is the X/12 width of the children; Label width = 12-X width.
```ts
interface FormColumnProps {
    label: string,
    width?: number,
    className?: string,
}
```
```tsx
<FormColumn label="Section Title" width={8}>
    <FieldInput field="sectionTitle" value={sectionTitle} onChange={changeHandler}/>
</FormColumn>
```
rendered:
```html
<div class="row g-3">
    <label class="col-4">Section Title</label>
    <div class="col-8">
        <input type="text" value="asdf" class="form-control form-control-sm">
    </div>
</div>
```


### Input
HTML Input with options for fuzzy datalist and debounced input

```ts
export interface InputProps extends InputHTMLAttributes<any> {
    bsSize?: 'sm' | 'lg',
    myRef?: RefObject<HTMLInputElement>,
    wait?: number,
    fuzzyList?: boolean
}
```

Usage examples:
```tsx
<Input value={numeral(laborCost + fixedCosts).format('$0.0000')} readOnly/>
```
```tsx
<Input type="text" value={machine} onChange={changeHandler} 
       list="input-machine-list" form={formId}/>
<datalist id="input-machine-list">
    {machines.map((machine, index) => (
        <option value={machine} key={index} />
    ))}
</datalist>
```

### components/InputGroup.tsx
Does this one really save any time or coding?
```ts
interface InputGroupProps {
    bsSize?: 'sm'|'lg',
    className?: string|object,
}
```
```tsx
<InputGroup bsSize="sm">
    <div className={classNames("input-group-text", sageOperationCodeIcon)}/>
    <Input value={numeral(laborCost + fixedCosts).format('$0.0000')} readOnly/>
</InputGroup>
```

### components/LoadingModal.tsx
A modal popup with animated progress bar.
```ts
export interface LoadingModalProps extends ModalProps {
    title?: string,
    percent?: number,
    color?: BootstrapColor, // color of the ProgressBar child
}
```

### components/LoadingProgressBar.tsx
```ts
export interface LoadingProgressProps extends ProgressProps {
    color?: BootstrapColor,
    value?: number,
    valueMin?: number,
    valueMax?: number,
    striped?: boolean,
    animated?: boolean,
    className?: string | object,
}
```

### components/Modal.tsx
A modal popup implementing my typical usages of the Bootstrap modal
```ts
export interface ModalProps {
    title?: string,
    size?: BootstrapSize,
    header?: React.ReactNode,
    footer?: React.ReactNode,
    canClose?: boolean,
    scrollable?: boolean,
    centered?: boolean,
    staticBackdrop?: boolean,
    dialogClassName?: string | object,
    visible?: boolean,
    onClose?: (any?:any) => any,
}
```

### components/Progress.tsx
A component wrapper for making multiple progress-bar bar elements.
```ts
export interface ProgressProps {
    height?: string,
    style?: any,
    className?: string | object,
}
```
```tsx
<Progress height="0.25rem">
    <ProgressBar color="dark" style={{width: '5%'}} />
    <ProgressBar color="danger" style={{width: '15%'}} />
    <ProgressBar color="warning" style={{width: '25%'}} />
    <ProgressBar color="success" style={{width: '45%'}} animated />
</Progress>
```

### components/ProgressBar.tsx
A component for Bootstrap ProgressBar
```ts
export interface ProgressBarProps {
    color?: BootstrapColor,
    value?: number,
    valueMin?: number,
    valueMax?: number,
    striped?: boolean,
    animated?: boolean,
    className?: string | object,
    style?: object,
}
```
```tsx
<Progress>
    <ProgressBar value={25} valueMin={0} valueMax={100} striped/>
</Progress>
```

### components/Select.tsx
A simple select element
```ts
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    bsSize?: BootstrapSize,
}
```
```tsx
<Select value={value} onChange={changeHandler} bsSize={bsSize} {...rest}>
    <option value="">Select Work Center</option>
    <optgroup label="Std Work Centers">
        {list
            .filter(wc => wc.isStandardWC)
            .map(wc => (
                <option key={wc.WorkCenterCode} value={wc.WorkCenterCode}>
                    {wc.WorkCenterCode} / {wc.Description}
                </option>
            ))
        }
    </optgroup>
</Select>
```

### components/Spinner.tsx
A spinner component
```ts
export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    type?: 'border' | 'grow',
    bsSize?: 'sm',
    hiddenLabel?: string,
    color?: BootstrapColor,
}
```

### components/SpinnerButton.tsx
A Button with a spinner. Brilliant!
```ts
export interface SpinnerButtonProps extends ButtonHTMLAttributes<any> {
    spinning?: boolean,
    spinnerType?: 'border' | 'grow',
    spinnerAfter?: boolean, // defaults to before the children
    color?: BootstrapColor,
    size?: BootstrapButtonSize,
}
```
```tsx
<SpinnerButton type="submit" spinning={saving} disabled={loading}>
    Save
</SpinnerButton>
```

### Components/TextArea.tsx
A TextArea that implements the goodness of the Input component
```ts
export interface TextAreaProps extends TextareaHTMLAttributes<any> {
    bsSize?: 'sm' | 'lg',
    myRef?: RefObject<HTMLTextAreaElement>,
    wait?: number,
}
```

---

## Connected Components
These components are connected to redux for re-usability. After reading more about
redux best practices, and another developers blog about using the "Ducks" structure
I decided my redux components would be called "Ducks".

### ducks/alerts/
```ts
export interface BasicAlert {
    title?: string,
    message?: string,
    context?: string,
    color?: BootstrapColor,
    className?: string | object,
    canDismiss?: boolean,
}

export declare const addAlertAction: (alert: BasicAlert) => AlertAction;
export declare const dismissAlertAction: (id: number) => AlertAction;
export declare const dismissContextAlert: (context: string) => AlertAction;
export declare const onErrorAction: (err: Error, context?: string | undefined) => AlertAction;

export declare const alertListSelector: (state: RootState) => AlertInterface[];
export declare const selectAlertList: (state: RootState) => AlertInterface[];
export declare const alertListByContextSelector: (context: string) => (state: RootState) => AlertInterface[];
export declare const alertContextFilter: (list: AlertInterface[], context: string) => AlertInterface[];

```
#### ducks/alerts/AlertInterface.tsx
Not a connected component... <em>maybe it should live in components?</em>
```ts
export interface Props extends BasicAlert {
    count?: number,
    onDismiss?: (args?: any) => void,
}
```
```tsx
<AlertInterface color={danger} title="Oops!"
       context="employee/saveEmployeeClockAction" count={3} onDismiss={dismissHandler}>
    Saving the timeclock action failed!
</AlertInterface>
```

#### ducks/alerts/AlertList.tsx
An alert list, optionally filtered by context. Handles the dismissing and removing from redux state of child alerts. 
```ts
export interface Props {
    context?: string,
}
```

typical usage:
```tsx
<AlertList />
```

### ducks/page/
A page state duck for multiple page states.
```ts
export declare const filterPage: (page: number, rowsPerPage: number) => (row: any, index: number) => boolean;
export declare const calcPages: (rows: number, rowsPerPage: number) => number;

export declare const setPageAction: ({ current, key }: PageSetAction) => PageAction;
export declare const setRowsPerPageAction: ({ rowsPerPage, key }: PageSetAction) => PageAction;
export declare const addPageSetAction: ({ key, current, rowsPerPage }: PageSetAction) => PageAction;

export declare const currentPageSelector: (key: string) => (state: RootState) => number;
export declare const rowsPerPageSelector: (key: string) => (state: RootState) => number;
export declare const pagedDataSelector: (key: string, data: any[]) => (state: RootState) => any[];
```

#### ducks/page/PagerDuck.tsx
Combines the RowPerPage and Pagination into one component, and optionally
allows for change event to trigger function on parent component.
```ts
interface ConnectedPagerProps {
    pageKey?: string,
    dataLength?: number,
    filtered?: boolean,
    onChangeRowsPerPage?: (value: number) => void,
}
```

#### ducks/page/PageButton.tsx
Not a connected component... <em>maybe it should live in components?</em>

For usage, see the ducks/sortableTables/ example.
```ts
interface PageButtonProps {
    page: number,
    label?: string | number,
    isCurrent?: boolean,
    disabled?: boolean,
    onClick?: (page: number) => void,
}
```

#### ducks/page/Pagination.tsx
Not a connected component... <em>maybe it should live in components?</em>
```ts
export interface PaginationProps {
    page: number,
    pages: number,
    filtered?: boolean,
    className?: string | object,
    maxButtons?: number,
    onSelectPage: (page: number) => void,
}
```

#### ducks/page/PaginationDuck.tsx
```ts
export interface PaginationDuckProps {
    pageKey?: string,
    dataLength: number,
    filtered?: boolean,
    className?: string | object,
    maxButtons?: number,
}
```

#### ducks/page/RowsPerPage.tsx
```ts
export interface RowsPerPageProps {
    value: number,
    pageValues?: number[],
    onChange: (value: number) => void,
}
```

#### ducks/page/RowsPerPageDuck.tsx 
Could I not have found a better name instead of just sticking "Duck" on the end?
```ts
export interface ConnectedRowsPerPageProps {
    pageKey?: string,
    pageValues?: number[],
    onChange?: (value: number) => void,
}
```

### ducks/sites/
A redux state for sites data
```ts
export interface Site {
    name: string,
    domain: string,
}
export const sites:Site[] = [
    {name: 'b2b', domain: 'b2b.chums.com'},
    {name: 'safety', domain: 'chumssafety.com'}
];

export declare const siteSelectedAction: (site?: Site) => SiteAction;
export declare const currentSiteSelector: (state: RootState) => Site;

```
#### ducks/sites/SiteSelect.tsx
```tsx
<SiteSelect />
```

### ducks/sortableTables/
A sortable table component, sorting functions need to be handled on parent component.
```ts
export interface SortableTableInterface {
    key: string,
    field: string,
    ascending: boolean,
}
export interface SorterProps {
    field: string;
    ascending: boolean;
}
export interface SortableTableField {
    field: string;
    title: string;
    sortable?: boolean;
    render?: (row: any) => ReactElement | Element | string | number;
    className?: string | object | ((any: any) => string | object);
    colSpan?: number;
}

export declare const sortableTableSelector: (key: string) => (state: RootState) => SortableTableInterface;
export declare const sortChangedAction: ({ key, field, ascending }: SortableTableInterface) => SortableTablesAction;
export declare const tableAddedAction: ({ key, field, ascending }: SortableTableInterface) => SortableTablesAction;
```

#### ducks/sortableTables/SortableTable.tsx
```ts
export interface SortableTableProps extends TableHTMLAttributes<HTMLTableElement> {
    tableKey: string,
    keyField: string | number | ((any: any) => string | number),
    size?: BootstrapSize,
    rowClassName?: string | object | ((any: any) => string | object),
    onSelectRow?: (any: any) => any | void,
    selected?: string | number | ((any: any) => boolean),
    fields: SortableTableField[],
    data: any[],
    tfoot?: React.ReactElement<HTMLTableSectionElement>,
    onChangeSort?: (any?: any) => void,
}
```
```tsx
const sort = useSelector(sortableTableSelector(tableKey));
const list = useSelector(filteredListSelector(sort as OperationCodeSorterProps));
const pagedList = useSelector(pagedDataSelector(tableKey, list));

return (
    <div>
        <SortableTable tableKey={tableKey} keyField={operationCodeKey}
                       fields={fields} data={pagedList} size="xs"
                       onSelectRow={onSelectRow}
                       selected={keyValue(selected)}/>
        <PagerDuck pageKey={tableKey}
                   dataLength={list.length}
                   filtered={list.length !== records}/>
    </div>
)
```

#### ducks/sortableTables/SortableTableHead.tsx
in case this is needed outside the standard SortableTable component.
```ts
export interface SortableTableHeadProps extends TableHTMLAttributes<HTMLTableSectionElement>{
    tableKey: string,
    fields: SortableTableField[],
    onChangeSort: (field: string, asc: boolean) => void,
}
```

#### ducks/sortableTables/SortableTH.tsx
in case this is needed outside the standard SortableTable component.
```ts
export interface SortableTHProps {
    field: SortableTableField,
    sorted?: boolean,
    ascending?: boolean,
    className?: string|object,
    onClick: (field: string, ascending: boolean) => void,
}
```

#### ducks/sortableTables/SortableTR.tsx 
in case this is needed outside the standard SortableTable component.
```ts
export interface SortableTRProps extends TableHTMLAttributes<HTMLTableRowElement> {
    rowClassName?: string | object | ((any: any) => string | object),
    selected?: boolean,
    fields: SortableTableField[],
    row: any,
    trRef?: React.LegacyRef<HTMLTableRowElement>,
    onClick?: (any?: any) => any,
}
```

### ducks/tabs
A state for tabs, nav pills, etc.
```ts
export interface Tab {
    id: string,
    title: string,
    icon?: string,
    to?: string|object|((any:any) => string|object),
    canClose?: boolean,
    disabled?: boolean,
    active?: boolean,
}
export declare const tabListCreatedAction: (list: Tab[], key?: string, selectedId?: string | undefined) => TabAction;
export declare const tabSelectedAction: (id: string, key?: string) => TabAction;
export declare const tabAddedAction: (tab: Tab, key?: string) => TabAction;
export declare const tabRemovedAction: (id: string, key?: string) => TabAction;
export declare const tabDisabledAction: (id: string, key?: string) => TabAction;

export declare const tabListSelector: (key?: string) => (state: RootState) => Tab[];
export declare const selectedTabSelector: (key?: string) => (state: RootState) => string;
export declare const tabSelector: (id: string, key?: string) => (state: RootState) => Tab;
```
#### ducks/tabs/NavItem.tsx
```ts
export interface NavItemProps extends Tab {
    className?: string | object,
    onSelect: (id?: string) => void,
    onClose?: (id?: string) => void,
}
```
#### ducks/tabs/NavList.tsx
A group of NavItem components
```ts
export interface NavListProps {
    tabKey: string,
    className?: string | object,
    itemClassName?: string | object,
    onSelectTab?: (id?: string) => void,
}
```

#### ducks/tabs/NavRouterLink.tsx
```ts
export interface NavRouterLinkProps extends Tab {
    to: string | object | ((any: any) => string | object),
    className?: string | object,
    onClose?: (id?: string) => void,
}
```

#### ducks/tabs/NavRouterList.tsx
A group of NavRouterLink components
```ts
export interface NavRouterListProps {
    tabKey: string,
    className?: string | object,
    itemClassName?: string | object,
}
```

#### ducks/tabs/PillList.tsx
Extends NavList rendered as Bootstrap Pills

#### ducks/tabs/PillRouterList.tsx
Extends NavList rendered as Bootstrap Pills with ReactRouter

#### ducks/tabs/TabList.tsx
Extends NavList rendered as Bootstrap Tabs

#### ducks/tabs/TabRouterList.tsx
Extends NavList rendered as Bootstrap Tabs with ReactRouter

---

## Utilities

### Fetch
```ts
export declare function fetchJSON(url: string, options?: RequestInit): Promise<any>;
export declare function fetchHTML(url: string, options?: RequestInit): Promise<string>;
export declare function fetchPOST(url: string, body: Object, options?: RequestInit): Promise<any>;
export declare function fetchDELETE(url: string, options?: RequestInit): Promise<any>;
export declare const buildPath: (path: string, props?: object) => string;
```

### regex.ts
```ts
/**
 * Returns a regular expression that is used by the
 * subsequence search engine.
 * @param {String} str String to search for
 * @param {String} flags RegExp flags for returned value
 * @return {RegExp}     Regular expression based off input search string
 * @see https://git.io/v7LGt
 */
export declare const getRegex: (str: string, flags?: string) => RegExp;

```
