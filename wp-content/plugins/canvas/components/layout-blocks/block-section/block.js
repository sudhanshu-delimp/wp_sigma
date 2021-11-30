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
/******/ 	return __webpack_require__(__webpack_require__.s = 202);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ComponentImageSelector; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
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
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var Component = wp.element.Component;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover;
/**
 * Component
 */

var ComponentImageSelector = /*#__PURE__*/function (_Component) {
  _inherits(ComponentImageSelector, _Component);

  var _super = _createSuper(ComponentImageSelector);

  function ComponentImageSelector() {
    var _this;

    _classCallCheck(this, ComponentImageSelector);

    _this = _super.apply(this, arguments);
    _this.state = {
      showPopover: false
    };
    return _this;
  }

  _createClass(ComponentImageSelector, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          value = _this$props.value;
      var _this$props2 = this.props,
          _this$props2$items = _this$props2.items,
          items = _this$props2$items === void 0 ? [] : _this$props2$items,
          onChange = _this$props2.onChange;
      className = classnames__WEBPACK_IMPORTED_MODULE_0___default()('cnvs-component-image-selector', className);
      return wp.element.createElement("div", {
        className: className
      }, items && items.length ? items.map(function (itemData, i) {
        var isDisabled = itemData.isDisabled;
        var disabledNotice = itemData.disabledNotice;
        var itemClassName = classnames__WEBPACK_IMPORTED_MODULE_0___default()('cnvs-component-image-selector-item', {
          'cnvs-component-image-selector-item-active': value === itemData.value,
          'cnvs-component-image-selector-item-disabled': isDisabled
        });
        return wp.element.createElement("div", {
          key: "cnvs-component-image-selector-item-".concat(itemData.value),
          className: itemClassName
        }, wp.element.createElement(Button, {
          onClick: function onClick() {
            if (!isDisabled) {
              onChange(itemData.value);
            } else {
              _this2.setState({
                showPopover: itemData.value
              });
            }
          }
        }, itemData.content, _this2.state.showPopover === itemData.value && disabledNotice ? wp.element.createElement(Popover, {
          className: "cnvs-component-image-selector-item-popover",
          focusOnMount: false,
          onClickOutside: function onClickOutside() {
            _this2.setState({
              showPopover: false
            });
          }
        }, disabledNotice) : ''), wp.element.createElement("span", null, itemData.label));
      }) : '');
    }
  }]);

  return ComponentImageSelector;
}(Component);



/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(136);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, ".cnvs-component-image-selector {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-left: -8px;\n  margin-right: -8px; }\n  .cnvs-component-image-selector .cnvs-component-image-selector-item {\n    margin: 0 8px;\n    text-align: center; }\n    .cnvs-component-image-selector .cnvs-component-image-selector-item .components-button {\n      padding: 8px 10px;\n      border: 1px solid #e6e6e6;\n      height: initial;\n      border-radius: 5px;\n      background-color: #fff;\n      transition: .2s box-shadow, .2s border-color; }\n      .cnvs-component-image-selector .cnvs-component-image-selector-item .components-button svg {\n        display: block;\n        opacity: .6;\n        fill: none;\n        transition: .2s opacity; }\n      .cnvs-component-image-selector .cnvs-component-image-selector-item .components-button:hover, .cnvs-component-image-selector .cnvs-component-image-selector-item .components-button:focus {\n        box-shadow: 0 0 0 2px #d8d8d8;\n        border-color: #d8d8d8; }\n        .cnvs-component-image-selector .cnvs-component-image-selector-item .components-button:hover svg, .cnvs-component-image-selector .cnvs-component-image-selector-item .components-button:focus svg {\n          opacity: 1; }\n    .cnvs-component-image-selector .cnvs-component-image-selector-item.cnvs-component-image-selector-item-active button {\n      border-color: #017cba;\n      box-shadow: 0 0 0 1px #017cba; }\n    .cnvs-component-image-selector .cnvs-component-image-selector-item.cnvs-component-image-selector-item-disabled {\n      opacity: .5; }\n      .cnvs-component-image-selector .cnvs-component-image-selector-item.cnvs-component-image-selector-item-disabled .components-button {\n        background-color: #e2e2e2; }\n    .cnvs-component-image-selector .cnvs-component-image-selector-item span {\n      display: block;\n      margin-top: 5px;\n      margin-bottom: 8px;\n      font-size: 80%;\n      opacity: 0.5; }\n\n.edit-post-sidebar .cnvs-component-image-selector {\n  justify-content: flex-start;\n  margin-left: -5px;\n  margin-right: -5px; }\n  .edit-post-sidebar .cnvs-component-image-selector .cnvs-component-image-selector-item {\n    max-width: calc(33% - 10px);\n    margin: 0 5px; }\n    .edit-post-sidebar .cnvs-component-image-selector .cnvs-component-image-selector-item button {\n      padding: 7px 8px; }\n\n.cnvs-component-image-selector-item-popover .components-popover__content {\n  padding: 0 15px; }\n  .cnvs-component-image-selector-item-popover .components-popover__content ul {\n    list-style: initial;\n    margin-left: 15px; }\n", ""]);



