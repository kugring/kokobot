import { ReactNode } from 'react';

export interface DataItem {
    name: string
    sales: number
    profit: number
    growth: number
    gaugeValue: number
}

export interface ColumnDefinition {
    accessorKey: keyof DataItem
    header: string
    formatter?: (value: any) => ReactNode
    width?: string | number
    align?: 'left' | 'center' | 'right'
}

export type ColumnDefinitions = ColumnDefinition[]
