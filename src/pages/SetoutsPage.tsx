import { useEffect, useState } from 'react'
import { ISetout } from '../models/setouts.model'
import cadtsService from '../services/cadtsService'
import { ITableConfig } from '../models/table.model'
import GroupTable from '../components/GroupTable/GroupTable'

const SetoutsPage = () => {

    const [aditionalData, setAditionalData]= useState<ISetout[]>([]) 

    const tableConfig: ITableConfig[] = [
        {
            headerLabel: 'Name',
            rowProperty: 'name'
        },
        {
            headerLabel: 'Machine Name',
            rowProperty: 'machine_name'
        },
        {
            headerLabel: 'Machine Width',
            rowProperty: 'machine_width'
        },
        {
            headerLabel: 'Courses',
            rowProperty: 'courses'
        },
        {
            headerLabel: 'Last Updated',
            rowProperty: 'updated'
        }
    ];

    useEffect(()=>{
        loadSetouts()
    },[])

    const loadSetouts = () => {
        cadtsService
            .getAllSetouts()
            .then((data) => {
                const processData = data.map(({ courses, id, machine_name, machine_width, name, updated }: ISetout) => {
                    return {
                        courses,
                        id,
                        machine_name,
                        machine_width,
                        name,
                        updated: new Date(updated).toLocaleDateString(),
                    };
                })
                setAditionalData(processData)
            })
            .catch((err: any) => console.log(err))
    }

    return (
        <div>
            <h1>Setouts Page</h1>
            <GroupTable tableConfig={tableConfig} data={aditionalData} />
        </div>
    )
}

export default SetoutsPage