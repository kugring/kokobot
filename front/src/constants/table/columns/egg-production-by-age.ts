import { FormatterType, DateFormatType } from "types/enums";
import { TableColumnSetting } from "types";
import { getGaugeChart } from "utils/gauge_utils";

// 주령별 산란 생산 테이블 컬럼 정의
export const EGG_PRODUCTION_BY_AGE_COLUMNS: TableColumnSetting[] = [
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
      type: FormatterType.Default,
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
    header: '생존율(%)',
    formatOptions: {
      type: FormatterType.Percentage,
    },
    chart: (value: string, formatValue?: string) => {
      return getGaugeChart(value, { formatValue });
    },
  },
  {
    accessorKey: 'jumboEgg',
    header: '왕란',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'extraLargeEgg',
    header: '특란',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'largeEgg',
    header: '대란',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'mediumEgg',
    header: '중란',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'smallEgg',
    header: '소란',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'peeweeEgg',
    header: '경란',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'brokenEgg',
    header: '파란',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'others',
    header: '기타',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'etc',
    header: '비고',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'totalEggs',
    header: '총 계란 수',
    formatOptions: {
      type: FormatterType.Number,
    },
  },
  {
    accessorKey: 'hdRate',
    header: 'HD율(%)',
    formatOptions: {
      type: FormatterType.Percentage,
    },
    chart: (value: string, formatValue?: string) => {
      return getGaugeChart(value, { formatValue });
    },
  },
  {
    accessorKey: 'standardRate',
    header: '규격품율(%)',
    formatOptions: {
      type: FormatterType.Percentage,
    },
    chart: (value: string, formatValue?: string) => {
      return getGaugeChart(value, { formatValue });
    },
  },
  {
    accessorKey: 'avgWeight',
    header: '평균 중량(g)',
    formatOptions: {
      type: FormatterType.Number,
      decimalPlaces: 1,
    },
  },
  {
    accessorKey: 'standardWeight',
    header: '표준 중량(g)',
    formatOptions: {
      type: FormatterType.Number,
      decimalPlaces: 1,
    },
  },
  {
    accessorKey: 'extraLargeRatio',
    header: '특란 비율(%)',
    formatOptions: {
      type: FormatterType.Number,
    },
    chart: (value: string, formatValue?: string) => {
      return getGaugeChart(value, { formatValue });
    },
  },
];
