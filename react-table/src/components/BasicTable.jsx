import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS, GROUPED_COLUMNS } from './columns'
import './table.css'

export const BasicTable = () => {
    {/*
        Recommendation of Table library is to memoize columns & data.
        Without memoize the component would think that it receiving new data on every render & this fact will effect the performance.
    */}

    const memoColumns = useMemo(() => GROUPED_COLUMNS, [])
    const memoData = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns: memoColumns,
        data: memoData
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow
    } = tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>

            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
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
            <tfoot>
                {
                    footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map(column => (
                                    <td {...column.getFooterProps()}>
                                        {column.render('Footer')}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tfoot>
        </table>
    )
}

{/* 
    ----------Six Steps Basic Table----------
    1. Get the data you want to display (JSON Format)
    2. Define the columns for your table
    3. Use the data and columns defined to create a table instance using react-table
    4. Define a basic table structure using plain HTML
    5. Use the table instance created in step 3 to bring life to the HTML defined in step 4
    6. Include the desired CSS 

    Basic HTML Table Structure - Step 4:
        <table>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
*/}