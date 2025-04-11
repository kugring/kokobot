import styled from "styled-components"
import { useState } from "react"
import { createTableColumns, createTableFilter } from "utils/table_utils"
import { TableColumnSetting } from "types"
import { useReactTable, getCoreRowModel, flexRender, getSortedRowModel, SortingState, OnChangeFn, getFilteredRowModel, getPaginationRowModel } from "@tanstack/react-table"
import Pagination from "../Pagination/Pagination"
import SearchInputBox from "components/SearchInputBox/SearchInputBox"

interface TableComponentProps {
    title: string
    data: any
    columns: TableColumnSetting[]
    limit?: number
}

const PAGE_SIZE_OPTIONS = [5, 10, 25, 50, 100]

const TableComponent = ({ title, data: initialData, columns: initialColumns, limit = 5 }: TableComponentProps) => {
    const [data] = useState(initialData)
    const [columns] = useState(initialColumns)
    const tableColumns = createTableColumns(columns)
    const [sorting, setSorting] = useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = useState("")
    const [limitNum, setLimitNum] = useState(limit)
    const [pageIndex, setPageIndex] = useState(0)

    const table = useReactTable({
        data,
        columns: tableColumns,
        state: {
            sorting,
            globalFilter,
            pagination: {
                pageSize: limitNum,
                pageIndex,
            },
        },
        onSortingChange: setSorting as OnChangeFn<SortingState>,
        onGlobalFilterChange: setGlobalFilter,
        onPaginationChange: (updater) => {
            if (typeof updater === "function") {
                const newState = updater({ pageIndex, pageSize: limitNum })
                setPageIndex(newState.pageIndex)
                setLimitNum(newState.pageSize)
            }
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        globalFilterFn: createTableFilter(columns),
    })

    return (
        <TableCard>
            <HeaderBox>
                <TitleBox>
                    <Title>{title}</Title>
                    <SearchInputBox 
                        value={globalFilter} 
                        onChange={setGlobalFilter} 
                        placeholder="전체 검색" 
                        delay={300} 
                    />
                </TitleBox>
            </HeaderBox>

            <Table>
                <thead>
                    <tr>
                        {table.getHeaderGroups()[0].headers.map((header) => (
                            <HeaderTitle key={header.id} onClick={header.column.getToggleSortingHandler()}>
                                <HeaderText>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                    <SortIcon>
                                        {{
                                            asc: " 🔼",
                                            desc: " 🔽",
                                        }[header.column.getIsSorted() as string] ?? null}
                                    </SortIcon>
                                </HeaderText>
                            </HeaderTitle>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row: any) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell: any) => (
                                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
            {table.getRowModel().rows.length === 0 && <NoDataMessage>데이터가 없습니다. 조건에 맞는 검색을 시도해 주시기 바랍니다.</NoDataMessage>}
            <Pagination 
                pageIndex={pageIndex} 
                pageCount={table.getPageCount()} 
                setPageIndex={table.setPageIndex} 
                pageSize={limitNum}
                setPageSize={setLimitNum}
                pageSizeOptions={PAGE_SIZE_OPTIONS}
                pageUnit="개씩 보기"
            />
        </TableCard>
    )
}

const TableCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    padding: 24px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: white;
    overflow-x: auto;
    user-select: none;
`

const HeaderBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const TitleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 12px;
`

const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #333;
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    table-layout: auto;
    border-top: 1px solid #ddd;

    th,
    td {
        padding: 8px 10px;
        text-align: center;
        border-bottom: 1px solid #ddd;
        vertical-align: middle;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    th {
        background-color: var(--theme-header-background);
        cursor: pointer;
    }

    tr {
        color: #333;
    }

    tbody tr:nth-child(odd) {
        background-color: var(--theme-background-even-row);
    }

    tr:hover {
        background-color: var(--theme-background-row-hover) !important;
    }
`

const HeaderTitle = styled.th`
    cursor: pointer;
    font-weight: 600;
    color: white;
`

const HeaderText = styled.span`
    font-weight: 700;
    color: #777;
    text-align: center;
    position: relative;
`

const SortIcon = styled.div`
    position: absolute;
    left: calc(100% + 1px);
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    display: flex;
    align-items: center;
`

const NoDataMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    color: #666;
    font-size: 16px;
`

export default TableComponent
