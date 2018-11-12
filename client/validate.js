// const checkWord = require('check-word')
// const words = checkWord('en')

const words = require('an-array-of-english-words')

const isValid = {}

isValid.wordCheck = word => words.includes(word)

isValid.findWordInRow = graph => {
  let found = []
  for (let j = 0; j < graph.length; j++) {
    let row = graph[j]

    for (let i = 0; i < row.length; i++) {
      if (row[i] && row[i + 1] && !row[i - 1]) {
        let word = row[i] + row[i + 1]
        let nextLetter = i + 2
        while (row[nextLetter]) {
          word += row[nextLetter]
          nextLetter++
        }
        found.push({word, coord: [j, i]})
      }
    }
  }
  return found
}

isValid.findWordInColumn = graph => {
  let found = []
  const findCol = (arr, n) => arr.map(x => x[n])
  for (let i = 0; i < graph[0].length; i++) {
    let col = findCol(graph, i)
    for (let j = 0; j < col.length; j++) {
      if (col[j] && col[j + 1] && !col[j - 1]) {
        let word = col[j] + col[j + 1]
        let nextLetter = j + 2
        while (col[nextLetter]) {
          word += col[nextLetter]
          nextLetter++
        }
        found.push({word, coord: [j, i]})
      }
    }
  }
  return found
}

isValid.boardIsValid = board => {
  let rowErrors = []
  let colErrors = []
  let rowWords = isValid.findWordInRow(board)
  let colWords = isValid.findWordInColumn(board)

  let wordsInRow = []
  rowWords.forEach(elem => {
    if (isValid.wordCheck(elem.word)) {
      elem.exists = true
      wordsInRow.push(elem)
    } else {
      elem.exists = false
      wordsInRow.push(elem)
    }
  })
  let wordsInCol = []
  colWords.forEach(elem => {
    if (isValid.wordCheck(elem.word)) {
      elem.exists = true
      wordsInCol.push(elem)
    } else {
      elem.exists = false
      wordsInCol.push(elem)
    }
  })

  for (let i = 0; i < wordsInRow.length; i++) {
    if (wordsInRow[i].exists === false) {
      rowErrors.push(wordsInRow[i])
    }
  }

  for (let j = 0; j < wordsInCol.length; j++) {
    if (wordsInCol[j].exists === false) {
      colErrors.push(wordsInCol[j])
    }
  }
  if (rowErrors.length > 0 || colErrors.length > 0) {
    return {rowErrors, colErrors}
  } else {
    return 'valid'
  }
}

module.exports = isValid
