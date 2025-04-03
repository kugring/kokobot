import { createColumnHelper } from '@tanstack/react-table';
import { TableColumnSetting } from '../types/components/table_type';
import { FormatOptions, FormatterType, UnitPosition, UnitType } from "types";

export const createTableColumns = <T extends object>(columns: TableColumnSetting[]) => {
  const columnHelper = createColumnHelper<T>();
  
  return columns.map(column => {
    return columnHelper.accessor((row: T) => row[column.accessorKey as keyof T] as any, {
      id: column.accessorKey,
      header: column.header,
      cell: info => {
        if (typeof column.formatter === 'function') {
          return column.formatter(info.getValue(), formatValue(info.getValue(), column.formatOptions));
        }
        return formatValue(info.getValue(), column.formatOptions);
      },
    });
  });
};


/**
 * 값을 포맷팅하는 범용 함수
 */
export const formatValue = (value: any, options?: FormatOptions): string => {
  if (value == null) return '';
  if (!options) return String(value);

  const { type, unit = UnitType.None, unitPosition = UnitPosition.Suffix, dateFormat, decimalPlaces = 0 } = options;
  
  // 포맷 적용
  let formattedValue = '';
  switch (type) {
    case FormatterType.Number:
    case FormatterType.Currency:
    case FormatterType.Weight:
      formattedValue = formatWithDecimals(value, decimalPlaces);
      break;
    case FormatterType.Percentage:
      formattedValue = formatPercentage(value, decimalPlaces);
      break;
    case FormatterType.Date:
    case FormatterType.DateTime:
      formattedValue = formatDate(value, dateFormat);
      break;
    case FormatterType.Week:
      formattedValue = `${value}일령`;
      break;
    case FormatterType.Temperature:
      formattedValue = typeof value === 'string' && value.includes('|') 
        ? value 
        : `${value}℃`;
      break;
    default:
      formattedValue = String(value);
  }

  // 단위 추가
  if (unit && unit.length > 0) {
    return unitPosition === UnitPosition.Prefix
      ? `${unit}${formattedValue}`
      : `${formattedValue}${unit}`;
  }

  return formattedValue;
};

/**
 * 숫자를 지정된 소수점 자릿수로 포맷팅
 */
const formatWithDecimals = (value: number, decimalPlaces: number = 0): string => {
  return value.toLocaleString('ko-KR', { 
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces 
  });
};

/**
 * 백분율 형식으로 포맷팅
 */
const formatPercentage = (value: number, decimalPlaces: number = 0): string => {
  return value.toLocaleString('ko-KR', {
    style: 'percent',
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces 
  });
};

/**
 * 날짜 형식으로 포맷팅
 */
const formatDate = (value: string | Date, format?: string): string => {
  const date = typeof value === 'string' ? new Date(value) : value;
  if (format) {
    // format 문자열에 따라 날짜 형식 변환
    return date.toISOString().split('T')[0]; // 간단한 예시 구현
  }
  return date.toLocaleDateString('ko-KR');
};
