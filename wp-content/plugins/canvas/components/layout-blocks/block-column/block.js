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
/******/ 	return __webpack_require__(__webpack_require__.s = 190);
/******/ })
/************************************************************************/
/******/ ({

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(191);


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(192);
/* harmony import */ var _save_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(196);
/* harmony import */ var _change_column_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/**
 * WordPress dependencies
 */
var addFilter = wp.hooks.addFilter;
/**
 * Internal dependencies
 */




var CNVS_PREVENT_UPDATE = 'CNVS_PREVENT_UPDATE';
/**
 * Custom block Edit output for Column block.
 *
 * @param {JSX} edit Original block edit.
 * @param {Object} blockProps Block data.
 *
 * @return {JSX} Block edit.
 */

function editRender(edit, blockProps) {
  if ('canvas/column' === blockProps.name) {
    return wp.element.createElement(_edit_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], blockProps);
  }

  return edit;
}
/**
 * Custom block register data for Column block.
 *
 * @param {Object} blockData Block data.
 *
 * @return {Object} Block data.
 */


function registerData(blockData) {
  if ('canvas/column' === blockData.name) {
    blockData.save = _save_jsx__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  return blockData;
}
/**
 * Compensate adjacent columns, when changing size directly in field.
 *
 * @param {Mixed} val Attribute value.
 * @param {String} name Attribute name.
 * @param {Object} blockProps Block data.
 *
 * @return {Mixed} Attribute value.
 */


function onFieldChange(val, name, blockProps) {
  if ('canvas/column' === blockProps.name && 'size' === name) {
    Object(_change_column_size__WEBPACK_IMPORTED_MODULE_2__["default"])(blockProps.clientId, val, true);
    return CNVS_PREVENT_UPDATE;
  }

  return val;
}

addFilter('canvas.customBlock.editRender', 'canvas/column/editRender', editRender);
addFilter('canvas.customBlock.registerData', 'canvas/column/registerData', registerData);
addFilter('canvas.customBlock.onFieldChange', 'canvas/column/changeColumnSize', onFieldChange);

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(throttle_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(193);
/* harmony import */ var _change_column_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(194);
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

var $ = window.jQuery;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var compose = wp.compose.compose;
var withSelect = wp.data.withSelect;
/**
 * Internal dependencies
 */



/**
 * Component
 */

var ColumnBlockEdit = /*#__PURE__*/function (_Component) {
  _inherits(ColumnBlockEdit, _Component);

  var _super = _createSuper(ColumnBlockEdit);

  function ColumnBlockEdit() {
    var _this;

    _classCallCheck(this, ColumnBlockEdit);

    _this = _super.apply(this, arguments);
    _this.state = {
      resizing: false,
      resizingContainerWidth: 0,
      resizingCursorPosition: 0,
      resizingColSize: 0
    };
    _this.onResizeStart = _this.onResizeStart.bind(_assertThisInitialized(_this));
    _this.onResizing = Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_1__["throttle"])(150, _this.onResizing.bind(_assertThisInitialized(_this)));
    _this.onResizeEnd = _this.onResizeEnd.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ColumnBlockEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousemove', this.onResizing);
      document.addEventListener('mouseup', this.onResizeEnd);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousemove', this.onResizing);
      document.removeEventListener('mouseup', this.onResizeEnd);
    }
    /**
     * On start column resize
     *
     * @param {Object} e event.
     */

  }, {
    key: "onResizeStart",
    value: function onResizeStart(e) {
      var _this$props = this.props,
          clientId = _this$props.clientId,
          attributes = _this$props.attributes;
      var $column = $("[data-block=\"".concat(clientId, "\""));
      var $parentRow = $column.closest('.cnvs-block-row');
      this.setState({
        resizing: true,
        resizingContainerWidth: $parentRow.width(),
        resizingCursorPosition: e.clientX,
        resizingColSize: attributes.size
      });
      e.preventDefault();
    }
    /**
     * On resizing column
     *
     * @param {Object} e event.
     */

  }, {
    key: "onResizing",
    value: function onResizing(e) {
      if (!this.state.resizing) {
        return;
      }

      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          clientId = _this$props2.clientId;
      var mouseMoved = e.clientX - this.state.resizingCursorPosition;
      var oneColumnSize = this.state.resizingContainerWidth / 12;
      var columnsResized = Math.round(mouseMoved / oneColumnSize);
      var newSize = this.state.resizingColSize + columnsResized;

      if (newSize !== attributes.size) {
        Object(_change_column_size__WEBPACK_IMPORTED_MODULE_3__["default"])(clientId, newSize, true);
      }
    }
    /**
     * On end column resize
     *
     * @param {Object} e event.
     */

  }, {
    key: "onResizeEnd",
    value: function onResizeEnd(e) {
      if (!this.state.resizing) {
        return;
      }

      e.preventDefault();
      this.setState({
        resizing: false,
        resizingContainerWidth: 0,
        resizingCursorPosition: 0,
        resizingColSize: 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          hasChildBlocks = _this$props3.hasChildBlocks,
          attributes = _this$props3.attributes,
          clientId = _this$props3.clientId;
      var canvasClassName = attributes.canvasClassName;
      var className = this.props.className;
      className = classnames__WEBPACK_IMPORTED_MODULE_0___default()('cnvs-block-column', canvasClassName, className);
      return wp.element.createElement(Fragment, null, wp.element.createElement("div", {
        className: className
      }, wp.element.createElement("div", {
        className: "cnvs-block-column-inner",
        "data-min-height": attributes['minHeight']
      }, wp.element.createElement("div", null, wp.element.createElement(InnerBlocks, {
        templateLock: false,
        renderAppender: hasChildBlocks ? undefined : function () {
          return wp.element.createElement(InnerBlocks.ButtonBlockAppender, null);
        }
      })))), wp.element.createElement("div", {
        className: "cnvs-block-column-resizer",
        draggable: "true",
        onMouseDown: function onMouseDown(e) {
          _this2.onResizeStart(e);
        }
      }, wp.element.createElement("span", null)), wp.element.createElement("style", null, canvasClassName && clientId ? Object(_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(attributes, canvasClassName, clientId) : ''));
    }
  }]);

  return ColumnBlockEdit;
}(Component);

var ColumnBlockEditWithSelect = compose(withSelect(function (select, ownProps) {
  var clientId = ownProps.clientId;

  var _select = select('core/block-editor'),
      getBlockRootClientId = _select.getBlockRootClientId,
      getBlocks = _select.getBlocks,
      getBlockOrder = _select.getBlockOrder;

  return {
    getBlockRootClientId: getBlockRootClientId,
    getBlocks: getBlocks,
    hasChildBlocks: getBlockOrder(clientId).length > 0
  };
}))(ColumnBlockEdit);
/* harmony default export */ __webpack_exports__["default"] = (ColumnBlockEditWithSelect);

/***/ }),

