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
/******/ 	return __webpack_require__(__webpack_require__.s = 170);
/******/ })
/************************************************************************/
/******/ ({

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(171);


/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _save_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(173);
/**
 * WordPress dependencies
 */
var addFilter = wp.hooks.addFilter;
/**
 * Internal dependencies
 */



/**
 * Custom block Edit output for Tabs block.
 *
 * @param {JSX} edit Original block edit.
 * @param {Object} blockProps Block data.
 *
 * @return {JSX} Block edit.
 */

function editRender(edit, blockProps) {
  if ('canvas/tabs' === blockProps.name) {
    return wp.element.createElement(_edit_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], blockProps);
  }

  return edit;
}
/**
 * Custom block register data for Tabs block.
 *
 * @param {Object} blockData Block data.
 *
 * @return {Object} Block data.
 */


function registerData(blockData) {
  if ('canvas/tabs' === blockData.name) {
    blockData.save = _save_jsx__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  return blockData;
}

addFilter('canvas.customBlock.editRender', 'canvas/tabs/editRender', editRender);
addFilter('canvas.customBlock.registerData', 'canvas/tabs/registerData', registerData);

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabsBlockEdit; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
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

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    RichText = _wp$blockEditor.RichText;
/**
 * Component
 */

var TabsBlockEdit = /*#__PURE__*/function (_Component) {
  _inherits(TabsBlockEdit, _Component);

  var _super = _createSuper(TabsBlockEdit);

  function TabsBlockEdit() {
    var _this;

    _classCallCheck(this, TabsBlockEdit);

    _this = _super.apply(this, arguments);
    _this.state = {
      // fix for WP 5.2
      // styles control generates error
      showInnerBlocks: !!_this.props.clientId
    };
    _this.getLayoutTemplate = _this.getLayoutTemplate.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Returns the template configuration for a given section layout.
   *
   * @return {Object[]} Layout configuration.
   */


  _createClass(TabsBlockEdit, [{
    key: "getLayoutTemplate",
    value: function getLayoutTemplate() {
      var attributes = this.props.attributes;
      var tabsData = attributes.tabsData;
      var result = [];
      console.log(tabsData);

      for (var k = 0; k < tabsData.length; k++) {
        result.push(['canvas/tab', {}]);
      }

      return result;
    }
  }, {
    key: "render",
    value: function render() {
      var setAttributes = this.props.setAttributes;
      var className = this.props.className;
      var _this$props$attribute = this.props.attributes,
          tabActive = _this$props$attribute.tabActive,
          tabsData = _this$props$attribute.tabsData,
          tabsPosition = _this$props$attribute.tabsPosition,
          canvasClassName = _this$props$attribute.canvasClassName;
      className = classnames__WEBPACK_IMPORTED_MODULE_0___default()('cnvs-block-tabs', "cnvs-block-tabs-".concat(tabsData.length), 'vertical' === tabsPosition ? "cnvs-block-tabs-".concat(tabsPosition) : '', canvasClassName, className);
      return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(RangeControl, {
        label: __('Tabs'),
        value: tabsData.length,
        min: 1,
        max: 20,
        onChange: function onChange(val) {
          var newTabsData = [];

          for (var k = 0; k < val; k += 1) {
            if (tabsData[k]) {
              newTabsData.push(tabsData[k]);
            } else {
              newTabsData.push("Tab ".concat(k + 1));
            }
          }

          setAttributes({
            tabsData: newTabsData
          });
        }
      }))), wp.element.createElement("div", {
        className: className
      }, wp.element.createElement("div", {
        className: "cnvs-block-tabs-buttons"
      }, tabsData.map(function (title, i) {
        var selected = tabActive === i;
        return wp.element.createElement("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('cnvs-block-tabs-button', {
            'cnvs-block-tabs-button-active': selected
          }),
          key: "tab_button_".concat(i)
        }, wp.element.createElement(RichText, {
          tagName: "span",
          placeholder: __('Tab label'),
          value: title,
          unstableOnFocus: function unstableOnFocus() {
            return setAttributes({
              tabActive: i
            });
          },
          onChange: function onChange(value) {
            if (tabsData[i]) {
              var newTabsData = tabsData.map(function (oldTabData, newIndex) {
                if (i === newIndex) {
                  return value;
                }

                return oldTabData;
              });
              setAttributes({
                tabsData: newTabsData
              });
            }
          },
          keepPlaceholderOnFocus: true
        }));
      })), wp.element.createElement("div", {
        className: "cnvs-block-tabs-content"
      }, this.state.showInnerBlocks ? wp.element.createElement(InnerBlocks, {
        template: this.getLayoutTemplate(),
        templateLock: "all",
        allowedBlocks: ['canvas/tab']
      }) : __('Tab content'))), wp.element.createElement("style", null, "\n\t\t\t\t\t\t[data-block=\"".concat(this.props.clientId, "\"] > .canvas-component-custom-blocks > .cnvs-block-tabs > .cnvs-block-tabs-content > .block-editor-inner-blocks > .block-editor-block-list__layout > div {\n\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t[data-block=\"").concat(this.props.clientId, "\"] > .canvas-component-custom-blocks > .cnvs-block-tabs > .cnvs-block-tabs-content > .block-editor-inner-blocks > .block-editor-block-list__layout > :nth-child(").concat(tabActive + 1, ") {\n\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t}\n\t\t\t\t\t")));
    }
  }]);

  return TabsBlockEdit;
}(Component);



/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabsBlockSave; });
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

var TabsBlockSave = /*#__PURE__*/function (_Component) {
  _inherits(TabsBlockSave, _Component);

  var _super = _createSuper(TabsBlockSave);

  function TabsBlockSave() {
    _classCallCheck(this, TabsBlockSave);

    return _super.apply(this, arguments);
  }

  _createClass(TabsBlockSave, [{
    key: "render",
    value: function render() {
      return wp.element.createElement(InnerBlocks.Content, null);
    }
  }]);

  return TabsBlockSave;
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