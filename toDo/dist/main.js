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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nbody{\\ndisplay: grid;\\ngrid-template-rows: 1fr 5fr 1fr;\\ngrid-template-columns: 1fr 5fr;\\ngrid-template-areas: \\\"header header\\\"\\n                     \\\"sidebar content\\\"\\n                     \\\"footer footer\\\" ;\\n}\\n.header{\\nborder: 1px solid black;\\nheight: 100px;\\ngrid-area: header;\\n}\\n.content{\\nbackground-color: whitesmoke;\\nposition: relative;\\nborder: 1px solid black;\\ngrid-area: content;\\ndisplay: grid; \\nalign-items: center;\\njustify-content: center;\\n}\\n#toDoFormcontainer{\\n    display: none;\\n    position: absolute;\\n    top: 0;\\n    left: 300px;\\n    border: 1px solid black;\\n    \\n}\\n#dueDate{\\n\\n}\\n.openToDoForm{\\n    /* new todo boton */\\nheight: 30px;\\nbackground-color: yellow;\\ncolor: black;\\nposition: absolute;\\ntop: 120px;\\nleft: 300px;\\n}\\n.sidebar{\\n    border: 1px solid black;\\n    grid-area: sidebar;\\n}\\n.footer{\\n    border: 1px solid black;\\ngrid-area: footer;\\n}\\n/* tarjetas de los todo */\\n.toDoContainer{\\n    background-color: antiquewhite;\\nwidth: 300px;\\ndisplay: grid;\\ngrid-template-rows: repeat(2, 1fr);\\nborder: 1px solid black;\\n}\\n.toDoTitle{\\nfont-size: 12px;\\n}\\n.toDoNotes{\\nfont-size: 8px;\\n}\\n.checkBox{\\n    width: 20px;\\n    height: 20px;\\n    border: 1px solid black;\\n    border-radius: 10px;\\n}\\n.openArrayForm{\\n\\n}\\n/* Formulario del array */\\n#arrayFormContainer{\\n    display: none; \\n    position: absolute;\\n    bottom: 100px;\\n    width: 170px;\\n    border: 1px solid black;\\n   \\n}\\n.projectContainer{\\nheight: 20px;\\nborder: 1px solid black;\\n}\\n.projectTitle{\\nfont-size: 12px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewArray\": () => (/* binding */ addNewArray),\n/* harmony export */   \"addNewToDo\": () => (/* binding */ addNewToDo),\n/* harmony export */   \"dueDate\": () => (/* binding */ dueDate),\n/* harmony export */   \"notesInput\": () => (/* binding */ notesInput),\n/* harmony export */   \"projectName\": () => (/* binding */ projectName),\n/* harmony export */   \"renderDefaultProjects\": () => (/* binding */ renderDefaultProjects),\n/* harmony export */   \"renderElements\": () => (/* binding */ renderElements),\n/* harmony export */   \"renderProject\": () => (/* binding */ renderProject),\n/* harmony export */   \"renderToDo\": () => (/* binding */ renderToDo),\n/* harmony export */   \"submitBtn\": () => (/* binding */ submitBtn),\n/* harmony export */   \"submitBtnA\": () => (/* binding */ submitBtnA),\n/* harmony export */   \"titleInput\": () => (/* binding */ titleInput)\n/* harmony export */ });\n/* harmony import */ var _checkTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkTodo */ \"./src/checkTodo.js\");\n\n\n// el boton para agregar to do y el formulario de proyectos tiene de top 0 hasta arriba de la web\n//creo que es porque no se hizo bien el append\n\n//form elements\nconst container = document.getElementById('toDoFormcontainer');\nconst arrayFormContainer = document.getElementById('arrayFormContainer');//A\nlet titleInput = document.getElementById('title');\nlet notesInput = document.getElementById('notes');\nlet dueDate = document.getElementById('dueDate');\nlet submitBtn = document.getElementById('submit');\nlet projectName = document.getElementById('project');//A\nlet submitBtnA = document.getElementById('submitA'); //A for array\nlet inputs = document.querySelectorAll('input');\n\n//render layout and general elements\nconst header = document.createElement('div');\nheader.classList.add('header');\nconst content = document.createElement('div');\ncontent.classList.add('content');\nconst sidebar = document.createElement('div');\nsidebar.classList.add('sidebar');\nconst footer = document.createElement('div');\nfooter.classList.add('footer');\nconst addNewToDo = document.createElement('button');\naddNewToDo.classList.add('openToDoForm')\naddNewToDo.textContent = 'New To Do';\nconst addNewArray = document.createElement('button');\naddNewArray.classList.add('openArrayForm')//A\naddNewArray.textContent = 'New Array';//A\nsidebar.append(addNewArray, arrayFormContainer);\ncontent.appendChild(container, addNewToDo);\nconst renderElements = document.body.append(header, content, sidebar, footer, addNewToDo);\n\n\n//render to do elements\nfunction renderToDo(todo){\n    const toDoContainer = document.createElement('div');\n    const toDoTitle = document.createElement('h3');\n    const toDoNotes = document.createElement('p');\n    const checkBox = document.createElement('div');\n    // const toDoDate = document.createElement('div');\n\n    toDoContainer.classList.add('toDoContainer');\n    toDoTitle.classList.add('toDoTitle');\n    toDoNotes.classList.add('toDoNotes');\n    checkBox.classList.add('checkBox');\n    checkBox.addEventListener('click', _checkTodo__WEBPACK_IMPORTED_MODULE_0__.pruebaCheckBox); //cambiarlo a toggle para que cambie de clase\n    // toDoDate.classList.add('toDoDate');\n\n    toDoTitle.textContent = `${todo.title}`;\n    toDoNotes.textContent = `${todo.notes}`;\n\n    toDoContainer.append(toDoTitle, toDoNotes, checkBox);\n    content.append(toDoContainer);\n\n    return{\n        toDoContainer\n    }\n}\n\nfunction renderProject(){\n    const projectContainer = document.createElement('div');\n    const projectTitle = document.createElement('h3');\n\n    projectContainer.classList.add('projectContainer');\n    projectTitle.classList.add('projectTitle');\n\n    projectTitle.textContent = `${projectName.value}`;\n\n    projectContainer.append(projectTitle);\n    sidebar.append(projectContainer);\n\n    return{\n        projectContainer\n    }\n}\n\nfunction renderDefaultProjects (array, name){\n\n    const projectContainer = document.createElement('div');\n    const projectTitle = document.createElement('h3');\n\n    projectContainer.classList.add('projectContainer');\n    projectTitle.classList.add('projectTitle');\n\n\n    projectTitle.textContent = `${name}`;\n\n    projectContainer.append(projectTitle);\n    sidebar.append(projectContainer);\n    return{\n        projectContainer\n    }\n}\n\n\n\n//# sourceURL=webpack://todo/./src/DOM.js?");

