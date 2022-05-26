import { useState } from "react";
import { ISetout } from "../../models/setouts.model"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IModalConfig } from "../../models/modal.model";
import cadtsService from "../../services/cadtsService";

const SetoutsRow = ({ setout, modalConfig = { fullscreen: false, size: undefined, backdrop: true, fade: true, centered: true, scrollable: false } }: { setout: ISetout, modalConfig?: IModalConfig}) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [updatedSetout, setUpdatedSetout] = useState({ ...setout })
    const [setoutToRender, setSetoutToRender] = useState({ ...setout })

    const toggleModal = () => {
        setModalOpen(!modalOpen)
    };

    const handleOnChange = (evt: any) => {
        const { name, value } = evt.target
        setUpdatedSetout({
            ...updatedSetout,
            [name]: value
        })
    }

    const handleSubmit = (evt: any) => {

        cadtsService
            .updateSetout(updatedSetout)
            .then(({ courses, id, machine_name, machine_width, name, updated })=>{
                setSetoutToRender({
                    courses,
                    id,
                    machine_name,
                    machine_width,
                    name,
                    updated
                })
                toggleModal()
            })
    }
    
    return(
        <tr onClick={() => toggleModal()} style={{ 'cursor': 'pointer' }}>
            <td>{setoutToRender.name}</td>
            <td>{setoutToRender.machine_name}</td>
            <td>{setoutToRender.machine_width}</td>
            <td>{setoutToRender.courses}</td>
            <td>{setoutToRender.updated}</td>
            <Modal isOpen={modalOpen} toggle={toggleModal} {...modalConfig}>
                <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
                <ModalBody>
                    <div>
                        <label className="labelModal" htmlFor="name">Name: </label>
                        <input type="text" value={updatedSetout.name} name="name" onChange={handleOnChange} />
                    </div>
                    <div>
                        <label className="labelModal" htmlFor="machine_name">Machine Name: </label>
                        <input type="text" value={updatedSetout.machine_name} name="machine_name" onChange={handleOnChange} />
                    </div>
                    <div>
                        <label className="labelModal" htmlFor="machine_width">Machine Width: </label>
                        <input type="number" value={updatedSetout.machine_width} name="machine_width" onChange={handleOnChange} />
                    </div>
                    <div>
                        <label className="labelModal" htmlFor="courses">Courses: </label>
                        <input type="text" value={updatedSetout.courses} name="courses" onChange={handleOnChange} />
                    </div>
                    <div>
                        <label className="labelModal" htmlFor="updated">Last Updated: </label>
                        <input type="text" value={updatedSetout.updated} name="updated" onChange={handleOnChange} />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}  >Update</Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </tr>     
    )                           
}

export default SetoutsRow