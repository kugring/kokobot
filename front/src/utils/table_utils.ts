import { createColumnHelper } from '@tanstack/react-table';
import { ColumnDefinition, DataItem } from '../types/table_type';

export const columnHelper = createColumnHelper<DataItem>();

export const createTableColumns = (columns: ColumnDefinition[]) => {
  return columns.map(column => {
    return columnHelper.accessor(column.accessorKey, {
      header: column.header,
      cell: info => {
        if (typeof column.formatter === 'function') {
          const value = info.getValue();
          return column.formatter(value);
        }
        return info.getValue();
      },
    });
  });
};