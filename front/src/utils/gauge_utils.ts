import React from "react";
import { GaugeBaseline, GaugeStatusTexts, StyleColors } from "../types/components/gaugeChart_type";
import GaugeChart from "components/Chart/GaugeChart";

export const calculateGaugeStatus = (
    value: number,
    styleColors: StyleColors,
    baseline: GaugeBaseline,
    statusTexts: GaugeStatusTexts,
    reverseColor: boolean = false
) => {
    // 값이 min과 max 사이의 어느 위치에 있는지 퍼센트로 계산
    const status = value <= baseline.low ? 'low' : value >= baseline.high ? 'high' : 'medium';

    // 퍼센트에 따라 상태 결정
    if (status === 'low') {
        return {
            color: reverseColor ? styleColors.high : styleColors.low,
            text: statusTexts.low
        };
    } else if (status === 'medium') {
        return {
            color: styleColors.medium,
            text: statusTexts.medium
        };
    } else {
        return {
            color: reverseColor ? styleColors.low : styleColors.high,
            text: statusTexts.high
        };
    }
}; 

export function getGaugeChart(value: string, options?: {}) {
    return React.createElement(GaugeChart, {
      value: parseInt(value, 10),
      ...options
    });
  }