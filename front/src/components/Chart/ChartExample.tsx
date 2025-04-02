import styled from "styled-components"
import ChartComponent from './ChartComponent';
import { CHART_COLORS, sampleData } from '../../constants/table_constants';

const ChartExample = () => {
    return (
        <Container>
            <ChartComponent
                data={sampleData}
                chartColors={CHART_COLORS}
                chartTitle="매출 및 이익 현황"
            />
        </Container>
    );
};

export default ChartExample;

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`; 