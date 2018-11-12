import React from 'react'
import {setNewBoard} from '../store'
import {connect} from 'react-redux'

export class TableCell extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const board = this.props.board.board
    const x = Number(event.target.getAttribute('x'))
    const y = Number(event.target.getAttribute('y'))
    const letter = event.target.value

    console.log(x)
    console.log(y)

    console.log('before', board[x][y])
    board[x][y] = letter
    console.log('after', board[x][y])

    this.props.setNewBoard(board)
  }

  render() {
    return (
      <td className={this.props.color}>
        <input
          value={this.props.cell}
          y={this.props.y}
          x={this.props.x}
          onChange={this.handleChange}
        />
      </td>
    )
  }
}

const mapState = state => {
  return {
    board: state.board
  }
}

const mapDispatch = dispatch => ({
  setNewBoard: board => dispatch(setNewBoard(board))
})

export default connect(mapState, mapDispatch)(TableCell)
