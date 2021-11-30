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
/******/ 	return __webpack_require__(__webpack_require__.s = 185);
/******/ })
/************************************************************************/
/******/ ({

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveClass", function() { return getActiveClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceClass", function() { return replaceClass; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * WordPress dependencies
 */
var TokenList = wp.tokenList;
/**
 * Returns the active style from the given className.
 *
 * @param {string} className  Class name
 * @param {string} namespace  The replacing class namespace.
 *
 * @return {string} The active style.
 */

function getActiveClass(className, namespace) {
  var list = new TokenList(className);

  var _iterator = _createForOfIteratorHelper(list.values()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var activeClass = _step.value;

      if (activeClass.indexOf("".concat(namespace, "-")) === -1) {
        continue;
      }

      return activeClass;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return false;
}
/**
 * Replaces the active class with namespace in the className.
 *
 * @param {string} className  Class name.
 * @param {string} namespace  The replacing class namespace.
 * @param {string} newClass   The replacing class.
 *
 * @return {string} The updated className.
 */

function replaceClass(className, namespace, newClass) {
  var list = new TokenList(className);
  var namespaceRegExp = new RegExp("".concat(namespace, "-")); // remove classes with the same namespace.

  var _iterator2 = _createForOfIteratorHelper(list.values()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var activeClass = _step2.value;

      if (namespaceRegExp.test(activeClass)) {
        list.remove(activeClass);
      }
    } // add new class.

  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  if (newClass) {
    list.add("".concat(namespace, "-").concat(newClass));
  }

  return list.value;
}

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(186);


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _gutenberg_utils_classes_replacer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
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
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var RichTextToolbarButton = wp.blockEditor.RichTextToolbarButton;
var RadioControl = wp.components.RadioControl;
var registerFormatType = wp.richText.registerFormatType;
var URLPopover = wp.blockEditor.URLPopover;

function getSelectedBadge() {
  var selection = window.getSelection(); // Unlikely, but in the case there is no selection, return empty styles so
  // as to avoid a thrown error by `Selection#getRangeAt` on invalid index.

  if (selection.rangeCount === 0) {
    return false;
  }

  var range = selection.getRangeAt(0);
  var $selectedNode = range.startContainer; // If the caret is right before the element, select the next element.

  $selectedNode = $selectedNode.nextElementSibling || $selectedNode;

  while ($selectedNode.nodeType !== window.Node.ELEMENT_NODE) {
    $selectedNode = $selectedNode.parentNode;
  }

  var $badge = $selectedNode.closest('.cnvs-badge');
  return $badge;
}
/**
 * Returns a style object for applying as `position: absolute` for an element
 * relative to the bottom-center of the current selection. Includes `top` and
 * `left` style properties.
 *
 * @return {Object} Style object.
 */


function getCurrentCaretPositionStyle() {
  var $badge = getSelectedBadge();

  if (!$badge) {
    return {};
  }

  return $badge.getBoundingClientRect();
}
/**
 * Component which renders itself positioned under the current caret selection.
 * The position is calculated at the time of the component being mounted, so it
 * should only be mounted after the desired selection has been made.
 *
 * @type {WPComponent}
 */


var BadgePopover = /*#__PURE__*/function (_Component) {
  _inherits(BadgePopover, _Component);

  var _super = _createSuper(BadgePopover);

  function BadgePopover() {
    var _this;

    _classCallCheck(this, BadgePopover);

    _this = _super.apply(this, arguments);
    _this.state = {
      rect: getCurrentCaretPositionStyle()
    };
    return _this;
  }

  _createClass(BadgePopover, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var rect = this.state.rect;
      return wp.element.createElement(URLPopover, {
        focusOnMount: false,
        anchorRect: rect
      }, wp.element.createElement("div", {
        style: {
          padding: 20
        }
      }, children));
    }
  }]);

  return BadgePopover;
}(Component);

var name = 'canvas/badge';
var settings = {
  title: __('Badge'),
  tagName: 'span',
  className: 'cnvs-badge',
  attributes: {
    class: 'class'
  },
  edit: /*#__PURE__*/function (_Component2) {
    _inherits(BadgeFormat, _Component2);

    var _super2 = _createSuper(BadgeFormat);

    function BadgeFormat() {
      var _this2;

      _classCallCheck(this, BadgeFormat);

      _this2 = _super2.apply(this, arguments);
      _this2.state = {
        currentColor: ''
      };
      _this2.toggleFormat = _this2.toggleFormat.bind(_assertThisInitialized(_this2));
      _this2.getColorStyle = _this2.getColorStyle.bind(_assertThisInitialized(_this2));
      _this2.updateColorStyle = _this2.updateColorStyle.bind(_assertThisInitialized(_this2));
      return _this2;
    }

    _createClass(BadgeFormat, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var isActive = this.props.isActive;

        if (!this.state.currentColor && isActive) {
          var $badge = getSelectedBadge();

          if ($badge) {
            var currentColor = this.getColorStyle($badge.className);

            if (currentColor) {
              currentColor = currentColor.replace(/^is-cnvs-badge-color-/, '');
              this.setState({
                currentColor: currentColor
              });
            }
          }
        } else if (this.state.currentColor && !isActive) {
          this.setState({
            currentColor: ''
          });
        }
      }
    }, {
      key: "toggleFormat",
      value: function toggleFormat(color) {
        var toggle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var _this$props = this.props,
            value = _this$props.value,
            onChange = _this$props.onChange;
        var attributes = {};

        if (color) {
          attributes.class = "is-cnvs-badge-color-".concat(color);
          this.setState({
            currentColor: color
          });
        }

        var toggleFormat = toggle ? wp.richText.toggleFormat : wp.richText.applyFormat;
        onChange(toggleFormat(value, {
          type: name,
          attributes: attributes
        }));
      }
      /**
       * Get color style from classname on the block.
       *
       * @return {String}
       */

    }, {
      key: "getColorStyle",
      value: function getColorStyle(className) {
        return Object(_gutenberg_utils_classes_replacer__WEBPACK_IMPORTED_MODULE_0__["getActiveClass"])(className, 'is-cnvs-badge-color');
      }
      /**
       * Update color classname on the block.
       *
       * @param {String} colorName name of color style
       * @memberof NewEdit
       */

    }, {
      key: "updateColorStyle",
      value: function updateColorStyle(colorName) {
        var _this$props2 = this.props,
            attributes = _this$props2.attributes,
            onChangeClassName = _this$props2.onChangeClassName;
        var updatedClassName = Object(_gutenberg_utils_classes_replacer__WEBPACK_IMPORTED_MODULE_0__["replaceClass"])(attributes.className, 'is-cnvs-badge-color', colorName);
        onChangeClassName(updatedClassName);
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props3 = this.props,
            value = _this$props3.value,
            isActive = _this$props3.isActive;
        return wp.element.createElement(Fragment, null, wp.element.createElement(RichTextToolbarButton, {
          icon: "tag",
          title: __('Badge'),
          onClick: function onClick() {
            _this3.toggleFormat();
          },
          isActive: isActive
        }), isActive ? wp.element.createElement(BadgePopover, {
          value: value,
          name: name
        }, wp.element.createElement(RadioControl, {
          label: __('Color'),
          selected: this.state.currentColor,
          options: [{
            label: __('Default'),
            value: 'default'
          }, {
            label: __('Primary'),
            value: 'primary'
          }, {
            label: __('Secondary'),
            value: 'secondary'
          }, {
            label: __('Success'),
            value: 'success'
          }, {
            label: __('Info'),
            value: 'info'
          }, {
            label: __('Warning'),
            value: 'warning'
          }, {
            label: __('Danger'),
            value: 'danger'
          }, {
            label: __('Light'),
            value: 'light'
          }, {
            label: __('Dark'),
            value: 'dark'
          }],
          onChange: function onChange(color) {
            _this3.toggleFormat(color, false);
          }
        })) : '');
      }
    }]);

    return BadgeFormat;
  }(Component)
};
registerFormatType(name, settings);

/***/ })

/******/ });