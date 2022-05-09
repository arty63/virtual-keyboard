/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Montserrat:regular);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #ccc;\\n  font-family: \\\"Montserrat\\\";\\n  text-align: center;\\n}\\n\\n.wrapper {\\n  max-width: 1280px;\\n  margin: 0 auto;\\n  height: 100%;\\n}\\n\\n.frame {\\n  margin: 20px auto 90px;\\n  width: 853.3333333333px;\\n  height: 480px;\\n  background-color: #fafafa;\\n  border: 2px solid black;\\n  position: relative;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  z-index: 10;\\n  box-sizing: border-box;\\n  border-top-left-radius: 10px;\\n  border-top-right-radius: 10px;\\n}\\n.frame ::after {\\n  content: \\\"\\\";\\n  width: 100%;\\n  height: 15%;\\n  background-color: #b7d1c8;\\n  position: absolute;\\n  bottom: -15%;\\n  left: -2px;\\n  border: 2px solid black;\\n  border-bottom-left-radius: 10px;\\n  border-bottom-right-radius: 10px;\\n}\\n\\n.board {\\n  margin-top: 40px;\\n  width: 853.3333333333px;\\n  border-radius: 15px;\\n  background-color: antiquewhite;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n  padding: 15px;\\n}\\n\\n.row {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.btn {\\n  min-width: 25px;\\n  border-radius: 5px;\\n  line-height: 175%;\\n  flex: 1 1 auto;\\n  background-color: lightblue;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  transition: 0.5s;\\n  font-size: 20px;\\n}\\n.btn:hover {\\n  background-color: lightgreen;\\n  cursor: pointer;\\n}\\n.btn:active {\\n  border-radius: 40px;\\n  background-color: #38e038;\\n  color: #fff;\\n}\\n.btn:nth-child(n) {\\n  flex: 1 0 auto;\\n  padding: 0 5px;\\n}\\n\\n.active {\\n  border-radius: 40px;\\n  background-color: #38e038;\\n  color: #fff;\\n}\\n\\n.unvisible {\\n  display: none;\\n}\\n\\n.area {\\n  width: 98%;\\n  height: 98%;\\n  border: none;\\n  outline: none;\\n  resize: none;\\n  border-radius: 15px;\\n  background-color: #fafafa;\\n  font-size: 24px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtualkeyboardwebpack/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtualkeyboardwebpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtualkeyboardwebpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtualkeyboardwebpack/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtualkeyboardwebpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtualkeyboardwebpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtualkeyboardwebpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtualkeyboardwebpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtualkeyboardwebpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtualkeyboardwebpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbols.js */ \"./src/symbols.js\");\n//import './styles/styles.css'\r\n //импортим стили из scss\r\n\r\n  //импортим массивы с буквами для создания кнопок\r\n\r\nconst WRAPPER = document.createElement('div')\r\nWRAPPER.classList = 'wrapper'\r\ndocument.body.appendChild(WRAPPER)//создаем див враппер и кладем в документ\r\n\r\nconst TITLE = document.createElement('h1')//создаем заголовок\r\nTITLE.classList = 'title'\r\nWRAPPER.appendChild(TITLE)\r\nTITLE.textContent = 'RSS Виртуальная клавиатура'\r\n\r\nconst COVER = document.createElement('div')//создаем псевдомонитор\r\nCOVER.classList = 'frame'\r\nWRAPPER.appendChild(COVER)\r\n\r\nconst MAIN_SCREEN = document.createElement('div')\r\nMAIN_SCREEN.classList = 'main-screen'\r\nCOVER.appendChild(MAIN_SCREEN)//создаем псевдомонитор\r\n\r\nconst AREA = document.createElement('textarea')\r\nAREA.classList = 'area'\r\nCOVER.appendChild(AREA)//создаем локацию для ввода с клавиатуры и нажатия мышкой\r\n\r\nconst BOARD = document.createElement('div')\r\nBOARD.classList = 'board'\r\nWRAPPER.appendChild(BOARD)\r\n\r\nconst DISC = document.createElement('p')\r\nDISC.classList = 'discription'\r\nWRAPPER.appendChild(DISC)\r\nDISC.textContent = 'Клавиатура создана в операционной системе Windows'\r\n\r\nconst LANG = document.createElement('p')\r\nLANG.classList = 'lang'\r\nWRAPPER.appendChild(LANG)\r\nLANG.textContent = 'Для переключения языка комбинация: левыe ctrl + alt'\r\n\r\nconst row = (symbols, symbolsShift) =>{\r\n    const newRow = document.createElement('div')\r\n    newRow.classList = 'row'\r\n    BOARD.appendChild(newRow)\r\n    for (let i=0; i<symbols.length; i++){\r\n        const btn = document.createElement('div')\r\n        btn.classList = 'btn'\r\n        btn.classList.add(`${symbols[i]}`)\r\n        newRow.appendChild(btn)\r\n        const btnEn = document.createElement('span')\r\n        btnEn.classList = 'btn-en'\r\n        btn.appendChild(btnEn)\r\n        btnEn.textContent = `${symbols[i]}`\r\n        const btnEnShift = document.createElement('span')\r\n        btnEnShift.classList = 'btn-en-shift'\r\n        btnEnShift.classList.add('unvisible')\r\n        btn.appendChild(btnEnShift)\r\n        btnEnShift.textContent = `${symbolsShift[i]}`\r\n        document.addEventListener('keydown', function(event) {\r\n            if (event.code == 'CapsLock') {\r\n                btnEnShift.classList.toggle('unvisible')\r\n                btnEn.classList.toggle('unvisible')\r\n            }\r\n          });\r\n\r\n    } \r\n}\r\nrow(_symbols_js__WEBPACK_IMPORTED_MODULE_1__.firstRow, _symbols_js__WEBPACK_IMPORTED_MODULE_1__.firstRowShift)\r\nrow(_symbols_js__WEBPACK_IMPORTED_MODULE_1__.secRow, _symbols_js__WEBPACK_IMPORTED_MODULE_1__.secRowShift)\r\nrow(_symbols_js__WEBPACK_IMPORTED_MODULE_1__.thirdRow, _symbols_js__WEBPACK_IMPORTED_MODULE_1__.thirdRowShift)\r\nrow(_symbols_js__WEBPACK_IMPORTED_MODULE_1__.fourRow,_symbols_js__WEBPACK_IMPORTED_MODULE_1__.fourRowShift)\r\nrow(_symbols_js__WEBPACK_IMPORTED_MODULE_1__.fivRow, _symbols_js__WEBPACK_IMPORTED_MODULE_1__.fivRowShift)\r\n\r\ndocument.addEventListener('keydown', function(event) {\r\n            if (event.code == 'CapsLock') {  \r\n                document.querySelector('.CapsLock').classList.toggle('active')\r\n            }\r\n          });\r\n\r\nconst pushBtn = (event) =>{\r\n    //console.log(event.target.closest())   нужно доделать\r\n    if(event.target.textContent.length < 3){\r\n        AREA.textContent+=event.target.textContent\r\n    }\r\n}\r\nconst btn = document.querySelectorAll('.btn')\r\nbtn.forEach((element) => element.addEventListener('click', pushBtn));        \r\n\r\ndocument.addEventListener('keydown', function(event) {\r\n    console.log(event.key)\r\n    document.querySelector(`.${event.key}`).classList.add('active')\r\n    if(event.key.length < 3){\r\n        AREA.textContent+=event.key\r\n    }\r\n})\r\ndocument.addEventListener('keyup', function(event) {\r\n    document.querySelector(`.${event.key}`).classList.remove('active')\r\n})\n\n//# sourceURL=webpack://virtualkeyboardwebpack/./src/index.js?");

