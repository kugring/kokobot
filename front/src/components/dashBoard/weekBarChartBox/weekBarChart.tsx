import styled from 'styled-components';
import weekStatsData from 'mocks/week-stats.json';

interface WeekBarChartProps {
    houseName: string;
}

const WeekBarChart = ({ houseName }: WeekBarChartProps) => {
    const data = weekStatsData[houseName as keyof typeof weekStatsData];
    const maxValue = Math.max(...data.map(item => Math.max(item.chickens, item.eggs)));

    return (
        <Container>
            <HouseTitle>{houseName}</HouseTitle>
            <ContentContainer>
                <ChartContainer>
                    {data.map((item, index) => (
                        <BarGroup key={index}>
                            <WeekLabel>{item.week}</WeekLabel>
                            <BarContainer>
                                <ChickenBar $width={(item.chickens / maxValue) * 100} />
                                <EggBar $width={(item.eggs / maxValue) * 100} />
                            </BarContainer>
                        </BarGroup>
                    ))}
                </ChartContainer>
                <ValuesContainer>
                    {data.map((item, index) => (
                        <ValueGroup key={index}>
                            <Value color="#1BA6E1">{item.chickens.toLocaleString()}</Value>
                            <Value color="#9D77F1">{item.eggs.toLocaleString()}</Value>
                        </ValueGroup>
                    ))}
                </ValuesContainer>
            </ContentContainer>
        </Container>
    );
};

export default WeekBarChart;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 260px;
    padding: 12px;
    gap: 12px;
    box-sizing: border-box;
    background: white;
    border-radius: 8px;
`;

const ContentContainer = styled.div`
    display: flex;
    gap: 16px;
`;

const HouseTitle = styled.div`
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #333;
`;

const ChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
`;

const BarGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const WeekLabel = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #333;
`;

const BarContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Bar = styled.div<{ $width: number }>`
    height: 16px;
    width: ${props => props.$width}%;
    border-radius: 2px;
    transition: width 0.3s ease;
`;

const ChickenBar = styled(Bar)`
    background-color: #1BA6E1;
`;

const EggBar = styled(Bar)`
    background-color: #9D77F1;
`;

const ValuesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ValueGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 36px;
`;

const Value = styled.div<{ color: string }>`
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.color};
    width: 52px;
    text-align: right;
`;           