/***/ 193:
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
 * @param {String} clientId block client id
 *
 * @returns {String}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (attributes, className, clientId) {
  var result = '';
  var hideResizer = true;
  Object.keys(canvasBreakpoints).forEach(function (name) {
    var data = canvasBreakpoints[name];
    var styles = '';
    var suffix = '';

    if ('desktop' !== name) {
      suffix = "_".concat(name);
    }
    /**
     * Hide resizer.
     */


    if (suffix && hideResizer) {
      hideResizer = false;
      styles += "\n\t\t\t\t.".concat(className, " + .cnvs-block-column-resizer {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t");
    }
    /**
     * Size.
     */


    if (attributes["size".concat(suffix)]) {
      var size = attributes["size".concat(suffix)];
      styles += "\n\t\t\t\t#block-".concat(clientId, "[data-type=\"canvas/column\"] {\n\t\t\t\t\t-ms-flex-preferred-size: ").concat(100 * size / 12, "%;\n\t\t\t\t\tflex-basis: ").concat(100 * size / 12, "%;\n\t\t\t\t\twidth: ").concat(100 * size / 12, "%;\n\t\t\t\t}\n\t\t\t");
    }
    /**
     * Order.
     */


    if (attributes["order".concat(suffix)]) {
      var order = attributes["order".concat(suffix)];
      styles += "\n\t\t\t\t#block-".concat(clientId, "[data-type=\"canvas/column\"] {\n\t\t\t\t\t-ms-flex-order: ").concat(order, ";\n\t\t\t\t\torder: ").concat(order, ";\n\t\t\t\t}\n\t\t\t");
    }
    /**
     * Min Height.
     */


    if (attributes["minHeight".concat(suffix)]) {
      var minHeight = attributes["minHeight".concat(suffix)];
      styles += "\n\t\t\t\t.".concat(className, " > .cnvs-block-column-inner {\n\t\t\t\t\tmin-height: ").concat(minHeight, ";\n\t\t\t\t}\n\t\t\t");
    }
    /**
     * Vertical Align.
     */


    if (attributes["verticalAlign".concat(suffix)]) {
      var verticalAlign = attributes["verticalAlign".concat(suffix)];

      if ('top' === verticalAlign) {
        verticalAlign = 'flex-start';
      } else if ('bottom' === verticalAlign) {
        verticalAlign = 'flex-end';
      }

      styles += "\n\t\t\t\t#block-".concat(clientId, "[data-type=\"canvas/column\"] {\n\t\t\t\t\tjustify-content: ").concat(verticalAlign, ";\n\t\t\t\t}\n\t\t\t\t.").concat(className, " > .cnvs-block-column-inner {\n\t\t\t\t\talign-items: ").concat(verticalAlign, ";\n\t\t\t\t}\n\t\t\t");
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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColumnBlockSave; });
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

var ColumnBlockSave = /*#__PURE__*/function (_Component) {
  _inherits(ColumnBlockSave, _Component);

  var _super = _createSuper(ColumnBlockSave);

  function ColumnBlockSave() {
    _classCallCheck(this, ColumnBlockSave);

    return _super.apply(this, arguments);
  }

  _createClass(ColumnBlockSave, [{
    key: "render",
    value: function render() {
      return wp.element.createElement(InnerBlocks.Content, null);
    }
  }]);

  return ColumnBlockSave;
}(Component);



/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset).
	 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @returns {Function}  A new, throttled, function.
	 */
	function throttle (delay, noTrailing, callback, debounceMode) {
	  /*
	   * After wrapper has stopped being called, this timeout ensures that
	   * `callback` is executed at the proper times in `throttle` and `end`
	   * debounce modes.
	   */
	  var timeoutID;
	  var cancelled = false; // Keep track of the last time `callback` was executed.

	  var lastExec = 0; // Function to clear existing timeout

	  function clearExistingTimeout() {
	    if (timeoutID) {
	      clearTimeout(timeoutID);
	    }
	  } // Function to cancel next exec


	  function cancel() {
	    clearExistingTimeout();
	    cancelled = true;
	  } // `noTrailing` defaults to falsy.


	  if (typeof noTrailing !== 'boolean') {
	    debounceMode = callback;
	    callback = noTrailing;
	    noTrailing = undefined;
	  }
	  /*
	   * The `wrapper` function encapsulates all of the throttling / debouncing
	   * functionality and when executed will limit the rate at which `callback`
	   * is executed.
	   */


	  function wrapper() {
	    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
	      arguments_[_key] = arguments[_key];
	    }

	    var self = this;
	    var elapsed = Date.now() - lastExec;

	    if (cancelled) {
	      return;
	    } // Execute `callback` and update the `lastExec` timestamp.


	    function exec() {
	      lastExec = Date.now();
	      callback.apply(self, arguments_);
	    }
	    /*
	     * If `debounceMode` is true (at begin) this is used to clear the flag
	     * to allow future `callback` executions.
	     */


	    function clear() {
	      timeoutID = undefined;
	    }

	    if (debounceMode && !timeoutID) {
	      /*
	       * Since `wrapper` is being called for the first time and
	       * `debounceMode` is true (at begin), execute `callback`.
	       */
	      exec();
	    }

	    clearExistingTimeout();

	    if (debounceMode === undefined && elapsed > delay) {
	      /*
	       * In throttle mode, if `delay` time has been exceeded, execute
	       * `callback`.
	       */
	      exec();
	    } else if (noTrailing !== true) {
	      /*
	       * In trailing throttle mode, since `delay` time has not been
	       * exceeded, schedule `callback` to execute `delay` ms after most
	       * recent execution.
	       *
	       * If `debounceMode` is true (at begin), schedule `clear` to execute
	       * after `delay` ms.
	       *
	       * If `debounceMode` is false (at end), schedule `callback` to
	       * execute after `delay` ms.
	       */
	      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
	    }
	  }

	  wrapper.cancel = cancel; // Return the wrapper function.

	  return wrapper;
	}

	/* eslint-disable no-undefined */
	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @returns {Function} A new, debounced function.
	 */

	function debounce (delay, atBegin, callback) {
	  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	}

	exports.debounce = debounce;
	exports.throttle = throttle;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map


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