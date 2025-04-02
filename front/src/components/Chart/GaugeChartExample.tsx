import GaugeChart from "./GaugeChart"
import styled from "styled-components"

const GaugeChartExample = () => {
    return (
        <Container>
            <GaugeChart percentage={20} />
            <GaugeChart percentage={45} />
            <GaugeChart percentage={90} />
        </Container>
    )
}

export default GaugeChartExample

const Container = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
`
