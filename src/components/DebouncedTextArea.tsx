import React, {
    ChangeEvent,
    FocusEvent,
    RefObject,
    TextareaHTMLAttributes,
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';
import classNames from "classnames";
import debounce from 'lodash.debounce'

const noop = () => {
};

export interface DebouncedTextAreaProps extends TextareaHTMLAttributes<any> {
    bsSize?: 'sm' | 'lg',
    myRef?: RefObject<HTMLTextAreaElement>,
    wait?: number,
}

const DebouncedTextArea: React.FC<DebouncedTextAreaProps> = ({
                                               bsSize = '',
                                               wait = 350,
                                               myRef,
                                               className,
                                               value,
                                               onChange = noop,
                                               onBlur,
                                               ...rest
                                           }) => {

    let _debounced: ReturnType<typeof debounce> | undefined;
    const delayedChange = useCallback(debounce((ev: ChangeEvent<HTMLTextAreaElement>) => {
        console.log('useCallback (debounced)', ev.target, ev.target.value)
        onChange(ev)
    }, wait), []);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const [localValue, setLocalValue] = useState(String(value));

    useEffect(() => {
        return () => {
            _debounced?.cancel();
        }
    }, []);
    useEffect(() => {
        setLocalValue(String(value));
    }, [value]);

    const inputClassName = {
        'form-control': true,
        [`form-control-${bsSize}`]: !!bsSize,
    }

    const changeHandler = (ev: ChangeEvent<HTMLTextAreaElement>) => {
        setLocalValue(ev.target.value)
        delayedChange(ev);
    }

    const blurHandler = (ev: FocusEvent<HTMLTextAreaElement>) => {
        _debounced?.flush();
        if (onBlur) {
            onBlur(ev);
        }
    }

    return (
        <textarea
            className={classNames(inputClassName, className)}
            value={localValue || ''}
            // onInput={changeHandler}
            onBlur={blurHandler}
            onChange={changeHandler}
            ref={myRef || inputRef} {...rest} />
    )
}
export default DebouncedTextArea;
