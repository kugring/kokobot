import GaugeChart from "./GaugeChart"
import styled from "styled-components"

const GaugeChartExample = () => {
    return (
        <Container>
            <GaugeChart value={20} />
            <GaugeChart value={70} min={50} max={100} />
            <GaugeChart value={220000} min={0} max={300000} />
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
