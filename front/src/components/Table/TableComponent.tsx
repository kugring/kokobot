import styled from "styled-components"
import { DEFAULT_TABLE_STYLES } from "constants/table_constants";
import { useState, useRef } from "react"
import { TableColumnSetting } from "types";
import { createTableColumns } from "../../utils/table_utils"
import { DraggableTableRow, DraggableTableHeader } from './drag/index';
import { arrayMove, SortableContext, verticalListSortingStrategy, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useReactTable, getCoreRowModel, flexRender, getSortedRowModel, SortingState, OnChangeFn } from "@tanstack/react-table"
import { DndContext, rectIntersection, PointerSensor, useSensor, useSensors, DragEndEvent, DragOverlay, Modifier } from '@dnd-kit/core';
import { TableStyles } from "types/components/table_type";

interface TableComponentProps {
    data: any;
    columns: TableColumnSetting[];
    tableTitle?: string;
    tableStyles?: TableStyles;
}

const TableComponent = ({
    data: initialData,
    columns: initialColumns,
    tableStyles = DEFAULT_TABLE_STYLES,
    tableTitle
}: TableComponentProps) => {
    const [sorting, setSorting] = useState<SortingState>([])
    const [data, setData] = useState(initialData)
    const [columns, setColumns] = useState(initialColumns)
    const [activeId, setActiveId] = useState<string | null>(null)
    const tableColumns = createTableColumns(columns)
    const headerRef = useRef<HTMLTableSectionElement>(null);
    const tableColors = tableStyles || DEFAULT_TABLE_STYLES;

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
                delay: 0,
                tolerance: 5
            }
        })
    );

    const handleDragStart = (event: any) => {
        setActiveId(String(event.active.id));
    };

    const handleDragEnd = (event: DragEndEvent) => {
        setActiveId(null);
        const { active, over } = event;

        if (active.id !== over?.id) {
            if (String(active.id).startsWith('header-')) {
                const oldIndex = columns.findIndex((col) => `header-${col.accessorKey}` === active.id);
                const newIndex = columns.findIndex((col) => `header-${col.accessorKey}` === over?.id);
                setColumns(arrayMove(columns, oldIndex, newIndex));
            } else {
                setData((items: any) => {
                    const oldIndex = items.findIndex((item: any) => item.name === active.id);
                    const newIndex = items.findIndex((item: any) => item.name === over?.id);
                    return arrayMove(items, oldIndex, newIndex);
                });
            }
        }
    };

    const restrictToXAxis: Modifier = ({ active, transform }: { active: any, transform: any }) => {
        if (active && String(active.id).startsWith('header-')) {
            return {
                ...transform,
                y: 0
            };
        }
        return transform;
    };

    const table = useReactTable({
        data,
        columns: tableColumns,
        state: {
            sorting,
        },
        onSortingChange: setSorting as OnChangeFn<SortingState>,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    })

    return (
        <TableCard>
            <TableTitle>{tableTitle}</TableTitle>
            <DndContext
                sensors={sensors}
                collisionDetection={rectIntersection}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                autoScroll={false}
                modifiers={[restrictToXAxis]}
            >
                <Table $tableStyles={tableColors}>
                    <SortableContext
                        items={columns.map(col => `header-${col.accessorKey}`)}
                        strategy={horizontalListSortingStrategy}
                    >
                        <thead ref={headerRef}>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <DraggableTableHeader
                                            key={header.id}
                                            id={`header-${header.column.id}`}
                                            $tableStyles={tableStyles}
                                        >
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </DraggableTableHeader>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                    </SortableContext>
                    <SortableContext
                        items={data.map((item: any) => item.name)}
                        strategy={verticalListSortingStrategy}
                    >
                        <tbody>
                            {table.getRowModel().rows.map((row: any) => (
                                <DraggableTableRow
                                    key={row.id}
                                    id={row.original.name}
                                    $tableStyles={tableStyles}
                                >
                                    {row.getVisibleCells().map((cell: any) => (
                                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                                    ))}
                                </DraggableTableRow>
                            ))}
                        </tbody>
                    </SortableContext>
                </Table>
                <DragOverlay>
                    {activeId && String(activeId).startsWith('header-') && (
                        <DragOverlayItem $tableStyles={tableStyles}>
                            {table.getHeaderGroups()[0].headers.find(header => `header-${header.column.id}` === activeId)?.column.columnDef.header as string}
                        </DragOverlayItem>
                    )}
                </DragOverlay>
            </DndContext>
        </TableCard>
    )
}

export default TableComponent

const TableCard = styled.div`
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s;
    overflow-x: auto;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
`

const TableTitle = styled.h2`
    margin: 0 0 20px 0;
    color: #333;
    font-size: 1.5rem;
`

const Table = styled.table<{ $tableStyles: TableStyles }>`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;

    th,
    td {
        padding: 12px;
        text-align: center;
        border-bottom: 1px solid ${props => props.$tableStyles?.borderColor};
        vertical-align: middle;
    }

    th {
        background-color: ${props => props.$tableStyles?.headerBackground};
        font-weight: 600;
        color: #333;
        cursor: pointer;

        &:hover {
            background-color: ${props => props.$tableStyles?.headerHoverBackground};
        }
    }

    tr:hover {
        background-color: ${props => props.$tableStyles?.rowHoverBackground};
    }
`

const DragOverlayItem = styled.div<{ $tableStyles: TableStyles }>`
    background: ${props => props.$tableStyles.headerBackground};
    padding: 12px;
    border: 1px solid ${props => props.$tableStyles.borderColor};
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: grabbing;
    opacity: 0.9;
    z-index: 1000;
    white-space: nowrap;
    position: fixed;
    pointer-events: none;
    touch-action: none;
    user-select: none;
    transform: translate3d(var(--translate-x, 0), 0, 0);
    will-change: transform;
`;

