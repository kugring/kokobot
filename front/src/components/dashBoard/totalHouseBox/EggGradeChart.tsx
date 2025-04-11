import styled from "styled-components"
import eggGradeData from "mocks/egg-grade.json";
const EggGradeChart = () => {

    const data = eggGradeData;
    const maxValue = Math.max(...data.map(item => item.value));

    return (
        <Container>
            {data.map((item, index) => (
                <BarItem key={index}>
                    <Label>{item.label}</Label>
                    <BarContainer>
                        <Bar $width={(item.value / maxValue) * 100} $opacity={1 - (index / data.length)} />
                    </BarContainer>
                    <Value>{item.value.toLocaleString()}</Value>
                </BarItem>
            ))}
        </Container>
    );
};

export default EggGradeChart;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
`; 

const BarItem = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const Label = styled.span`
    width: 42px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: #666;
`;

const BarContainer = styled.div`
    flex: 1;
    height: 12px;
    background-color: #f8f8f8;
    border-radius: 1px;
    overflow: hidden;
`;

const Bar = styled.div<{ $width: number, $opacity: number }>`
    height: 100%;
    width: ${props => props.$width}%;
    background-color: #4a90e2;
    border-radius: 4px;
    transition: width 0.3s ease;
    opacity: ${props => props.$opacity};
`;

const Value = styled.span`
    font-size: 14px;
    color: #333;
    min-width: 60px;
    text-align: right;
`; 