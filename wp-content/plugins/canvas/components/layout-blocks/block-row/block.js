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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 197);
/******/ })
/************************************************************************/
/******/ ({

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/**
 * WordPress dependencies.
 */
var _wp$data$select = wp.data.select('core/block-editor'),
    getBlockRootClientId = _wp$data$select.getBlockRootClientId,
    getBlocks = _wp$data$select.getBlocks,
    getBlockAttributes = _wp$data$select.getBlockAttributes;

var _window = window,
    $ = _window.jQuery;
/**
 * Internal dependencies
 */


var MIN_COL_SIZE = 1;
/**
 * Update columns size.
 *
 * First, we update the column size by changing style directly, then we update the block attribute.
 * This hack is needed to prevent columns jumping as `updateBlockAttributes` don't apply changes immediately.
 *
 * @param {*} clientId
 * @param {*} size
 */

function updateAttribute(clientId, size) {
  $("#block-".concat(clientId, "[data-type=\"canvas/column\"]")).css({
    flexBasis: "".concat(100 * size / 12, "%"),
    width: "".concat(100 * size / 12, "%")
  });
  wp.data.dispatch('core/block-editor').updateBlockAttributes(clientId, {
    size: size
  });
}
/**
 * Update columns size and compensate adjacent columns if needed.
 *
 * @param {String} clientId - block client id.
 * @param {Int} size - new column size.
 * @param {Boolean} compensate - compensate adjacent columns also.
 */


/* harmony default export */ __webpack_exports__["default"] = (function (clientId, size) {
  var compensate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!compensate) {
    updateAttribute(clientId, size);
    return;
  } // Compensate


  if (size < MIN_COL_SIZE || size > 12) {
    return;
  } // Constrain or expand siblings to account for gain or loss of
  // total columns area.


  var columns = getBlocks(getBlockRootClientId(clientId));
  var adjacentColumns = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getAdjacentBlocks"])(columns, clientId);
  var thisColumnAttrs = getBlockAttributes(clientId);
  var neededSize = size - thisColumnAttrs.size;
  /*
   * Make col smaller.
   */

  if (neededSize < 0) {
    // set new size to current column.
    updateAttribute(clientId, size); // set new size to next column.

    updateAttribute(adjacentColumns[0].clientId, adjacentColumns[0].attributes.size - neededSize);
  } else if (neededSize > 0) {
    /*
     * Make col larger.
     */
    var availableSize = 0;
    adjacentColumns.map(function (colData) {
      if (colData.attributes.size > MIN_COL_SIZE) {
        availableSize += colData.attributes.size - MIN_COL_SIZE;
      }
    }); // we can't change size, because no space available on the right.

    if (!availableSize || neededSize > availableSize) {
      return;
    } // set new size to current column.


    updateAttribute(clientId, size); // set new size to adjacent columns.

    adjacentColumns.forEach(function (colData) {
      if (neededSize > 0 && colData.attributes.size > MIN_COL_SIZE) {
        var newColSize = Math.max(colData.attributes.size - neededSize, MIN_COL_SIZE);
        neededSize -= colData.attributes.size - newColSize;
        updateAttribute(colData.clientId, newColSize);
      }
    });
  }
});

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdjacentBlocks", function() { return getAdjacentBlocks; });
var findIndex = window.lodash.findIndex;
/**
 * Returns the considered adjacent to that of the specified `clientId` for
 * resizing consideration. Adjacent blocks are those occurring after, except
 * when the given block is the last block in the set. For the last block, the
 * behavior is reversed.
 *
 * @param {WPBlock[]} blocks   Block objects.
 * @param {string}    clientId Client ID to consider for adjacent blocks.
 *
 * @return {WPBlock[]} Adjacent block objects.
 */

function getAdjacentBlocks(blocks, clientId) {
  var index = findIndex(blocks, {
    clientId: clientId
  });
  var isLastBlock = index === blocks.length - 1;
  return isLastBlock ? blocks.slice(0, index) : blocks.slice(index + 1);
}

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(198);


/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _save_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(201);
/**
 * WordPress dependencies
 */
var addFilter = wp.hooks.addFilter;
/**
 * Internal dependencies
 */



/**
 * Custom block Edit output for Row block.
 *
 * @param {JSX} edit Original block edit.
 * @param {Object} blockProps Block data.
 *
 * @return {JSX} Block edit.
 */

function editRender(edit, blockProps) {
  if ('canvas/row' === blockProps.name) {
    return wp.element.createElement(_edit_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], blockProps);
  }

  return edit;
}
/**
 * Custom block register data for Row block.
 *
 * @param {Object} blockData Block data.
 *
 * @return {Object} Block data.
 */


