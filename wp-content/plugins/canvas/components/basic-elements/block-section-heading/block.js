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
/******/ 	return __webpack_require__(__webpack_require__.s = 161);
/******/ })
/************************************************************************/
/******/ ({

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(162);


/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/**
 * WordPress dependencies
 */
var addFilter = wp.hooks.addFilter;
/**
 * Internal dependencies
 */


/**
 * Custom block Edit output for Styled Block.
 *
 * @param {JSX} edit Original block edit.
 * @param {Object} blockProps Block data.
 *
 * @return {JSX} Block edit.
 */

function editRender(edit, blockProps) {
  if ('canvas/section-heading' === blockProps.name) {
    return wp.element.createElement(_edit_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], blockProps);
  }

  return edit;
}

addFilter('canvas.customBlock.editRender', 'canvas/section-heading/editRender', editRender);

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aligntoolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(164);
/* harmony import */ var _tagtoolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(165);
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

var createBlock = wp.blocks.createBlock;
var __ = wp.i18n.__;
var Component = wp.element.Component;
var BlockControls = wp.blockEditor.BlockControls;
var RichText = wp.blockEditor.RichText;
/**
 * Component
 */

var SectionHeadingBlockEdit = /*#__PURE__*/function (_Component) {
  _inherits(SectionHeadingBlockEdit, _Component);

  var _super = _createSuper(SectionHeadingBlockEdit);

  function SectionHeadingBlockEdit() {
    var _this;

    _classCallCheck(this, SectionHeadingBlockEdit);

    _this = _super.apply(this, arguments);
    _this.state = {
      tagName: canvasBSHLocalize.sectionHeadingTag
    };
    return _this;
  }

  _createClass(SectionHeadingBlockEdit, [{
    key: "render",
    value: function render() {
      var setAttributes = this.props.setAttributes;
      var _this$props = this.props,
          className = _this$props.className,
          attributes = _this$props.attributes;
      var halign = attributes.halign,
          tag = attributes.tag,
          content = attributes.content,
          canvasClassName = attributes.canvasClassName;
      this.state.tagName = tag ? tag : ''; // If tag default.

      if ('default' === tag || 'none' === tag || !tag) {
        this.state.tagName = canvasBSHLocalize.sectionHeadingTag;
      }

      var classAlign = halign ? "halign".concat(halign) : ''; // If align default.

      if ('default' === halign || 'none' === halign || !halign) {
        classAlign = canvasBSHLocalize.sectionHeadingAlign;
      }

      className = classnames__WEBPACK_IMPORTED_MODULE_0___default()('cnvs-block-section-heading', classAlign, canvasClassName, className);
      return wp.element.createElement("div", null, wp.element.createElement(BlockControls, null, wp.element.createElement(_aligntoolbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: halign,
        onChange: function onChange(val) {
          var align = val === undefined ? 'default' : val;
          setAttributes({
            halign: align
          });
        }
      }), wp.element.createElement(_tagtoolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: tag,
        onChange: function onChange(val) {
          var type = val === undefined ? 'default' : val;
          setAttributes({
            tag: type
          });
        }
      })), wp.element.createElement(this.state.tagName, {
        className: className
      }, wp.element.createElement("div", {
        className: "cnvs-section-title"
      }, wp.element.createElement(RichText, {
        tagName: "span",
        className: "cnvs-section-plain",
        onChange: function onChange(newContent) {
          setAttributes({
            content: newContent
          });
        },
        value: content,
        placeholder: __('Write heading…')
      }))));
    }
  }]);

  return SectionHeadingBlockEdit;
}(Component);

jQuery(function () {
  function sectionHeadingTransforms(settings) {
    if (settings.name !== 'canvas/section-heading') {
      return settings;
    }

    settings.transforms = {
      from: [{
        type: 'block',
        blocks: ['core/heading', 'core/paragraph'],
        transform: function transform(attributes) {
          return createBlock('canvas/section-heading', {
            content: attributes.content
          });
        }
      }]
    };
    return settings;
  }

  wp.hooks.addFilter('canvas.customBlock.registerData', 'canvas/section-heading/transforms', sectionHeadingTransforms);
});
/* harmony default export */ __webpack_exports__["default"] = (SectionHeadingBlockEdit);

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExtendAlignmentToolbar; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    Icon = _wp$components.Icon,
    Toolbar = _wp$components.Toolbar,
    DropdownMenu = _wp$components.DropdownMenu;
/**
 * Component
 */

