import styled from "styled-components"
import TableComponent from "../Table/TableComponent"
import farmStatusData from "mocks/farm-status.json"
import { FARM_STATUS_COLUMNS } from "constants/table/columns/farm-status";

const TableExample = () => {
    const statusData = farmStatusData

    return (
        <>
            <Container>
                <TableComponent title="하우스 상태" data={statusData} columns={FARM_STATUS_COLUMNS} />
            </Container>
        </>
    )
}

export default TableExample

const Container = styled.div`
    width: 1000px;
    height: 500px;
`
