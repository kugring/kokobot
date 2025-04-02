import { DataItem, ColumnDefinition } from "../types/table_type";
import GaugeChart from "../components/Chart/GaugeChart";

// 상수 정의
export const CHART_COLORS = {
  sales: '#8884d8',
  profit: '#82ca9d',
};

export const TABLE_STYLES = {
  headerBackground: '#e0f7fa', // 연한 파란색
  headerHoverBackground: '#b2ebf2', // 더 진한 파란색
  rowHoverBackground: '#f1f8e9', // 연한 녹색
  borderColor: '#cfd8dc', // 연한 회색
};

// 랜덤 샘플 데이터 생성 함수
const generateRandomData = (numItems: number): DataItem[] => {
  const products = ['제품 A', '제품 B', '제품 C', '제품 D', '제품 E', '제품 F', '제품 G', '제품 H'];
  const data: DataItem[] = [];

  for (let i = 0; i < numItems; i++) {
    const randomIndex = Math.floor(Math.random() * products.length);
    const sales = Math.floor(Math.random() * 2000000) + 500000; // 500,000 ~ 2,500,000
    const profit = Math.floor(sales * (Math.random() * 0.3 + 0.1)); // 10% ~ 40% of sales
    const growth = Math.floor(Math.random() * 50); // 0% ~ 50%
    const gaugeValue = Math.floor(Math.random() * 100); // 0-100 사이의 랜덤 값

    data.push({
      name: products[randomIndex],
      sales,
      profit,
      growth,
      gaugeValue,
    });
  }

  return data;
};

// 샘플 데이터
export const sampleData: DataItem[] = generateRandomData(10); // 10개의 랜덤 데이터 생성


export const TABLE_COLUMNS: ColumnDefinition[] = [
  {
    accessorKey: 'name',
    header: '제품명',
  },
  {
    accessorKey: 'sales',
    header: '매출',
    formatter: (value: number) => value.toLocaleString(),
  },
  {
    accessorKey: 'profit',
    header: '이익',
    formatter: (value: number) => value.toLocaleString(),
  },
  {
    accessorKey: 'growth',
    header: '성장률',
    formatter: (value: number) => `${value}%`,
  },
  {
    accessorKey: 'gaugeValue',
    header: '상태',
    formatter: (value: number) => GaugeChart({ 
      percentage: value,
      showText: true,
    }),
  },
];