/***/ }),

/***/ "./src/symbols.js":
/*!************************!*\
  !*** ./src/symbols.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firstRow\": () => (/* binding */ firstRow),\n/* harmony export */   \"firstRowRu\": () => (/* binding */ firstRowRu),\n/* harmony export */   \"firstRowShift\": () => (/* binding */ firstRowShift),\n/* harmony export */   \"firstRowShiftRu\": () => (/* binding */ firstRowShiftRu),\n/* harmony export */   \"fivRow\": () => (/* binding */ fivRow),\n/* harmony export */   \"fivRowRu\": () => (/* binding */ fivRowRu),\n/* harmony export */   \"fivRowShift\": () => (/* binding */ fivRowShift),\n/* harmony export */   \"fivRowShiftRu\": () => (/* binding */ fivRowShiftRu),\n/* harmony export */   \"fourRow\": () => (/* binding */ fourRow),\n/* harmony export */   \"fourRowRu\": () => (/* binding */ fourRowRu),\n/* harmony export */   \"fourRowShift\": () => (/* binding */ fourRowShift),\n/* harmony export */   \"fourRowShiftRu\": () => (/* binding */ fourRowShiftRu),\n/* harmony export */   \"secRow\": () => (/* binding */ secRow),\n/* harmony export */   \"secRowRu\": () => (/* binding */ secRowRu),\n/* harmony export */   \"secRowShift\": () => (/* binding */ secRowShift),\n/* harmony export */   \"secRowShiftRu\": () => (/* binding */ secRowShiftRu),\n/* harmony export */   \"thirdRow\": () => (/* binding */ thirdRow),\n/* harmony export */   \"thirdRowRu\": () => (/* binding */ thirdRowRu),\n/* harmony export */   \"thirdRowShift\": () => (/* binding */ thirdRowShift),\n/* harmony export */   \"thirdRowShiftRu\": () => (/* binding */ thirdRowShiftRu)\n/* harmony export */ });\nconst firstRow = ['`','1','2','3','4','5','6','7','8','9','0','-','=', 'Backspace']\r\nconst firstRowShift = ['~','!','@','#', '$','%', '^', '&','*','(',')', '_','+','Backspace']\r\nconst firstRowRu = ['ё','1','2','3','4','5','6','7','8','9','0','-','=', 'Backspace']\r\nconst firstRowShiftRu = ['Ё','!','\"','№', ';','%', ':', '?','*','(',')', '_','+','Backspace']\r\n\r\n\r\n\r\nconst secRow = ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\\\','Del']\r\nconst secRowShift = ['Tab','Q','W','E','R','T','Y','U','I','O','P','{','}','|','Del']  \r\nconst secRowRu = ['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\\\','Del']\r\nconst secRowShiftRu = ['Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','/','Del']  \r\n\r\n\r\n\r\nconst thirdRow =['CapsLock', 'a','s','d','f','g','h','j','k','l',';',\"'\",'Enter']\r\nconst thirdRowShift =['CapsLock', 'A','S','D','F','G','H','J','K','L',':','\"','Enter']\r\nconst thirdRowRu =['CapsLock', 'ф','ы','в','а','п','р','о','л','д','ж',\"э\",'Enter']\r\nconst thirdRowShiftRu =['CapsLock', 'Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter']\r\n\r\n\r\nconst fourRow = ['Shift','z', 'x', 'c','v','b','n','m',',','.','\\/','▲','Shift']\r\nconst fourRowShift = ['Shift','Z', 'X', 'C','V','B','N','M','<','>','?','▲','Shift']\r\nconst fourRowRu = ['Shift','я', 'ч', 'с','м','и','т','ь','б','ю','.','▲','Shift']\r\nconst fourRowShiftRu = ['Shift','Я', 'Ч', 'С','М','И','Т','Ь','Б','Ю',',','▲','Shift']\r\n\r\n\r\nconst fivRow = ['Ctrl','WIN', 'Alt','Space','Alt','Ctrl','◄','▼','►',]\r\nconst fivRowShift = ['Ctrl','WIN', 'Alt','Space','Alt','Ctrl','◄','▼','►',]\r\nconst fivRowRu = ['Ctrl','WIN', 'Alt','Space','Alt','Ctrl','◄','▼','►',]\r\nconst fivRowShiftRu = ['Ctrl','WIN', 'Alt','Space','Alt','Ctrl','◄','▼','►',]\n\n//# sourceURL=webpack://virtualkeyboardwebpack/./src/symbols.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;