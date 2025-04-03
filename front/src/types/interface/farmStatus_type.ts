
// 농장현황 테이블 데이터 타입
export interface FarmStatus {
    henHouseName: string;     // 계사명
    currentWeek: number;      // 현재 주령
    species: string;          // 품종
    chickCount: number;       // 입추 수수
    survivalRate: string;     // 생존율
    temperature: number;      // 온도
    humidity: number;         // 습도
    layingRate: string;       // HD산란율
    avgEggWeight: string;     // 평균 난중
    dailyProduction: number;  // 금일 생산량
}