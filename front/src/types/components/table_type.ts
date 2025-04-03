import { ReactNode } from "react"
import { DateFormatType, FormatterType, UnitPosition, UnitType } from "types/enums"

// 포맷 옵션 타입
export interface FormatOptions {
    type: FormatterType // 포맷터 유형
    unit?: UnitType // 단위
    unitPosition?: UnitPosition // 단위 위치
    dateFormat?: DateFormatType // 날짜 포맷
    decimalPlaces?: number // 소수점 자릿수
}

// 테이블 컬럼 정의 타입 (제네릭)
export interface TableColumnSetting {
    accessorKey: string
    header: string
    formatOptions?: FormatOptions // 포맷 옵션
    formatter?: (value: any, formatValue?: string) => ReactNode
    width?: string | number
    align?: "left" | "center" | "right"
}

// 테이블 스타일 정의 타입
export interface TableStyles {
    headerBackground?: string;     // 헤더 배경색
    headerHoverBackground?: string; // 헤더 호버 시 배경색
    rowHoverBackground?: string;    // 행 호버 시 배경색
    borderColor?: string;           // 테이블 테두리 색상
    cellPadding?: string;          // 셀 패딩 (옵션)
    fontSize?: string;             // 폰트 크기 (옵션)
    textColor?: string;            // 텍스트 색상 (옵션)
    headerTextColor?: string;      // 헤더 텍스트 색상 (옵션)
}