/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(15);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 15:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(203);


/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(204);
/* harmony import */ var _save_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(207);
/**
 * WordPress dependencies
 */
var addFilter = wp.hooks.addFilter;
/**
 * Internal dependencies
 */



/**
 * Custom block Edit output for Section block.
 *
 * @param {JSX} edit Original block edit.
 * @param {Object} blockProps Block data.
 *
 * @return {JSX} Block edit.
 */

function editRender(edit, blockProps) {
  if ('canvas/section' === blockProps.name) {
    return wp.element.createElement(_edit_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], blockProps);
  }

  return edit;
}
/**
 * Custom block register data for Section block.
 *
 * @param {Object} blockData Block data.
 *
 * @return {Object} Block data.
 */


function registerData(blockData) {
  if ('canvas/section' === blockData.name) {
    blockData.save = _save_jsx__WEBPACK_IMPORTED_MODULE_1__["default"];

    blockData.getEditWrapperProps = function (attributes) {
      var result = {
        'data-align': 'full'
      }; // additional attribute for last block sticky

      if (attributes.sidebarSticky) {
        result['data-canvas-section-sticky'] = attributes.sidebarStickyMethod;
      }

      return result;
    };
  }

  return blockData;
}

addFilter('canvas.customBlock.editRender', 'canvas/section/editRender', editRender);
addFilter('canvas.customBlock.registerData', 'canvas/section/registerData', registerData);

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionBlockEdit; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(205);
/* harmony import */ var _gutenberg_components_image_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
/* harmony import */ var _icon_layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(206);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
 * External dependencies
 */

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
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    PanelBody = _wp$components.PanelBody,
    Placeholder = _wp$components.Placeholder,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    Notice = _wp$components.Notice;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$blockEditor2 = wp.blockEditor,
    BlockControls = _wp$blockEditor2.BlockControls,
    BlockAlignmentToolbar = _wp$blockEditor2.BlockAlignmentToolbar;
/**
 * Component
 */

