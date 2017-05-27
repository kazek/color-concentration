import Tile from './tile'

class Table {

  constructor(element, numberOfTiles = 36) {
    this.element = element
    this.numberOfTiles = numberOfTiles > 72 ? 72 : numberOfTiles - (numberOfTiles % 2)
    this.element.className += " cc-table"
    this.reset()
  }

  reset() {
    this.element.innerHTML = ''
    this.createTiles()
    this.clickCount = 0
  }

  createTiles() {
    this.tiles = []
    for(let i = 0; i < this.numberOfTiles; i++) {
      this.tiles.push(new Tile(i%(this.numberOfTiles/2)))
    }
    this.shuffleTiles()
    this.tiles.forEach(t => {
      t.createElement()
      this.element.append(t.element)
      t.element.addEventListener('click', () => this.onTileClick(t))
    });
  }

  shuffleTiles() {
    for (let i = this.tiles.length; i; i--) {
      let j = Math.floor(Math.random() * i)
      let tmp = this.tiles[i - 1]
      this.tiles[i - 1] = this.tiles[j]
      this.tiles[j] = tmp
    }
  }

  onTileClick(tile) {
    let shown = this.getShownTiles();
    if(shown.length > 1) {
      shown.forEach(t => t.hide())
    } else if(shown.length == 1) {
      if(shown[0] != tile && shown[0].type == tile.type) {
        tile.setMatched()
        shown[0].setMatched()
      }
    }
    tile.show()
    this.clickCount++
    if(this.getNotMatchedTiles().length == 0) {
      this.showResultBoard()
    }
  }

  getShownTiles() {
    return this.tiles.filter(t => t.isShown())
  }

  getNotMatchedTiles() {
    return this.tiles.filter(t => !t.isMatched())
  }

  showResultBoard() {
    let resultBoard = document.createElement('div')
    resultBoard.className = 'cc-result'
    let resetButton = document.createElement('a')
    resetButton.innerHTML = 'AGAIN!'
    resetButton.addEventListener('click', () => this.reset())
    resultBoard.innerHTML = `Your needed <strong>${this.clickCount}</strong> clicks<br>`
    resultBoard.append(resetButton)
    this.element.append(resultBoard)
  }

}

export default Table
