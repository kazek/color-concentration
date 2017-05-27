class Tile {

  constructor(type) {
    this.type = type
    this.color = [
      '#ff0000', '#ffa280', '#d9b56c', '#00ff44', '#40d9ff', '#5940ff',
      '#603973', '#bf3043', '#e50000', '#d9b1a3', '#e5d600', '#1d734b',
      '#23778c', '#8273e6', '#e200f2', '#d90000', '#e57a00', '#555916',
      '#99ccbb', '#3385cc', '#2c00a6', '#99007a', '#806060', '#331b00',
      '#3d4030', '#39e6c3', '#1a4266', '#bbace6', '#d96ca6', '#731f00',
      '#734d00', '#81cc66', '#003033', '#0d1c33', '#140033', '#400011'
    ][this.type]
    this.shown = false
    this.matched = false
  }

  isShown() {
    return this.shown && !this.matched
  }

  setMatched() {
    this.matched = true
  }

  isMatched() {
    return this.matched
  }

  show() {
    this.element.style.backgroundColor = this.color
    this.shown = true
  }

  hide() {
    this.element.style.backgroundColor = null
    this.shown = false
  }

  createElement() {
    this.element = document.createElement('div')
    this.element.className = 'cc-tile'
  }


}

export default Tile
