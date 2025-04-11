import { createColumnHelper } from "@tanstack/react-table"
import { TableColumnSetting } from "../types/components/table_type"
import { FormatOptions, FormatterType, UnitPosition, UnitType, DateFormatType } from "types"

/**
 * 테이블 컬럼 생성
 */
export const createTableColumns = <T extends object>(columns: TableColumnSetting[]) => {
    const columnHelper = createColumnHelper<T>()

    return columns.map((column) => {
        return columnHelper.accessor((row: T) => row[column.accessorKey as keyof T] as any, {
            id: column.accessorKey,
            header: column.header,
            cell: (info) => {
                if (column.chart) {
                    return column.chart(info.getValue(), formatValue(info.getValue(), column.formatOptions))
                }
                return formatValue(info.getValue(), column.formatOptions)
            },
        })
    })
}

/**
 * 값을 포맷팅하는 범용 함수
 */
export const formatValue = (value: any, options?: FormatOptions): string => {
    if (value == null) return ""
    if (!options) return String(value)

    const { type, unit = UnitType.None, unitPosition = UnitPosition.Suffix, dateFormat, decimalPlaces = 0 } = options

    // 포맷 적용
    let formattedValue = ""
    switch (type) {
        case FormatterType.Number:
        case FormatterType.Currency:
        case FormatterType.Weight:
            formattedValue = formatWithDecimals(value, decimalPlaces)
            break
        case FormatterType.Percentage:
            formattedValue = formatPercentage(value, decimalPlaces)
            break
        case FormatterType.Date:
        case FormatterType.DateTime:
            formattedValue = formatDate(value, dateFormat)
            break
        case FormatterType.Week:
            formattedValue = `${value}주령`
            break
        case FormatterType.Temperature:
            formattedValue = typeof value === "string" && value.includes("|") ? value : `${value}℃`
            break
        default:
            formattedValue = String(value)
    }

    // 단위 추가
    if (unit && unit.length > 0) {
        return unitPosition === UnitPosition.Prefix ? `${unit}${formattedValue}` : `${formattedValue}${unit}`
    }

    return formattedValue
}

/**
 * 테이블 검색을 원본 Data 값에서 단위, 포맷팅 값 모두 검색
 */
export const createTableFilter = (columns: TableColumnSetting[]) => {
    return (row: any, columnId: string, filterValue: string) => {
        const value = row.getValue(columnId)
        if (value == null) return false

        const searchValue = String(filterValue).toLowerCase()
        const column = columns.find((col) => col.accessorKey === columnId)
        const valuesToSearch = [String(value).toLowerCase(), column?.formatOptions ? String(formatValue(value, column.formatOptions)).toLowerCase() : ""]

        return valuesToSearch.some((v) => v.includes(searchValue))
    }
}

/**
 * 숫자를 지정된 소수점 자릿수로 포맷팅
 */
const formatWithDecimals = (value: number, decimalPlaces: number = 0): string => {
    return value.toLocaleString("ko-KR", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
    })
}

/**
 * 백분율 형식으로 포맷팅
 */
const formatPercentage = (value: number, decimalPlaces: number = 0): string => {
    return value.toLocaleString("ko-KR", {
        style: "percent",
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
    })
}

/**
 * 날짜 형식으로 포맷팅
 */
const formatDate = (value: string | Date, format?: DateFormatType | string): string => {
    if (!value) return '';
    
    try {
        const date = typeof value === "string" ? new Date(value) : value;
        
        if (isNaN(date.getTime())) {
            return '';
        }
        
        if (!format) {
            return date.toLocaleDateString("ko-KR");
        }
        
        // 연, 월, 일, 시, 분 추출
        const year = date.getFullYear();
        const shortYear = String(year).slice(-2); // 연도의 마지막 2자리
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        // format에 따른 변환
        switch (format) {
            case DateFormatType.YY_MM_DD:
                return `${shortYear}-${month}-${day}`;
            case DateFormatType.YYYY_MM_DD:
                return `${year}-${month}-${day}`;
            case DateFormatType.YYYY_MM_DD_HH_MM:
                return `${year}-${month}-${day} ${hours}:${minutes}`;
            case DateFormatType.MM_DD:
                return `${month}-${day}`;
            case DateFormatType.HH_MM:
                return `${hours}:${minutes}`;
            default:
                return date.toISOString().split('T')[0];
        }
    } catch (error) {
        console.error('Date formatting error:', error);
        return '';
    }
}
