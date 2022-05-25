import { useState } from "react"
import { IDesign } from "../../models/design.model"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IModalConfig } from "../../models/modal.model";

const DesignsRow = ({design, modalConfig={fullscreen:false, size:undefined, backdrop:true,fade:true, centered:true, scrollable:false}}:{design:IDesign, modalConfig?: IModalConfig})=>{

    const [modalOpen, setModalOpen] = useState(false)
    const [updatedDesign, setUpdatedDesign]= useState({...design})
    const toggleModal = () => {
        setModalOpen(!modalOpen)
    };

    const handleOnChange=(evt:any)=>{
        const {name, value} = evt.target
        setUpdatedDesign({ ...updatedDesign, [name]:value})
    }

    return (
            <tr onClick={() => toggleModal()} style={{ 'cursor': 'pointer' }}>
                <th>{design.name}</th>
                <th>{design.courses}</th>
                <th>{design.wales}</th>
                <th>{design.updated}</th>
                <th>{design.user_id_last_update}</th>
                <Modal isOpen={modalOpen} toggle={toggleModal} {...modalConfig}>
                    <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
                    <ModalBody>
                        <input type="text" value={updatedDesign.name} name="name" onChange={handleOnChange} />
                        <p>{updatedDesign.courses}</p>
                        <p>{updatedDesign.wales}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggleModal}>Update</Button>{' '}
                        <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </tr>   
    )

}

export default DesignsRow