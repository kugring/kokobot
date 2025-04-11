import styled from "styled-components"
import { RiWaterPercentFill } from "react-icons/ri"
import { GiChicken } from "react-icons/gi"
import { TbEggs } from "react-icons/tb"
import { FaArrowRightLong, FaTemperatureLow } from "react-icons/fa6"
import TrendCount from "components/Text/TrendCount"
import LageCount from "components/Text/LageCount"

interface HouseStatus {
    temperature: {
        current: number
        unit: string
    }
    humidity: {
        current: number
        unit: string
    }
}

interface HouseStats {
    chickens: {
        count: number
        trend: number
    }
    eggs: {
        count: number
        trend: number
    }
}

interface HouseCardProps {
    id: string
    name: string
    status: HouseStatus
    stats: HouseStats
    onDetailClick?: (id: string) => void
}

// 환경 정보를 표시하는 서브 컴포넌트
const EnvironmentInfo = ({ icon: Icon, value, unit, color }: { icon: React.ElementType; value: number; unit: string; color: string }) => (
    <EnvironmentBox>
        <Icon size={20} color={color} />
        <LageCount value={value} unit={unit} color={color} size={24} />
    </EnvironmentBox>
)

// 통계 정보를 표시하는 서브 컴포넌트
const StatInfo = ({ icon: Icon, count, trend }: { icon: React.ElementType; count: number; trend: number }) => (
    <StateBox>
        <Left>
            <Icon size={20} color="rgba(0, 0, 0, 0.5)" />
            <LageCount value={count} color="#666" size={28} />
        </Left>
        <TrendCount tendCount={trend} />
    </StateBox>
)

const HouseCard = ({ id, name, status, stats, onDetailClick }: HouseCardProps) => {
    const handleDetailClick = () => {
        onDetailClick?.(id)
    }

    return (
        <Container>
            <Header>
                <Title>{name}</Title>
                <DetailButton onClick={handleDetailClick}>
                    <FaArrowRightLong size={16} color="#666" />
                </DetailButton>
            </Header>
            <Environment>
                <EnvironmentInfo icon={FaTemperatureLow} value={status.temperature.current} unit={status.temperature.unit} color="#22c55e" />
                <EnvironmentInfo icon={RiWaterPercentFill} value={status.humidity.current} unit={status.humidity.unit} color="#3b82f6" />
            </Environment>
            <FarmStats>
                <StatInfo icon={GiChicken} count={stats.chickens.count} trend={stats.chickens.trend} />
                <StatInfo icon={TbEggs} count={stats.eggs.count} trend={stats.eggs.trend} />
            </FarmStats>
        </Container>
    )
}

export default HouseCard

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 260px;
    height: 232px;
    padding: 12px;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 8px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`

const Header = styled.div`    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: #3b82f6;
    margin-left: 4px;
`

const DetailButton = styled.button`
    background-color: rgba(0, 0, 0, 0.1);
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.15);
    }
`
const Environment = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
`

const EnvironmentBox = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px;
    gap: 8px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.02);
    }
`

const FarmStats = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
`

const StateBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 4px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.02);
    }
`

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`


