import "react-circular-progressbar/dist/styles.css"
import styled from "styled-components"
import { calculateGaugeStatus } from "../../utils/gauge_utils"
import { GaugeBaseline, GaugeStatusTexts } from "../../types/gaugeChart_type"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { CIRCLE_RATIO, GAUGE_DEFAULT_PROPS } from "../../constants/char/gauge_constants"

interface GaugeChartProps {
    percentage: number
    showText?: boolean
    reverseColorScale?: boolean
    baseline?: GaugeBaseline
    statusTexts?: GaugeStatusTexts
}
const size = 30;
const width = `${size}px`;
const height = `${size * 0.7}px`;

const GaugeChart = ({
    percentage,
    showText = GAUGE_DEFAULT_PROPS.showText,
    baseline = GAUGE_DEFAULT_PROPS.baseline,
    statusTexts = GAUGE_DEFAULT_PROPS.statusTexts,
    reverseColorScale = GAUGE_DEFAULT_PROPS.reverseColorScale,
}: GaugeChartProps) => {
    const needleAngle = -111 + percentage * 2.3 * (1 - (percentage / 100) * 0.04)
    const { color: gaugeColor, text: statusText } = calculateGaugeStatus(percentage, baseline, statusTexts, reverseColorScale)
    return (
        <ChartContainer>
            <GaugeWrapper>
                <CircularProgressbar
                    value={percentage}
                    strokeWidth={24}
                    circleRatio={CIRCLE_RATIO}
                    styles={buildStyles({
                        strokeLinecap: "butt",
                        rotation: 0.695,
                        pathTransitionDuration: 1,
                        pathColor: gaugeColor,
                        trailColor: "#eee",
                    })}
                />
                <NeedleContainer angle={needleAngle}>
                    <Needle color={gaugeColor} />
                    <NeedleCenter />
                </NeedleContainer>
            </GaugeWrapper>
            {showText && (
                <StatusText color={gaugeColor}>
                    {statusText} ({percentage}%)
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

    .CircularProgressbar {
        width: 100%;
        vertical-align: top;
    }
`

const NeedleContainer = styled.div<{ angle: number }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(${({ angle }) => angle}deg);
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
    width: 80px;
    color: ${(props) => props.color};
    font-weight: 500;
    font-size: ${` ${10 + size * 0.2}px`};
`