var SectionBlockEdit = /*#__PURE__*/function (_Component) {
  _inherits(SectionBlockEdit, _Component);

  var _super = _createSuper(SectionBlockEdit);

  function SectionBlockEdit() {
    var _this;

    _classCallCheck(this, SectionBlockEdit);

    _this = _super.apply(this, arguments);
    _this.getLayoutTemplate = _this.getLayoutTemplate.bind(_assertThisInitialized(_this));
    _this.getLayoutSelector = _this.getLayoutSelector.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Returns the template configuration for a given section layout.
   *
   * @return {Object[]} Layout configuration.
   */


  _createClass(SectionBlockEdit, [{
    key: "getLayoutTemplate",
    value: function getLayoutTemplate() {
      var attributes = this.props.attributes;
      var layout = attributes.layout;
      var result = [];

      switch (layout) {
        case 'full':
          result.push(['canvas/section-content']);
          break;

        case 'with-sidebar':
          result.push(['canvas/section-content']);
          result.push(['canvas/section-sidebar']);
          break;
      }

      return result;
    }
    /**
     * Returns layout selector.
     *
     * @return {JSX} ImageSelector.
     */

  }, {
    key: "getLayoutSelector",
    value: function getLayoutSelector() {
      var _this$props = this.props,
          setAttributes = _this$props.setAttributes,
          attributes = _this$props.attributes;
      var layout = attributes.layout,
          sidebarPosition = attributes.sidebarPosition;
      var val = '';

      switch (layout) {
        case 'full':
          val = 'full';
          break;

        case 'with-sidebar':
          val = "with-sidebar".concat('left' === sidebarPosition ? '-left' : '');
          break;
      }

      return wp.element.createElement(_gutenberg_components_image_selector__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: val,
        onChange: function onChange(val) {
          // confirmation to remove sidebar.
          if (val === 'full' && ('with-sidebar' === layout || 'with-sidebar-left' === layout)) {
            if (!window.confirm(__('When switching from a Sidebar layout to the Fullwidth layout all sidebar content will be removed. Are you sure you would like to switch the layout?'))) {
              return;
            }
          }

          switch (val) {
            case 'full':
              setAttributes({
                layout: 'full'
              });
              break;

            case 'with-sidebar':
              setAttributes({
                layout: 'with-sidebar',
                sidebarPosition: 'right'
              });
              break;

            case 'with-sidebar-left':
              setAttributes({
                layout: 'with-sidebar',
                sidebarPosition: 'left'
              });
              break;
          }
        },
        items: [{
          content: _icon_layouts__WEBPACK_IMPORTED_MODULE_3__["default"].full,
          value: 'full',
          label: __('Fullwidth')
        }, {
          content: _icon_layouts__WEBPACK_IMPORTED_MODULE_3__["default"]['with-sidebar'],
          value: 'with-sidebar',
          label: __('Right Sidebar')
        }, {
          content: _icon_layouts__WEBPACK_IMPORTED_MODULE_3__["default"]['with-sidebar-left'],
          value: 'with-sidebar-left',
          label: __('Left Sidebar')
        }]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props2 = this.props,
          setAttributes = _this$props2.setAttributes,
          attributes = _this$props2.attributes,
          location = _this$props2.location;
      var className = this.props.className;
      var layout = attributes.layout,
          layoutAlign = attributes.layoutAlign,
          contentWidth = attributes.contentWidth,
          sidebarSticky = attributes.sidebarSticky,
          sidebarStickyMethod = attributes.sidebarStickyMethod,
          sidebarPosition = attributes.sidebarPosition,
          textColor = attributes.textColor,
          backgroundColor = attributes.backgroundColor,
          canvasClassName = attributes.canvasClassName;
      var pageTemplate = wp.data.select('core/editor').getEditedPostAttribute('template');
      className = classnames__WEBPACK_IMPORTED_MODULE_0___default()('cnvs-block-section', (_classnames = {}, _defineProperty(_classnames, "cnvs-block-section-fullwidth", 'full' === layout), _defineProperty(_classnames, "cnvs-block-section-layout-align-".concat(layoutAlign), 'full' === layout && layoutAlign), _defineProperty(_classnames, "cnvs-block-section-sidebar-sticky-".concat(sidebarStickyMethod), 'with-sidebar' === layout && sidebarSticky), _defineProperty(_classnames, "cnvs-block-section-sidebar-position-".concat(sidebarPosition), 'with-sidebar' === layout && sidebarPosition), _defineProperty(_classnames, 'cnvs-block-section-with-text-color', textColor), _defineProperty(_classnames, 'cnvs-block-section-with-background-color', backgroundColor), _classnames), canvasClassName); // Page template is Canvas Full Width.

      if ('template-canvas-fullwidth.php' !== pageTemplate) {
        return wp.element.createElement(Placeholder, {
          icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"],
          label: __('Section'),
          className: "cnvs-block-section-notice"
        }, wp.element.createElement(Notice, {
          status: "warning",
          isDismissible: false
        }, __('To use this block, please select the page template - "Canvas Full Width".')));
      } // Block is not in root.


      if ('root' !== location) {
        return wp.element.createElement(Placeholder, {
          icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"],
          label: __('Section'),
          className: "cnvs-block-section-notice"
        }, wp.element.createElement(Notice, {
          status: "warning",
          isDismissible: false
        }, __('Sections are supported on root level only. You’ve added the section inside another block and layout will most likely break. Please add the section block as a parent block instead.')));
      } // Layout selector.


      if (!layout) {
        return wp.element.createElement(Placeholder, {
          className: "canvas-component-custom-layouts-placeholder",
          icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"],
          label: __('Section'),
          instructions: __('Select the section layout type.')
        }, this.getLayoutSelector());
      }

      var sectionStyle = {};

      if (!canvasBSLocalize.disableSectionResponsive) {
        sectionStyle = {
          maxWidth: (contentWidth || 1200) + 'px'
        };
      }

      return wp.element.createElement(Fragment, null, 'full' === layout ? wp.element.createElement(BlockControls, {
        key: "controls"
      }, wp.element.createElement(BlockAlignmentToolbar, {
        value: layoutAlign,
        onChange: function onChange(val) {
          setAttributes({
            layoutAlign: val
          });
          window.dispatchEvent(new Event('resize'));
        },
        controls: ['full']
      })) : '', wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: __('Layout')
      }, wp.element.createElement(BaseControl, null, this.getLayoutSelector()), !canvasBSLocalize.disableSectionResponsive && ('full' === layout && !layoutAlign || 'full' !== layout) ? wp.element.createElement(Fragment, null, wp.element.createElement(RangeControl, {
        label: __('Content Width (px.)'),
        value: contentWidth || 1200,
        min: 320,
        max: 1920,
        step: 1,
        onChange: function onChange(val) {
          setAttributes({
            contentWidth: val
          });
          window.dispatchEvent(new Event('resize'));
        }
      })) : '', 'with-sidebar' === layout ? wp.element.createElement(Fragment, null, wp.element.createElement(ToggleControl, {
        label: __('Sticky Sidebar'),
        checked: !!sidebarSticky,
        onChange: function onChange() {
          setAttributes({
            sidebarSticky: !sidebarSticky
          });
        }
      }), sidebarSticky ? wp.element.createElement(SelectControl, {
        label: __('Sticky Method'),
        value: sidebarStickyMethod,
        onChange: function onChange(val) {
          setAttributes({
            sidebarStickyMethod: val
          });
        },
        options: [{
          label: __('Top Edge'),
          value: 'top'
        }, {
          label: __('Bottom Edge'),
          value: 'bottom'
        }, {
          label: __('Top Edge of Last Block'),
          value: 'top-last-block'
        }]
      }) : '') : '')), wp.element.createElement("div", {
        className: className
      }, wp.element.createElement("div", {
        className: "cnvs-block-section-inner",
        style: sectionStyle
      }, wp.element.createElement(InnerBlocks, {
        template: this.getLayoutTemplate(),
        templateLock: "all",
        allowedBlocks: ['canvas/section-content', 'canvas/section-sidebar']
      }))));
    }
  }]);

  return SectionBlockEdit;
}(Component);