/***/ }),

/***/ "./src/checkTodo.js":
/*!**************************!*\
  !*** ./src/checkTodo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pruebaCheckBox\": () => (/* binding */ pruebaCheckBox)\n/* harmony export */ });\n\n//exportar funcion para cambiar de clase al to-do cuando haces click\n//crear clase que de momento ponga en rojo al to-do\n\nfunction pruebaCheckBox (){\n    console.log('hola')\n}\n\n//# sourceURL=webpack://todo/./src/checkTodo.js?");

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo),\n/* harmony export */   \"done\": () => (/* binding */ done),\n/* harmony export */   \"generalTodo\": () => (/* binding */ generalTodo),\n/* harmony export */   \"prueba1\": () => (/* binding */ prueba1),\n/* harmony export */   \"prueba2\": () => (/* binding */ prueba2),\n/* harmony export */   \"renderTDList\": () => (/* binding */ renderTDList)\n/* harmony export */ });\n/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit */ \"./src/submit.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n\nconst generalTodo = [];\n\nclass Todo {\n    constructor (title, notes, dueDate){\n        this.title = title;\n        this.notes = notes;\n        this.dueDate = dueDate\n    }\n};\n\nconst prueba1 = new Todo ('prueba', 'nueva prueba');\nconst prueba2 = new Todo ('prueba 2', 'ver como funciona');\nconst done = []\n\ngeneralTodo.push(prueba1, prueba2);\n\nfunction renderTDList (){\n    generalTodo.forEach(todo => (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.renderToDo)(todo))\n    console.log(generalTodo);\n}\n\n(0,_DOM__WEBPACK_IMPORTED_MODULE_1__.renderDefaultProjects)(generalTodo, 'General');\n\n//# sourceURL=webpack://todo/./src/createTodo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _popUpForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popUpForm */ \"./src/popUpForm.js\");\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n\n\n\n\n\n(0,_createTodo__WEBPACK_IMPORTED_MODULE_3__.renderTDList)();\n(0,_popUpForm__WEBPACK_IMPORTED_MODULE_2__.clickNewToDo)();\n(0,_popUpForm__WEBPACK_IMPORTED_MODULE_2__.closePopUpToDo)();\n(0,_popUpForm__WEBPACK_IMPORTED_MODULE_2__.clickNewProject)();//A\n(0,_popUpForm__WEBPACK_IMPORTED_MODULE_2__.closeProjectPopUp)();//A\n\n//trabajando en el formulario del newArray\n    //falta enlazar el pop up con el boton de new array\n    //que desaparezca con su submit\n    //que el input se guarde en una variable para llamar un nuevo array\n    //empujar ese array a general\n    // elementos de render del array\n    //logica de que cada array que picas muestra solo su contenido\n\n\n\n    \n\n\n//1 DOM va a exportar a popUp el metodo de seleccionar el boton +\n//2 popUp va a cambiar la clase de la forma para que sea visible\n//3 aparece el formulario y se rellena\n//4.1 submit toma los valores del DOM, la logica de fechas y los convierte en variables para exportar a createTodo\n//4.2 submit va a importar una funcion de popUp para cambiar la clase para que sea invisible y borre el valor de las variables\n//5 createToDo exporta un objeto para que se empuje a un array\n//6 toDoArray importa métodos del DOM para hacer un render de los elementos dentro de cada array\n// 7 hay un modulo similar a createToDo que es para crear un array, que toma solo un argumento que es el nombre del proyecto\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/popUpForm.js":
/*!**************************!*\
  !*** ./src/popUpForm.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickNewProject\": () => (/* binding */ clickNewProject),\n/* harmony export */   \"clickNewToDo\": () => (/* binding */ clickNewToDo),\n/* harmony export */   \"closePopUpToDo\": () => (/* binding */ closePopUpToDo),\n/* harmony export */   \"closeProjectPopUp\": () => (/* binding */ closeProjectPopUp)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n//open and close the to do form elements\nfunction clickNewToDo(){\n    _DOM__WEBPACK_IMPORTED_MODULE_0__.addNewToDo.addEventListener('click', openForm);\n};\nfunction closePopUpToDo(){\n    _DOM__WEBPACK_IMPORTED_MODULE_0__.submitBtn.addEventListener('click', closeForm);\n};\nfunction openForm() {\n  document.getElementById(\"toDoFormcontainer\").style.display = \"block\";\n};\n\nfunction closeForm() {\n  document.getElementById(\"toDoFormcontainer\").style.display = \"none\";\n};\n\n\n//open and close project/arrays form\nfunction clickNewProject(){\n  _DOM__WEBPACK_IMPORTED_MODULE_0__.addNewArray.addEventListener('click', openProjectForm);\n};\n\nfunction closeProjectPopUp(){\n  _DOM__WEBPACK_IMPORTED_MODULE_0__.submitBtnA.addEventListener('click', closeProjectForm);\n};\n\nfunction openProjectForm() {\n    document.getElementById(\"arrayFormContainer\").style.display = \"block\";\n};\nfunction closeProjectForm() {\n    document.getElementById(\"arrayFormContainer\").style.display = \"none\";\n};\n\n\n//# sourceURL=webpack://todo/./src/popUpForm.js?");

