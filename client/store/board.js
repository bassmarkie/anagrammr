import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
export const SET_BOARD = 'SET_BOARD'

export const setBoard = () => ({
  type: SET_BOARD
})

export const GET_LETTER = 'GET_LETTER'

export const getLetter = letter => ({
  type: GET_LETTER,
  letter
})

export const SET_LETTER = 'SET_LETTER'

export const setLetter = letter => ({
  type: SET_LETTER,
  letter
})

export const SET_NEW_BOARD = 'SET_NEW_BOARD'

export const setNewBoard = board => ({
  type: SET_NEW_BOARD,
  board
})

const makeGrid = () => {
  let grid = []
  for (let i = 0; i < 20; i++) {
    grid.push(Array(20).fill(''))
  }
  grid[0][0] = 'b'
  grid[0][1] = 'o'
  grid[0][2] = 'y'
  grid[1][0] = 'a'
  grid[2][0] = 't'
  return grid
}

const initialState = {
  board: makeGrid()
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_BOARD:
      return {...state}
    case getLetter:
      return {...state, selectedletter: action.letter}
    case setNewBoard:
      return {...state, board: action.board}
    default:
      return state
  }
}
