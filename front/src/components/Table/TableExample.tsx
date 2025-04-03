import styled from "styled-components"
import TableComponent from './TableComponent';
import farmStatusData from 'mocks/farm-status.json';
import { FARM_STATUS_COLUMNS } from 'constants/table_constants';

const TableExample = () => {
    const data = farmStatusData;

    return (
        <Container>
            <TableComponent
                data={data}
                columns={FARM_STATUS_COLUMNS}
                tableTitle="상세 데이터"
            />
        </Container>
    );
};

export default TableExample;

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`; 