import React, {useState} from 'react';
import {BootstrapSize, DateInput, FormCheck, InputGroup, LoadingModal, Modal} from "../src";
import Select from "../src/components/Select";

const ModalTest: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalWaiting, setShowModalWaiting] = useState(false);
    const [staticBackdrop, setStaticBackdrop] = useState(false);
    const [size, setSize] = useState('sm' as BootstrapSize);
    const [centered, setCentered] = useState(false);
    const [date, setDate] = useState<Date|string|number|null>('2021-03-01');

    let timer: number = -1;

    const onClickModalWaitingButton = () => {
        window.clearTimeout(timer);
        setShowModalWaiting(true);
        timer = window.setTimeout(() => setShowModalWaiting(false), 1000);
    }

    return (
        <div>
            {showModal && (
                <Modal title="Modal Test"
                       onClose={() => setShowModal(false)}
                       size={size}
                       centered={centered}
                       staticBackdrop={staticBackdrop}>
                    Content goes here?
                </Modal>
            )}
            <LoadingModal title="Modal Loading Test" visible={showModalWaiting} color="success" size={size} centered={centered}>Content goes here?</LoadingModal>

            <div className="row g-3">
                <div className="col-auto">
                    <button type="button" className="btn btn-sm btn-primary"
                            onClick={() => setShowModal(!showModal)}>Open
                        Modal
                    </button>
                </div>
                <div className="col-auto">
                    <button type="button" className="btn btn-sm btn-secondary" onClick={onClickModalWaitingButton}>
                        Load something.
                    </button>
                </div>
                <div className="col-auto">
                    <Select bsSize="sm" value={size} onChange={(ev) => setSize(ev.target.value as BootstrapSize)}>
                        <option value="xs">XS</option>
                        <option value="sm">SM</option>
                        <option value="md">MD</option>
                        <option value="lg">LG</option>
                        <option value="xl">XL</option>
                    </Select>
                </div>
                <div className="col-auto">
                    <FormCheck label={"static backdrop"} checked={staticBackdrop}
                               onClick={() => setStaticBackdrop(!staticBackdrop)} type="checkbox"/>
                </div>
                <div className="col-auto">
                    <FormCheck label={"centered"} checked={centered}
                               onClick={() => setCentered(!centered)} type="checkbox"/>
                </div>
                <div className="col-auto">
                    <InputGroup>
                        <div className="input-group-text">Date Test</div>
                        <DateInput date={date} onChangeDate={(d) => setDate(d)} />
                    </InputGroup>

                </div>
                <div className="col-auto">
                    {JSON.stringify(date)}
                </div>
            </div>
        </div>
    )
}
export default ModalTest;
