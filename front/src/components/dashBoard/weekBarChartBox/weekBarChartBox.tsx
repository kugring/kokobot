import styled from "styled-components"
import WeekBarChart from "./weekBarChart"
import weekStatsData from "mocks/week-stats.json"

const WeekBarChartBox = () => {
    const houses = Object.keys(weekStatsData)

    return (
        <Container>
            <TitleBox>
                <Title>주령 별 그래프</Title>
                <ChartDotBox>
                    <ChartDot>
                        <Dot color="#1BA6E1"></Dot>
                        <Text>산란계 수</Text>
                    </ChartDot>
                    <ChartDot>
                        <Dot color="#9D77F1"></Dot>
                        <Text>계란 수</Text>
                    </ChartDot>
                </ChartDotBox>
            </TitleBox>
            <ChartsContainer>
                {houses.map((houseName) => (
                    <WeekBarChart key={houseName} houseName={houseName} />
                ))}
            </ChartsContainer>
        </Container>
    )
}

export default WeekBarChartBox

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 8px;
`

const TitleBox = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    padding-top: 16px;
    padding-left: 20px;
`

const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
`

const ChartDotBox = styled.div`
    display: flex;
    gap: 8px;
`

const ChartDot = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
`

const Dot = styled.div<{ color: string }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
`

const Text = styled.div`
    font-size: 12px;
    font-weight: 600;
`

const ChartsContainer = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
`
