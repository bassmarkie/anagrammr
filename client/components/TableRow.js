import React from 'react'
import TableCell from './TableCell'

export const TableRow = props => {
  console.log('props.row', props.row)

  return (
    <tr>
      {props.row.map((cell, cellIndex) => (
        <TableCell
          key={cellIndex}
          row={props.row}
          rowIndex={props.rowIndex}
          cellIndex={cellIndex}
          cell={cell}
        >
          {cell}
        </TableCell>
      ))}
    </tr>
  )
}
