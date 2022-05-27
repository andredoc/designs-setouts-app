import { useEffect, useState } from 'react';
import ListComponent from '../../components/ListComponent/ListComponent'
import cadtsService from '../../services/cadtsService'
import { IDesign } from '../../models/design.model';
import { IUser } from '../../models/user.model'
import { ITableConfig } from '../../models/table.model';
import DesignsRow from '../../components/DesignsRow/DesignsRow';
import './DesignsPage.scss'

const DesignsPage =()=>{
    const [designs, setDesigns] = useState<IDesign[]>([])

    const tableConfig:ITableConfig[] = [
        {
            headerLabel: 'Name',
            rowProperty: 'name'
        },
        {
            headerLabel: 'Courses',
            rowProperty: 'courses'
        },
        {
            headerLabel: 'Wales',
            rowProperty: 'wales'
        },
        {
            headerLabel: 'Last Updated',
            rowProperty: 'updated'
        },
        {
            headerLabel: 'By',
            rowProperty: 'user_id_last_update'
        }
    ];

    const getFullNameInitials=(user:IUser)=>user.name.split(' ').map(words=>words[0]).join('');

    useEffect(() => {
        loadDesigns()
    }, [])

    const loadDesigns = () => {
        
        Promise.all([cadtsService.getAllDesigns(), cadtsService.getAllUsers()])
            .then(([designs, users])=>{
                const processData = designs.map(({ courses, id, name, status, updated, user_id_last_update, wales }: IDesign)=>{
                    return {
                        courses,
                        id,
                        name,
                        status,
                        updated: new Date(updated).toLocaleDateString('en'),
                        user_id_last_update,
                        userInitials: getFullNameInitials(users.filter((user) => user.id === user_id_last_update)[0]),
                        wales
                    }
                })
                setDesigns(processData)
            })
            .catch((err: any) => console.log(err))
    }
            
    return (
        <div>
            <h3 className="title">Designs Page</h3>
            <ListComponent 
                tableConfig={tableConfig} 
                data={designs}
                renderRow={(design:IDesign) => <DesignsRow design={design} key={design.id}/>}
                />
        </div>
    )
}

export default DesignsPage