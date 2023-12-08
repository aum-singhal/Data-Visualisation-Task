import { Table } from "../components/table/table"
import { createTableData } from "../services/data-processing-methods"

export const ShowGammaTable = ({gamma}:any) => {
    return <div>
        <Table measure={"Gamma"} data={createTableData(gamma)} />
    </div>
}