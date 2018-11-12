/* eslint-disable no-alert */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import isValid from '../validate'
import store, {setBoard} from '../store'
import {Table} from './Table'

export class UserHome extends React.Component {
  constructor(props) {
    super(props)

    // console.log(this.props.board.board)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    let currentBoard = this.props.board.board
    const boardCheck = isValid.boardIsValid(currentBoard)
    if (boardCheck === 'valid') alert('Your board is valid')
    if (boardCheck.rowErrors.length > 0) {
      alert(
        boardCheck.rowErrors.map(
          elem =>
            `your word ${elem.word} starting at coord ${elem.coord} is invalid`
        )
      )
    }
    if (boardCheck.colErrors.length > 0) {
      alert(
        boardCheck.colErrors.map(
          elem =>
            `your word ${elem.word} starting at coord ${elem.coord} is invalid`
        )
      )
    }
  }

  componentDidMount() {
    this.props.setBoard()
  }

  render() {
    const board = this.props.board.board
    // const {email} = this.props
    if (!this.props.board.board) return <div>No Div</div>

    return (
      <React.Fragment>
        <div>
          {/* <h3>Welcome, {email}</h3> */}
          <div>Here's your high score</div>
          <div>Here's your list of past scores</div>
          <form onSubmit={this.handleSubmit}>
            <button type="submit">Validate</button>
            <Table board={board} />
          </form>
        </div>
      </React.Fragment>
    )
  }
}

/**
 * CONTAINER
 */
// export default UserHome

const mapState = state => {
  return {
    board: state.board
  }
}

const mapDispatch = dispatch => ({
  setBoard: () => dispatch(setBoard)
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
