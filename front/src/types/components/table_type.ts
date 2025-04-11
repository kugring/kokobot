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
    chart?: (value: any, formatValue?: string) => ReactNode
    width?: string | number
    align?: "left" | "center" | "right"
}


