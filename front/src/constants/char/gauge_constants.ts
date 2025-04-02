import { GaugeBaseline, GaugeStatusTexts } from "../../types"

// 220도 모형을 위한 계산
export const CIRCLE_RATIO = 220 / 360

// 기본 색상 정의
export const DEFAULT_COLORS = {
    safe: "#4CAF50", // 녹색
    warning: "#FFC107", // 노란색
    danger: "#F44336", // 빨간색
}

export const GAUGE_DEFAULT_BASELINE: GaugeBaseline = {
    warning: 30,
    danger: 60,
} as const


export const GAUGE_DEFAULT_STATUS_TEXTS: GaugeStatusTexts = {
    danger: '위험',
    warning: '경고',
    safe: '정상'
} as const

export const GAUGE_DEFAULT_PROPS = {
    showText: true,
    reverseColorScale: true,
    baseline: GAUGE_DEFAULT_BASELINE,
    statusTexts: GAUGE_DEFAULT_STATUS_TEXTS
} as const
