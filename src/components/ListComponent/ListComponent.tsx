import {Table} from 'reactstrap';
import { ITableConfig } from '../../models/table.model';

const ListComponent = ({ tableConfig, renderRow, data }: { tableConfig: ITableConfig[], renderRow:({}:any)=>(JSX.Element), data:any[]})=>{

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
                  data.map((item) => 
                    {
                    return renderRow(item)
                    }                   
                  )
                }
              </tbody>
            </Table>
          </div>
        }
        </>
    )
}

export default ListComponent 