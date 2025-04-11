import { FormatterType,  DateFormatType } from "types/enums";
import { TableColumnSetting } from "types";
import { getGaugeChart } from "utils/gauge_utils";

// 산란 난중 분석 테이블 컬럼 정의
export const EGG_WEIGHT_ANALYSIS_COLUMNS: TableColumnSetting[] = [
  {
    accessorKey: 'date',
    header: '측정일',
    formatOptions: {
      type: FormatterType.Date,
      dateFormat: DateFormatType.YYYY_MM_DD
    },
  },
  {
    accessorKey: 'henHouse',
    header: '측정동',
    formatOptions: {
      type: FormatterType.Default,
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
    accessorKey: 'firstLayDate',
    header: '시산일령',
    formatOptions: {
      type: FormatterType.Date,
      dateFormat: DateFormatType.YYYY_MM_DD
    },
  },
  {
    accessorKey: 'peakLayDate',
    header: '초산일령',
    formatOptions: {
      type: FormatterType.Date,
      dateFormat: DateFormatType.YYYY_MM_DD
    },
  },
  {
    accessorKey: 'hdLayingRate',
    header: 'HD산란율',
    formatOptions: {
      type: FormatterType.Default,
    },
  },
  {
    accessorKey: 'hdCumulativeEggs',
    header: 'HD누계산란수',
    formatOptions: {
      type: FormatterType.Default,
    },
  },
  {
    accessorKey: 'hhCumulativeEggs',
    header: 'HH산란수',
    formatOptions: {
      type: FormatterType.Default,
    },
  },
  {
    accessorKey: 'deathRate',
    header: '폐사율',
    formatOptions: {
      type: FormatterType.Percentage,
    },
    chart: (value: string, formatValue?: string) => {
      return getGaugeChart(value, { formatValue, reverseColor: true });
    },
  },
  {
    accessorKey: 'bodyWeight',
    header: '체중',
    formatOptions: {
      type: FormatterType.Default,
    },
  },
  {
    accessorKey: 'dailyFeedIntake',
    header: '1일 수당 사료섭취량',
    formatOptions: {
      type: FormatterType.Default,
    },
  },
  {
    accessorKey: 'eggWeight',
    header: '난중',
    formatOptions: {
      type: FormatterType.Default,
    },
  },
  {
    accessorKey: 'hhCumulativeWeight',
    header: 'HH누계산란량',
    formatOptions: {
      type: FormatterType.Default,
    },
  },
  {
    accessorKey: 'extraLargeRatio',
    header: '왕특비',
    formatOptions: {
      type: FormatterType.Default,
    },
  },
];
