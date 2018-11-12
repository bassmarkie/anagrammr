import React from 'react'
import TableCell from './TableCell'

export const TableRow = props => {
  return (
    <tr>
      {props.row.map((cell, cellIndex) => (
        <TableCell
          key={cellIndex}
          row={props.row}
          y={props.rowIndex}
          x={cellIndex}
          cell={cell}
        >
          {cell}
        </TableCell>
      ))}
    </tr>
  )
}
