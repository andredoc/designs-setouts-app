import { useEffect, useState } from 'react';
import GroupTable from '../components/GroupTable/GroupTable'
import cadtsService from '../services/cadtsService'
import { IDesign } from '../models/design.model';
import { ITableConfig } from '../models/table.model';

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

    useEffect(() => {
        loadDesigns()
    }, [])

    const loadDesigns = () => {
        cadtsService
            .getAllDesigns()
            .then((data) => {
                const processData = data.map(({ courses, id, name, status, updated, user_id_last_update, wales}: IDesign) => {
                    return {
                        courses,
                        id,
                        name,
                        status,
                        updated: new Date(updated).toLocaleDateString(),
                        user_id_last_update,
                        wales
                    };
                })
                setDesigns(processData)
            })
            .catch((err: any) => console.log(err))
    }

    return (
        <div>
            <h1>Designs Page</h1>
            <GroupTable tableConfig={tableConfig} data={designs}/>
        </div>
    )
}

export default DesignsPage