import TotalHouseCard from "./TotalHouseCard"
import styled from "styled-components"
import { IoMdRefresh } from "react-icons/io"
import EggGradeChart from "./EggGradeChart"

const TotalHouseBox = () => {
    return (
        <Container>
            <TitleBox>
                <Right>
                    <Title>최근 총 데이터</Title>
                    <Text>2024-04-16</Text>
                </Right>
                <RefreshButton>
                    <IoMdRefresh color="#777777" size={26} />
                </RefreshButton>
            </TitleBox>
            <CardBox>
                <TotalHouseCard img="/assets/img/ProductionIcon.png" count={4} caption="하우스 수" />
                <TotalHouseCard img="/assets/img/chicken.png" count={152912} caption="산란계 수" tendCount={-26} />
                <TotalHouseCard img="/assets/img/egg.png" count={77173} caption="계란 수" tendCount={17} />
                <EggGradeChart />
            </CardBox>
        </Container>
    )
}

export default TotalHouseBox

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 336px;
    max-height: 480px;
    padding: 24px;
    box-sizing: border-box;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
`

const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 8px;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
`

const Text = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: #aaa; /* 희미하고 연한 회색 */
    margin-top: -2px;
`

const RefreshButton = styled.div`
    width: 36px;
    height: 36px;
    background-color: #f0f0f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scaleX(-1) rotate(-40deg);
`

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
`
