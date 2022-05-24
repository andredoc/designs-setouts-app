import {Table} from 'reactstrap';
import { ITableConfig } from '../../models/table.model';

const GroupTable = ({ tableConfig, data }: { tableConfig: ITableConfig[], data:any[]})=>{

    return (
         <>
         { 
          data.length > 0 && <div className="table">
            <Table responsive>
              <thead>
                <tr>
                  {
                    tableConfig.map(({ headerLabel }, index) => (<th key={index} className="table-header">{headerLabel}</th>))
                  }
                </tr>
              </thead>
              <tbody>
                {
                  data.map((object) => (
                    <tr key={object.id}>
                        {
                          tableConfig.map(({ rowProperty }, index) => (
                            <th key={index}>{object[rowProperty]}</th>
                          ))
                        }
                      </tr>
                    )
                  )
                }
              </tbody>
            </Table>
          </div>
        }
        </>
    )
}

export default GroupTable