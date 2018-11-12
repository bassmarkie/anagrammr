import React from 'react'
import store, {setLetter} from '../store'

export default class TableCell extends React.Component {
  constructor(props) {
    super(props)
    // this.handleClick = this.handleClick.bind(this)
    // console.log('rowIndex', props.rowIndex)
    // console.log('cellIndex', props.cellIndex)
    console.log(props.row[props.rowIndex])
  }

  // handleClick(event) {
  //   event.preventDefault()
  //   store.dispatch(colorize(this.props.rowIndex, this.props.cellIndex))
  // }

  handleChange(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <td className={this.props.color}>
        <textarea value={this.props.cell} onChange={this.handleChange}>
          {this.value}
        </textarea>
      </td>
    )
  }
}