var ExtendAlignmentToolbar = /*#__PURE__*/function (_Component) {
  _inherits(ExtendAlignmentToolbar, _Component);

  var _super = _createSuper(ExtendAlignmentToolbar);

  function ExtendAlignmentToolbar() {
    _classCallCheck(this, ExtendAlignmentToolbar);

    return _super.apply(this, arguments);
  }

  _createClass(ExtendAlignmentToolbar, [{
    key: "render",
    value: function render() {
      var DEFAULT_ALIGNMENT_CONTROLS = [{
        icon: wp.element.createElement(Icon, {
          icon: "editor-textcolor"
        }),
        title: __('Default Align Text'),
        align: 'default'
      }, {
        icon: wp.element.createElement(Icon, {
          icon: "editor-alignleft"
        }),
        title: __('Align Text Left'),
        align: 'left'
      }, {
        icon: wp.element.createElement(Icon, {
          icon: "editor-aligncenter"
        }),
        title: __('Align Text Center'),
        align: 'center'
      }, {
        icon: wp.element.createElement(Icon, {
          icon: "editor-alignright"
        }),
        title: __('Align Text Right'),
        align: 'right'
      }];
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange,
          _this$props$alignment = _this$props.alignmentControls,
          alignmentControls = _this$props$alignment === void 0 ? DEFAULT_ALIGNMENT_CONTROLS : _this$props$alignment;

      function applyOrUnset(align) {
        return function () {
          return onChange(value === align ? undefined : align);
        };
      }

      var activeAlignment = alignmentControls.find(function (control) {
        return value === control.align || 'default' === control.align && ('none' === value || 'default' === value || !value);
      });
      return wp.element.createElement(Toolbar, null, wp.element.createElement(DropdownMenu, {
        icon: activeAlignment ? activeAlignment.icon : wp.element.createElement(Icon, {
          icon: "editor-textcolor"
        }),
        label: activeAlignment ? activeAlignment.title : __('Change text alignment'),
        controls: alignmentControls.map(function (control) {
          var align = control.align;
          var isActive = value === align || 'default' === align && ('none' === value || 'default' === value || !value);
          return _objectSpread(_objectSpread({}, control), {}, {
            isActive: isActive,
            onClick: applyOrUnset(align)
          });
        })
      }));
    }
  }]);

  return ExtendAlignmentToolbar;
}(Component);



/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExtendTagToolbar; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    Icon = _wp$components.Icon,
    Toolbar = _wp$components.Toolbar,
    DropdownMenu = _wp$components.DropdownMenu,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;

function HeadingLevelIcon(level) {
  var levelToPath = {
    1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
    2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
    3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
    4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
    5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
    6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z'
  };

  if (!levelToPath.hasOwnProperty(level)) {
    return null;
  }

  return wp.element.createElement(SVG, {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, wp.element.createElement(Path, {
    d: levelToPath[level]
  }));
}
/**
 * Component
 */


var ExtendTagToolbar = /*#__PURE__*/function (_Component) {
  _inherits(ExtendTagToolbar, _Component);

  var _super = _createSuper(ExtendTagToolbar);

  function ExtendTagToolbar() {
    _classCallCheck(this, ExtendTagToolbar);

    return _super.apply(this, arguments);
  }

  _createClass(ExtendTagToolbar, [{
    key: "render",
    value: function render() {
      var DEFAULT_TAG_CONTROLS = [{
        icon: wp.element.createElement(Icon, {
          icon: "editor-code"
        }),
        title: __('Default'),
        type: 'default'
      }, {
        icon: HeadingLevelIcon(1),
        title: __('H1'),
        type: 'h1'
      }, {
        icon: HeadingLevelIcon(2),
        title: __('H2'),
        type: 'h2'
      }, {
        icon: HeadingLevelIcon(3),
        title: __('H3'),
        type: 'h3'
      }, {
        icon: HeadingLevelIcon(4),
        title: __('H4'),
        type: 'h4'
      }, {
        icon: HeadingLevelIcon(5),
        title: __('H5'),
        type: 'h5'
      }, {
        icon: HeadingLevelIcon(6),
        title: __('H6'),
        type: 'h6'
      }, {
        icon: wp.element.createElement(Icon, {
          icon: "minus"
        }),
        title: __('DIV'),
        type: 'div'
      }, {
        icon: wp.element.createElement(SVG, {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24"
        }, wp.element.createElement(Path, {
          d: "M11 5v7H9.5C7.6 12 6 10.4 6 8.5S7.6 5 9.5 5H11m8-2H9.5C6.5 3 4 5.5 4 8.5S6.5 14 9.5 14H11v7h2V5h2v16h2V5h2V3z"
        })),
        title: __('P'),
        type: 'p'
      }];
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange,
          _this$props$tagContro = _this$props.tagControls,
          tagControls = _this$props$tagContro === void 0 ? DEFAULT_TAG_CONTROLS : _this$props$tagContro;

      function applyOrUnset(type) {
        return function () {
          return onChange(value === type ? undefined : type);
        };
      }

      var activeTag = tagControls.find(function (control) {
        return value === control.type || 'default' === control.type && ('none' === value || 'default' === value || !value);
      });
      return wp.element.createElement(Toolbar, null, wp.element.createElement(DropdownMenu, {
        icon: activeTag ? activeTag.icon : wp.element.createElement(Icon, {
          icon: "editor-code"
        }),
        label: activeTag ? activeTag.title : __('Change type tag'),
        controls: tagControls.map(function (control) {
          var type = control.type;
          var isActive = value === type || 'default' === type && ('none' === value || 'default' === value || !value);
          return _objectSpread(_objectSpread({}, control), {}, {
            isActive: isActive,
            onClick: applyOrUnset(type)
          });
        })
      }));
    }
  }]);

  return ExtendTagToolbar;
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