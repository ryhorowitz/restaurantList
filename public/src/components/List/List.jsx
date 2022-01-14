import React, { useMemo, useState, useEffect } from 'react';
import { useTable } from 'react-table';
import css from './listStyles.css';

function List() {
// if there are markers on the map generate a list from markersState in Map.jsx
  const data = useMemo(
    () => [
      {
        col1: '1',
        col2: 'World',
      },
      {
        col1: '2',
        col2: 'rocks',
      },
      {
        col1: '3',
        col2: 'you want',
      },
    ],
    [],
  );
  const columns = useMemo(
    () => [
      {
        Header: '',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Restaurants',
        accessor: 'col2',
      },
    ],
    [],
  );

  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
  // apply the table props
    <table {...getTableProps()}>
      <thead>
        {// Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {// Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps()}>
                    {// Render the header
                    column.render('Header')
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {// Loop over the table rows
        rows.map((row) => {
        // Prepare the row for display
          prepareRow(row);
          return (
            // Apply the row props
            <tr {...row.getRowProps()}>
              {// Loop over the rows cells
                row.cells.map((cell) =>
                  // Apply the cell props
                  (
                    <td {...cell.getCellProps()}>
                      {// Render the cell contents
                      cell.render('Cell')
                      }
                    </td>
                  )
                )
              }
            </tr>
          );
       })
}
      </tbody>
    </table>
  );
}

export default List;
