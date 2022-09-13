/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/modules/delay.js":
/*!****************************************!*\
  !*** ./src/assets/js/modules/delay.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ apear)
/* harmony export */ });
function apear(elements) {
  var duration = 500;

  var _loop = function _loop(i) {
    setTimeout(function () {
      var element = document.querySelector("".concat(elements[i]));
      element.style.display = 'initial';
    }, duration);
    duration += 700;
  };

  for (var i = 0; i < elements.length; i++) {
    _loop(i);
  }
}

/***/ }),

/***/ "./src/assets/js/modules/draws.js":
/*!****************************************!*\
  !*** ./src/assets/js/modules/draws.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Canvas)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Canvas = /*#__PURE__*/function () {
  function Canvas(canvas, screenW) {
    _classCallCheck(this, Canvas);

    this.element = canvas;
    this.ctx = null;
    this.totalWidth = screenW;
    this.element.width = screenW;
  }

  _createClass(Canvas, [{
    key: "setCtx",
    value: function setCtx(context) {
      if (this.element.getContext) {
        var ctx = this.element.getContext(context);
        this.ctx = ctx;
      }
    }
  }, {
    key: "drawSquares2d",
    value: function drawSquares2d() {
      for (var x = 10; x < this.totalWidth; x += 25) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, 0);
        this.ctx.lineTo(x, 135);
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = '#555555';
        this.ctx.stroke();
      }

      for (var y = 10; y < 135; y += 25) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, y);
        this.ctx.lineTo(this.totalWidth, y);
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
      }
    }
  }]);

  return Canvas;
}();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_draws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/draws */ "./src/assets/js/modules/draws.js");
/* harmony import */ var _modules_delay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/delay */ "./src/assets/js/modules/delay.js");


var canvasBoard = new _modules_draws__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('.board'), window.document.body.clientWidth);
canvasBoard.setCtx('2d');
canvasBoard.drawSquares2d();
var canvasFBoard = new _modules_draws__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('.board-footer'), window.document.body.clientWidth);
canvasFBoard.setCtx('2d');
canvasFBoard.drawSquares2d();

function reloadPage() {
  window.location.reload();
}

window.addEventListener('orientationchange', reloadPage, false);
(0,_modules_delay__WEBPACK_IMPORTED_MODULE_1__["default"])(['#wow', '#whv']);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map