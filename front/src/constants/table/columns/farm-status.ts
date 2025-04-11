import { FormatterType, TableColumnSetting, UnitType } from "types";
import { getGaugeChart } from "utils/gauge_utils";

// 농장현황 테이블 컬럼 정의
export const FARM_STATUS_COLUMNS: TableColumnSetting[] = [
    {
      accessorKey: 'henHouseName',
      header: '계사명',
      formatOptions: {
        type: FormatterType.Default,
      },
    },
    {
      accessorKey: 'currentWeek',
      header: '현재 주령',
      formatOptions: {
        type: FormatterType.Week,
      },
    },
    {
      accessorKey: 'species',
      header: '품종',
    },
    {
      accessorKey: 'chickCount',
      header: '입추 수수',
      formatOptions: {
        type: FormatterType.Number,
        unit: UnitType.Count,
      },
    },
    {
      accessorKey: 'temperature',
      header: '온도',
      formatOptions: {
        type: FormatterType.Temperature,
      },
    },
    {
      accessorKey: 'humidity',
      header: '습도',
      formatOptions: {
        type: FormatterType.Default,
      },
    },
    {
      accessorKey: 'layingRate',
      header: 'HD산란율',
      formatOptions: {
        type: FormatterType.Default,
      },
    },
    {
      accessorKey: 'avgEggWeight',
      header: '평균 난중',
      formatOptions: {
        type: FormatterType.Default,
      },
    },
    {
      accessorKey: 'dailyProduction',
      header: '금일 생산량',
      formatOptions: {
        type: FormatterType.Number,
        unit: UnitType.Egg,
      },
    },
    {
      accessorKey: 'survivalRate',
      header: '생존율',
      chart: (value: string, formatValue?: string) => {
        // 새로운 GaugeChart 사용
        return getGaugeChart(value, { formatValue, reverseColor: false });
      },
    },
  ];
  