import "react-circular-progressbar/dist/styles.css"
import styled from "styled-components"
import { calculateGaugeStatus } from "utils/gauge_utils"
import { GaugeBaseline, GaugeStatusTexts } from "types"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { CIRCLE_RATIO, GAUGE_DEFAULT_PROPS } from "../../constants/char/gauge_constants"
import { StyleColors } from "types/components"

interface GaugeChartProps {
    value: number
    min?: number
    max?: number
    formatValue?: string
    reverseColor?: boolean
    baseline?: GaugeBaseline
    statusTexts?: GaugeStatusTexts
    styleColors?: StyleColors
}
const size = 30
const width = `${size}px`
const height = `${size * 0.7}px`

const GaugeChart = ({
    value,
    min = 0,
    max = 100,
    formatValue,
    baseline = GAUGE_DEFAULT_PROPS.baseline,
    statusTexts = GAUGE_DEFAULT_PROPS.statusTexts,
    styleColors = GAUGE_DEFAULT_PROPS.styleColors,
    reverseColor = GAUGE_DEFAULT_PROPS.reverseColor,
}: GaugeChartProps) => {
    // 상대적 백분율 계산 (min-max 범위에서 value의 위치)
    const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100))

    const needleAngle = -111 + percentage * 2.3 * (1 - (percentage / 100) * 0.04) // 값이 정확하진 않음
    const { color: gaugeColor, text: statusText } = calculateGaugeStatus(value, styleColors, baseline, statusTexts, reverseColor)

    // let addRotation = 0
    // if (baseline.low < value && value < baseline.high) {
    //     const minPercentage = (baseline.low - min) / (max - min)
    //     addRotation = 220 * minPercentage
    //     console.log(minPercentage)
    // }

    return (
        <ChartContainer>
            <GaugeWrapper>
                {/* 백그라운드용 고정된 원형 그래프 */}
                <BackgroundGauge>
                    <CircularProgressbar
                        value={100}
                        strokeWidth={24}
                        circleRatio={CIRCLE_RATIO}
                        styles={buildStyles({
                            strokeLinecap: "butt",
                            rotation: 250 / 360,
                            pathTransitionDuration: 0,
                            pathColor: "#eee",
                            trailColor: "transparent",
                        })}
                    />
                </BackgroundGauge>
                
                {/* 실제 값 표시용 원형 그래프 */}
                <CircularProgressbar
                    value={percentage}
                    strokeWidth={24}
                    circleRatio={CIRCLE_RATIO}
                    styles={buildStyles({
                        strokeLinecap: "butt",
                        rotation: 250 / 360,
                        pathTransitionDuration: 1,
                        pathColor: gaugeColor,
                        trailColor: "transparent",
                    })}
                />
                <NeedleContainer $angle={needleAngle}>
                    <Needle color={gaugeColor} />
                    <NeedleCenter />
                </NeedleContainer>
            </GaugeWrapper>
            {formatValue && (
                <StatusText color={gaugeColor}>
                    {statusText} ({formatValue})
                </StatusText>
            )}
        </ChartContainer>
    )
}

export default GaugeChart
const ChartContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: ${` ${8 + size * 0.1}px`};
    height: ${height};
    overflow: hidden;
`

const GaugeWrapper = styled.div`
    width: ${width};
    height: ${width};
    overflow: visible;
    position: relative;
    z-index: 2;

    .CircularProgressbar {
        width: 100%;
        vertical-align: top;
    }
`

const NeedleContainer = styled.div<{ $angle: number }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(${({ $angle }) => $angle}deg);
    transition: transform 1s ease-in-out;
    width: 100%;
    height: 100%;
`

const Needle = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3%;
    background: #525252;
    border-radius: 5px;
    z-index: 5;
    height: calc(50%);
`

const NeedleCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10%;
    height: 10%;
    background: #5a5e61;
    border-radius: 50%;
    z-index: 6;
`

const StatusText = styled.span<{ color: string }>`
    display: flex;
    align-items: center;
    color: ${(props) => props.color};
    font-weight: 500;
    font-size: ${` ${10 + size * 0.2}px`};
`

const BackgroundGauge = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
`;
