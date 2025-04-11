import { GaugeBaseline, GaugeStatusTexts } from "../../types"

// 220도 모형을 위한 계산
export const CIRCLE_RATIO = 220 / 360

// 기본 색상 정의
export const DEFAULT_COLORS = {
    danger: "#ff0000",
    warning: "#ffaa00",
    safe: "#00cc00",
} as const

export const GAUGE_DEFAULT_BASELINE: GaugeBaseline = {
    high: 30,
    medium: 60,
    low: 90,
} as const


export const GAUGE_DEFAULT_STATUS_TEXTS: GaugeStatusTexts = {
    high: '높음',
    medium: '중간',
    low: '낮음'
} as const

export const GAUGE_DEFAULT_PROPS = {
    showText: false,
    reverseColor: false,
    baseline: GAUGE_DEFAULT_BASELINE,
    statusTexts: GAUGE_DEFAULT_STATUS_TEXTS,
    styleColors: {
        low: DEFAULT_COLORS.danger,
        medium: DEFAULT_COLORS.warning,
        high: DEFAULT_COLORS.safe,
    }
} as const
