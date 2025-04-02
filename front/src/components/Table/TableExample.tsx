import styled from "styled-components"
import TableComponent from './TableComponent';
import { TABLE_STYLES, TABLE_COLUMNS, sampleData } from '../../constants/table_constants';

const TableExample = () => {
    return (
        <Container>
            <TableComponent
                data={sampleData}
                columns={TABLE_COLUMNS}
                tableStyles={TABLE_STYLES}
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