export interface GaugeBaseline {
    low: number;    // 낮음 기준 (퍼센트)
    medium: number; // 중간 기준 (퍼센트)
    high: number;   // 높음 기준 (퍼센트)
}

export interface GaugeStatusTexts {
    high: string;
    medium: string;
    low: string;
}


export interface StyleColors {
    low: string;    // 낮음 상태 색상
    medium: string; // 중간 상태 색상
    high: string;   // 높음 상태 색상
}