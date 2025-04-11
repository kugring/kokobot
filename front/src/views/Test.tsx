import TableExample from "components/Example/TableExample"
import BaseLayout from "layouts/BaseLayout"
import styled from "styled-components"
const Test = () => {
    return (
        <BaseLayout>
            <Container>
                <TableExample />
            </Container>
        </BaseLayout>
    )
}


// {/* <GaugeChartExample /> */}
// {/* <CalendarExample /> */}

export default Test

const Container = styled.div`
    display: flex;
    width: 340px;
`
