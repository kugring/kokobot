import { DEFAULT_COLORS } from "../constants/char/gauge_constants";
import { GaugeBaseline, GaugeStatusTexts } from "../types/gaugeChart_type";

interface GaugeStatus {
    color: string;
    text: string;
}

export const calculateGaugeStatus = ( 
    percentage: number,
    baseline: GaugeBaseline,
    statusTexts: GaugeStatusTexts,
    reverseColorScale: boolean
): GaugeStatus => {
    if (reverseColorScale) {
        // 낮을수록 위험한 경우
        if (percentage <= baseline.warning) return { color: DEFAULT_COLORS.danger, text: statusTexts.danger };
        if (percentage <= baseline.danger) return { color: DEFAULT_COLORS.warning, text: statusTexts.warning };
        return { color: DEFAULT_COLORS.safe, text: statusTexts.safe };
    } else {
        // 높을수록 위험한 경우
        if (percentage >= baseline.danger) return { color: DEFAULT_COLORS.danger, text: statusTexts.danger };
        if (percentage >= baseline.warning) return { color: DEFAULT_COLORS.warning, text: statusTexts.warning };
        return { color: DEFAULT_COLORS.safe, text: statusTexts.safe };
    }
}; 