import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go"
import styled from "styled-components"

const TrendCount = ({ tendCount }: { tendCount?: number }) => {
    if (!tendCount) return null

    const isPositive = tendCount > 0
    const color = isPositive ? "#22c55e" : "#ff4d4f"
    const Icon = isPositive ? GoArrowUpRight : GoArrowDownLeft

    return (
        <Trend $color={color}>
            <Icon size={18} />
            <Text>{Math.abs(tendCount)}</Text>
        </Trend>
    )
}

export default TrendCount

const Trend = styled.div<{ $color: string }>`
    display: flex;
    align-items: center;
    padding: 4px;
    color: ${(props) => props.$color};
    font-size: 18px;
    font-weight: 600;

    svg {
        color: ${(props) => props.$color};
    }
`

const Text = styled.div`
    min-width: 24px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
`
