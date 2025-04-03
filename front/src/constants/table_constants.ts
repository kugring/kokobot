import { FormatterType, UnitType } from 'types';
import { TableColumnSetting, TableStyles } from '../types/components/table_type';
import GaugeChart from "../components/Chart/GaugeChart";
import React from 'react';

// 상수 정의  
export const CHART_COLORS = {
  survivalRate: '#8884d8',
  production: '#82ca9d',
};

export const DEFAULT_TABLE_STYLES: TableStyles = {
  headerBackground: '#e0f7fa', // 연한 파란색
  headerHoverBackground: '#b2ebf2', // 더 진한 파란색
  rowHoverBackground: '#f1f8e9', // 연한 녹색
  borderColor: '#cfd8dc', // 연한 회색
};

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
    accessorKey: 'survivalRate',
    header: '생존율',
    formatter: (value: string) => {
      // 새로운 GaugeChart 사용
      return getGaugeChart(value);
    },
  },
  {
    accessorKey: 'temperature',
    header: '온도',
    formatOptions: {
      type: FormatterType.Temperature,
    },
    formatter: (value: string, formatValue?: string) => {
      // 새로운 GaugeChart 사용
      return getGaugeChart(value, 
        { formatValue, 
          min: 10, 
          max: 38, 
          styleColors: { 
            low: '#0000ff', 
            medium: '#00cc00', 
            high: '#ff4f4f' 
          },
          baseline: {
            low: 19,
            high: 25
          },
          reverseColor: false
        });
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
];

function getGaugeChart(value: string, options?: {}) {
  return React.createElement(GaugeChart, {
    value: parseInt(value, 10),
    ...options
  });
}