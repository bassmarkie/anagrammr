import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Row} from 'react-data-grid'

const makeGrid = () => {
  for (let i = 0; i < 50; i++) {
    Array(50).fill('')
  }
}

export class UserHome extends React.Component {
  constructor(props) {
    super(props)

    this.state = {board: makeGrid()}
  }

  render() {
    const {email} = this.props

    return (
      <React.Fragment>
        <div>
          <h3>Welcome, {email}</h3>
          <div>Here's your high score</div>
          <div>Here's your list of past scores</div>
        </div>

        <table>
          {this.state.board.map((row, yIdx) => (
            <tr key={yIdx}>
              {row.map((cell, xIdx) => <td key={xIdx}>{[xIdx, yIdx]}</td>)}
            </tr>
          ))}
        </table>
      </React.Fragment>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
