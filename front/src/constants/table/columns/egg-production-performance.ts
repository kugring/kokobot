import { FormatterType, DateFormatType } from "types/enums";
import { TableColumnSetting } from "types";
import { getGaugeChart } from "utils/gauge_utils";

// 산란 생산 성적 테이블 컬럼 정의
export const EGG_PRODUCTION_PERFORMANCE_COLUMNS: TableColumnSetting[] = [
  {
    accessorKey: 'date',
    header: '날짜',
    formatOptions: {
      type: FormatterType.Date,
      dateFormat: DateFormatType.YYYY_MM_DD
    },
  },
  {
    accessorKey: 'traceNumber',
    header: '이력번호',
    formatOptions: {
      type: FormatterType.Default,
    },
  },
  {
    accessorKey: 'ageWeeks',
    header: '주령',
    formatOptions: {
      type: FormatterType.Week,
    },
  },
  {
    accessorKey: 'death',
    header: '폐사',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'transfer',
    header: '이적',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'added',
    header: '추가',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'shipment',
    header: '출하',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'survivalCount',
    header: '생존수',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'survivalRate',
    header: '생존율',
    formatOptions: {
      type: FormatterType.Percentage,
    },
    chart: (value: string, formatValue?: string) => {
      // 백분율 문자열에서 숫자만 추출
      return getGaugeChart(value, { formatValue: value });
    },
  },
  {
    accessorKey: 'hhLayingCount',
    header: 'HH산란수',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'hhLayingRate',
    header: 'HH산란율',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'hdLayingCount',
    header: 'HD산란수',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'hdLayingRate',
    header: 'HD산란율',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'cumulativeDeathRate',
    header: '누적 폐사율',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'cumulativeHHLaying',
    header: '누적 HH산란수',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'cumulativeHDLaying',
    header: '누적 HD산란수',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'cumulativeTotalLaying',
    header: '누적 총 산란수',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
];