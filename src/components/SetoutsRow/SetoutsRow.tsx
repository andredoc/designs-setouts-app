import { useState } from "react";
import { ISetout } from "../../models/setouts.model"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IModalConfig } from "../../models/modal.model";

const SetoutsRow = ({ setout, modalConfig = { fullscreen: false, size: undefined, backdrop: true, fade: true, centered: true, scrollable: false } }: { setout: ISetout, modalConfig?: IModalConfig}) => {
    const [modalOpen, setModalOpen] = useState(false)
    const toggleModal = () => {
        setModalOpen(!modalOpen)
    };
    
    return(
        <tr onClick={() => toggleModal()} style={{ 'cursor': 'pointer' }}>
            <td>{setout.name}</td>
            <td>{setout.machine_name}</td>
            <td>{setout.machine_width}</td>
            <td>{setout.courses}</td>
            <td>{setout.updated}</td>
            <Modal isOpen={modalOpen} toggle={toggleModal} {...modalConfig}>
                <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
                <ModalBody>
                    <p>{setout.name}</p>
                    <p>{setout.courses}</p>
                    <p>{setout.machine_name}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleModal}>Update</Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </tr>
        
    )                           
}

export default SetoutsRow