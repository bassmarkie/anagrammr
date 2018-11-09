/* global describe beforeEach it */

const chai = require('chai')
const expect = chai.expect

const isValid = require('./validate')

const makeGrid = (x, y) => {
  let grid = []
  for (let i = 0; i < y; i++) {
    let row = []
    for (let j = 0; j < x; j++) {
      row.push(j + 1)
    }
    grid.push(row)
  }
  return grid
}

describe('check if word is real', () => {
  it('expect dog = true', () => {
    let word = 'dog'
    expect(isValid.wordCheck(word)).to.to.be.equal(true)
  })

  it('expect stroople = false', () => {
    let word2 = 'stroople'
    expect(isValid.wordCheck(word2)).to.to.be.equal(false)
  })
})

describe('check if word is in a row', () => {
  let graph2 = [
    ['b', 'o', 'y', '', '', ''],
    ['b', '', 'o', 'b', 'o', 'e'],

    ['b', '', 'o', '', '', 'y'],
    ['b', 'o', 't', '', 't', 'o']
  ]

  it('expect to find boy in the grid', () => {
    expect(isValid.findWordInRow(graph2)[0]).to.be.deep.equal({
      word: 'boy',
      coord: [0, 0]
    })
  })

  it('expect to find oboe in the grd', () => {
    expect(isValid.findWordInRow(graph2)[1]).to.be.deep.equal({
      word: 'oboe',
      coord: [1, 2]
    })
  })

  it('expect to find two words in same row in graph', () => {
    expect(isValid.findWordInRow(graph2)[2]).to.be.deep.equal({
      word: 'bot',
      coord: [3, 0]
    })
    expect(isValid.findWordInRow(graph2)[3]).to.be.deep.equal({
      word: 'to',
      coord: [3, 4]
    })
  })
})

describe('check if word is in an graph', () => {
  let graph2 = [
    ['', 'b', '', ''],
    ['', 'o', 't', ''],
    ['', 'y', 'o', ''],
    ['', '', 'm', ''],
    ['', '', '', ''],
    ['', 'm', '', ''],
    ['', 'y', '', '']
  ]

  it('expect to find boy in the column', () => {
    expect(isValid.findWordInColumn(graph2)[0]).to.be.deep.equal({
      word: 'boy',
      coord: [0, 1]
    })
  })
  it('expect to find my in the column', () => {
    expect(isValid.findWordInColumn(graph2)[1]).to.be.deep.equal({
      word: 'my',
      coord: [5, 1]
    })
  })
  it('expect to find tom in the column', () => {
    expect(isValid.findWordInColumn(graph2)[2]).to.be.deep.equal({
      word: 'tom',
      coord: [1, 2]
    })
  })
})

describe('check if board is valid', () => {
  let graph4 = [
    ['', 'b', 'o', 'y'],
    ['', 'o', '', ''],
    ['', 't', '', ''],
    ['', '', '', ''],
    ['', 'm', '', ''],
    ['', 'y', '', '']
  ]

  it('expect board to be valid', () => {
    expect(isValid.boardIsValid(graph4)).to.be.equal('valid')
  })
})

describe('check if board is invalid', () => {
  let graph5 = [
    ['', 'b', 'o', 'q'],
    ['', 'v', '', ''],
    ['', 't', '', ''],
    ['', '', '', ''],
    ['', 'm', '', ''],
    ['', 'y', '', '']
  ]

  it('expect board to be invalid and return false words', () => {
    expect(isValid.boardIsValid(graph5)).to.be.deep.equal({
      rowErrors: [{word: 'boq', coord: [0, 1], exists: false}],
      colErrors: [{word: 'bvt', coord: [0, 1], exists: false}]
    })
  })
})
