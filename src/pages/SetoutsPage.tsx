import { useEffect, useState } from 'react'
import { ISetout } from '../models/setouts.model'
import cadtsService from '../services/cadtsService'
import { ITableConfig } from '../models/table.model'
import ListComponent from '../components/ListComponent/ListComponent'
import SetoutsRow from '../components/SetoutsRow/SetoutsRow'

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
            .then(({data}) => {
                const processData = data.map(({ courses, id, machine_name, machine_width, name, updated }: ISetout) => {
                    return {
                        courses,
                        id,
                        machine_name,
                        machine_width,
                        name,
                        updated: new Date(updated).toLocaleDateString('en'),
                    };
                })
                setAditionalData(processData)
            })
            .catch((err: any) => console.log(err))
    }

    return (
        <div>
            <h3>Setouts Page</h3>
            <ListComponent  
                tableConfig={tableConfig} 
                data={aditionalData} 
                renderRow={(setout:ISetout)=>(<SetoutsRow setout={setout} key={setout.id}/>)}
                />
        </div>
    )
}

export default SetoutsPage