/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;
/* harmony default export */ __webpack_exports__["default"] = (wp.element.createElement(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, wp.element.createElement(Path, {
  d: "M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm16 2v10h-4V7h4m2-2h-8v14h8V5z"
})));

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    Path = _wp$components.Path,
    Rect = _wp$components.Rect,
    SVG = _wp$components.SVG;
/* harmony default export */ __webpack_exports__["default"] = ({
  'full': wp.element.createElement(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "50",
    height: "29",
    viewBox: "0 0 50 29",
    fill: "none"
  }, wp.element.createElement(Rect, {
    x: "3",
    y: "3",
    width: "44",
    height: "23",
    rx: "2",
    stroke: "black",
    strokeWidth: "2"
  })),
  'with-sidebar': wp.element.createElement(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "50",
    height: "29",
    viewBox: "0 0 50 29",
    fill: "none"
  }, wp.element.createElement(Rect, {
    x: "3",
    y: "3",
    width: "44",
    height: "23",
    rx: "2",
    stroke: "black",
    strokeWidth: "2"
  }), wp.element.createElement(Path, {
    d: "M33 3.5V26",
    stroke: "black",
    strokeWidth: "2"
  })),
  'with-sidebar-left': wp.element.createElement(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "50",
    height: "29",
    viewBox: "0 0 50 29",
    fill: "none"
  }, wp.element.createElement(Rect, {
    x: "3",
    y: "3",
    width: "44",
    height: "23",
    rx: "2",
    stroke: "black",
    strokeWidth: "2"
  }), wp.element.createElement(Path, {
    d: "M17 3V25.5",
    stroke: "black",
    strokeWidth: "2"
  }))
});

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionBlockSave; });
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

var SectionBlockSave = /*#__PURE__*/function (_Component) {
  _inherits(SectionBlockSave, _Component);

  var _super = _createSuper(SectionBlockSave);

  function SectionBlockSave() {
    _classCallCheck(this, SectionBlockSave);

    return _super.apply(this, arguments);
  }

  _createClass(SectionBlockSave, [{
    key: "render",
    value: function render() {
      var className = 'cnvs-block-section-content';
      return wp.element.createElement(InnerBlocks.Content, null);
    }
  }]);

  return SectionBlockSave;
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