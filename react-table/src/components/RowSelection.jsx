import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS, GROUPED_COLUMNS } from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'
import { CheckBox } from './CheckBox'


export const RowSelection = () => {
    const memoColumns = useMemo(() => GROUPED_COLUMNS, [])
    const memoData = useMemo(() => MOCK_DATA, [])

    const memoDefaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        selectedFlatRows
    } = useTable({
        columns: memoColumns,
        data: memoData,
        defaultColumn: memoDefaultColumn,
        initialState: { pageIndex: 0 }
    }, useFilters, useGlobalFilter, useSortBy, usePagination, useRowSelect, (hooks)=> {
        hooks.visibleColumns.push((columns) => {
            return [
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <CheckBox {...getToggleAllRowsSelectedProps()} />
                    ),
                    Cell: ( {row } ) => (
                        <CheckBox {...row.getToggleRowSelectedProps()}/>
                    )
                },
                ...columns
            ]
        })
    })

    const { globalFilter, pageIndex, pageSize } = state
    const firstPageRows = rows.slice(0, 10)

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                            </span>
                                            <div>
                                                {column.canFilter ? column.render('Filter') : null}
                                            </div>
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>

                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Go to page: {' '}
                    <input type='number' defaultValue={pageIndex + 1} onChange={e => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                    }}
                        style={{ width: '50px' }} />
                </span>
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [10, 25, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))
                    }
                </select>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous Page</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next Page</button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
            <pre>
                        <code>
                            {JSON.stringify(
                                {
                                    selectedFlatRows: selectedFlatRows.map(row => row.original)
                                },
                                null, 2
                            )}
                        </code>
                    </pre>
        </>
    )
}