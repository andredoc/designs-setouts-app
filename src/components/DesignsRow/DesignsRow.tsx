import { useState } from "react"
import { IDesign } from "../../models/design.model"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IModalConfig } from "../../models/modal.model";
import cadtsService from '../../services/cadtsService'

const DesignsRow = ({design, modalConfig={fullscreen:false, size:undefined, backdrop:true,fade:true, centered:true, scrollable:false}}:{design:IDesign, modalConfig?: IModalConfig})=>{

    const [modalOpen, setModalOpen] = useState(false)
    const [updatedDesign, setUpdatedDesign]= useState({...design})
    const [designToRender, setDesignToRender] = useState({...design})
    const toggleModal = () => {
        setModalOpen(!modalOpen)
    };

    const handleOnChange=(evt:any)=>{
        const {name, value} = evt.target
        setUpdatedDesign({
            ...updatedDesign, 
            [name]:value
        })
    }

    const handleSubmit = (evt:any)=> {

        cadtsService
            .updateDesign(updatedDesign)
            .then(({ id, name, courses, wales, updated, user_id_last_update, status})=>{
                setDesignToRender({
                    id,
                    name,
                    courses,
                    wales,
                    updated,
                    status,
                    user_id_last_update
                })
                toggleModal()
            })

    }

    return (
            <tr onClick={() => toggleModal()} style={{ 'cursor': 'pointer' }}>
                <td>{designToRender.name}</td>
                <td>{designToRender.courses}</td>
                <td>{designToRender.wales}</td>
                <td>{designToRender.updated}</td>
                <td>{designToRender.user_id_last_update}</td>
                <Modal isOpen={modalOpen} toggle={toggleModal} {...modalConfig}>
                    <ModalHeader toggle={toggleModal}>Update Row</ModalHeader>
                    <ModalBody>
                            <div>
                                <label className="labelModal" htmlFor="name">Name: </label>
                                <input type="text" value={updatedDesign.name} name="name" onChange={handleOnChange} />
                            </div>
                            <div>
                                <label className="labelModal" htmlFor="courses">Courses: </label>
                                <input type="text" value={updatedDesign.courses} name="courses" onChange={handleOnChange} />
                            </div>
                            <div>
                                <label className="labelModal" htmlFor="wales">Wales: </label>
                                <input type="number" value={updatedDesign.wales} name="wales" onChange={handleOnChange} />
                            </div>
                            <div>
                                <label className="labelModal" htmlFor="updated">Last Updated: </label>
                                <input type="text" value={updatedDesign.updated} name="updated" onChange={handleOnChange} />
                            </div>
                            <div>
                                <label className="labelModal" htmlFor="user_id_last_update">By: </label>
                                <input type="text" value={updatedDesign.user_id_last_update} name="user_id_last_update" onChange={handleOnChange} />
                            </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={handleSubmit} >Update</Button>{' '}
                        <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </tr>   
    )

}

export default DesignsRow