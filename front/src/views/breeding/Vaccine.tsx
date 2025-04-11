import BaseLayout from "layouts/BaseLayout"
import styled from "styled-components"

const Vaccine = () => {
    return (
        <BaseLayout>
            <Container>
            {/* <TableComponent title="약품 관리" data={statusData} columns={FARM_STATUS_COLUMNS} /> */}
            </Container>
        </BaseLayout>
    )
}

export default Vaccine
    

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`

