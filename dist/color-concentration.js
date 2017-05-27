/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tile__ = __webpack_require__(2);


class Table {

  constructor(element, numberOfTiles = 36) {
    this.element = element
    this.numberOfTiles = numberOfTiles > 72 ? 72 : numberOfTiles - (numberOfTiles % 2)
    this.element.className += " " + 'cc-table'
    this.createTiles()
  }

  createTiles() {
    this.tiles = []
    for(let i = 0; i < this.numberOfTiles; i++) {
      this.tiles.push(new __WEBPACK_IMPORTED_MODULE_0__tile__["a" /* default */](i%(this.numberOfTiles/2)))
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
  }

  getShownTiles() {
    return this.tiles.filter(t => t.isShown())
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Table);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table__ = __webpack_require__(0);


new __WEBPACK_IMPORTED_MODULE_0__table__["a" /* default */](document.getElementById('game'))


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

  setMatched(){
    this.matched = true
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

/* harmony default export */ __webpack_exports__["a"] = (Tile);


/***/ })
/******/ ]);