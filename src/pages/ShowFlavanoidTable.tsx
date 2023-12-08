import { Table } from '../components/table/table';
import { createTableData } from '../services/data-processing-methods';


export const ShowFlavanoidTable = ({flavanoids}:any) => {
    return <div>
        <Table measure={"Flavanoids"} data={createTableData(flavanoids)} />
    </div>
}