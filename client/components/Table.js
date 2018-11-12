import React from 'react'
import {TableRow} from './TableRow'

export const Table = props => {
  console.log('board', props.board)
  return (
    <table>
      <tbody>
        {props.board.map((row, rowIndex) => (
          <TableRow key={rowIndex} rowIndex={rowIndex} row={row} />
        ))}
      </tbody>
    </table>
  )
}