/***/ }),

/***/ "./src/submit.js":
/*!***********************!*\
  !*** ./src/submit.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n\n\n\n\n//creates a new to do when you click submit, it gets pushed to the generalTodo array\n_DOM__WEBPACK_IMPORTED_MODULE_0__.submitBtn.addEventListener('click', getInputValues);\nfunction getInputValues(event){\n    event.preventDefault();\n    let newTitle = _DOM__WEBPACK_IMPORTED_MODULE_0__.titleInput.value;\n    let newNotes = _DOM__WEBPACK_IMPORTED_MODULE_0__.notesInput.value;\n    let newDate = _DOM__WEBPACK_IMPORTED_MODULE_0__.dueDate.value;\n    const dynamicTodo = new _createTodo__WEBPACK_IMPORTED_MODULE_1__.Todo (newTitle, newNotes, newDate);\n    console.log(newDate);\n    _createTodo__WEBPACK_IMPORTED_MODULE_1__.generalTodo.push(dynamicTodo);\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderToDo)(dynamicTodo);\n}\n\n//creates a new array inside the generalToDo array, in other words the project list\n_DOM__WEBPACK_IMPORTED_MODULE_0__.submitBtnA.addEventListener('click', getProjectName);\nfunction getProjectName(event){ \n    event.preventDefault();\n    let projectInput = _DOM__WEBPACK_IMPORTED_MODULE_0__.projectName.value;\n    [projectInput] = []\n    _createTodo__WEBPACK_IMPORTED_MODULE_1__.generalTodo.push([projectInput]);\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderProject)([projectInput]);\n}\n\n\n\n//# sourceURL=webpack://todo/./src/submit.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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