function registerData(blockData) {
  if ('canvas/row' === blockData.name) {
    blockData.save = _save_jsx__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  return blockData;
}

addFilter('canvas.customBlock.editRender', 'canvas/row/editRender', editRender);
addFilter('canvas.customBlock.registerData', 'canvas/row/registerData', registerData);

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(200);
/* harmony import */ var _block_column_change_column_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var compose = wp.compose.compose;
var withSelect = wp.data.withSelect;
/**
 * Internal dependencies
 */



var availableSizes = {
  1: [12],
  2: [6, 6],
  3: [4, 4, 4],
  4: [3, 3, 3, 3],
  5: [2, 2, 4, 2, 2],
  6: [2, 2, 2, 2, 2, 2]
};
/**
 * Component
 */

var RowBlockEdit = /*#__PURE__*/function (_Component) {
  _inherits(RowBlockEdit, _Component);

  var _super = _createSuper(RowBlockEdit);

  function RowBlockEdit() {
    var _this;

    _classCallCheck(this, RowBlockEdit);

    _this = _super.apply(this, arguments);
    _this.state = {
      currentColumnCount: _this.props.attributes.columns
    };
    _this.getLayoutTemplate = _this.getLayoutTemplate.bind(_assertThisInitialized(_this));
    _this.updateColumnsSizes = _this.updateColumnsSizes.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RowBlockEdit, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.attributes.columns !== this.state.currentColumnCount) {
        this.setState({
          currentColumnCount: this.props.attributes.columns
        });
        this.updateColumnsSizes();
      }
    }
    /**
     * Returns the template configuration for a given section layout.
     *
     * @return {Object[]} Layout configuration.
     */

  }, {
    key: "getLayoutTemplate",
    value: function getLayoutTemplate() {
      var attributes = this.props.attributes;
      var columns = attributes.columns;
      var result = [];

      for (var k = 0; k < columns; k++) {
        result.push(['canvas/column', {
          size: availableSizes[columns][k]
        }]);
      }

      return result;
    }
    /**
     * Update columns sizes.
     */

  }, {
    key: "updateColumnsSizes",
    value: function updateColumnsSizes() {
      var _this$props = this.props,
          block = _this$props.block,
          attributes = _this$props.attributes;
      var columns = attributes.columns;
      block.innerBlocks.forEach(function (colData, i) {
        if (availableSizes[columns][i]) {
          Object(_block_column_change_column_size__WEBPACK_IMPORTED_MODULE_2__["default"])(colData.clientId, availableSizes[columns][i]);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var attributes = this.props.attributes;
      var className = this.props.className;
      var columns = attributes.columns,
          canvasClassName = attributes.canvasClassName;
      className = classnames__WEBPACK_IMPORTED_MODULE_0___default()('cnvs-block-row', "cnvs-block-row-columns-".concat(columns), canvasClassName);
      return wp.element.createElement(Fragment, null, wp.element.createElement("div", {
        className: className
      }, wp.element.createElement("div", {
        className: "cnvs-block-row-inner"
      }, wp.element.createElement(InnerBlocks, {
        template: this.getLayoutTemplate(),
        templateLock: "all",
        allowedBlocks: ['canvas/column']
      }))), wp.element.createElement("style", null, canvasClassName ? Object(_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes, canvasClassName) : ''));
    }
  }]);

  return RowBlockEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function (select, ownProps) {
  var _select = select('core/block-editor'),
      getBlock = _select.getBlock;

  return {
    block: getBlock(ownProps.clientId)
  };
})])(RowBlockEdit));

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Internal dependencies
 */
var _window = window,
    canvasBreakpoints = _window.canvasBreakpoints;
/**
 * Row block styles for Editor
 *
 * @param {Object} attributes block attributes
 * @param {String} className block class name
 *
 * @returns {String}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (attributes, className) {
  var result = '';
  var breakColumns = true;
  Object.keys(canvasBreakpoints).forEach(function (name) {
    var data = canvasBreakpoints[name];
    var styles = '';
    var suffix = '';

    if ('desktop' !== name) {
      suffix = "_".concat(name);
    }
    /**
     * Break columns.
     */


    if (suffix && breakColumns) {
      breakColumns = false;
      styles += "\n\t\t\t\t.".concat(className, " > .cnvs-block-row-inner > .block-editor-inner-blocks > .block-editor-block-list__layout {\n\t\t\t\t\t-ms-flex-wrap: wrap;\n\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t}\n\t\t\t");
    }
    /**
     * Gap.
     */


    if (typeof attributes["gap".concat(suffix)] === 'number') {
      var gap = attributes["gap".concat(suffix)];
      styles += "\n\t\t\t\t.".concat(className, " > .cnvs-block-row-inner > .block-editor-inner-blocks > .block-editor-block-list__layout {\n\t\t\t\t\tmargin-left: ").concat(-gap / 2, "px;\n\t\t\t\t\tmargin-right: ").concat(-gap / 2, "px;\n\t\t\t\t}\n\t\t\t\t.").concat(className, " > .cnvs-block-row-inner > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type=\"canvas/column\"] {\n\t\t\t\t\tpadding-left: ").concat(gap / 2, "px;\n\t\t\t\t\tpadding-right: ").concat(gap / 2, "px;\n\t\t\t\t}\n\t\t\t\t.").concat(className, " > .cnvs-block-row-inner > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type=\"canvas/column\"] > .canvas-component-custom-blocks > .cnvs-block-column-resizer {\n\t\t\t\t\tmargin-right: ").concat(-gap / 2, "px;\n\t\t\t\t}\n\t\t\t");
    } // add media query.


    if (suffix && styles) {
      styles = "@media (max-width: ".concat(data.width, "px) { ").concat(styles, " } ");
    }

    if (styles) {
      result += styles;
    }
  });
  return result;
});

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RowBlockSave; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * WordPress dependencies
 */
var Component = wp.element.Component;
var InnerBlocks = wp.blockEditor.InnerBlocks;
/**
 * Component
 */

var RowBlockSave = /*#__PURE__*/function (_Component) {
  _inherits(RowBlockSave, _Component);

  var _super = _createSuper(RowBlockSave);

  function RowBlockSave() {
    _classCallCheck(this, RowBlockSave);

    return _super.apply(this, arguments);
  }

  _createClass(RowBlockSave, [{
    key: "render",
    value: function render() {
      return wp.element.createElement(InnerBlocks.Content, null);
    }
  }]);

  return RowBlockSave;
}(Component);



/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

/******/ });