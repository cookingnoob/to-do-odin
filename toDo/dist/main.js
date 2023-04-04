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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nbody{\\ndisplay: grid;\\ngrid-template-rows: 1fr 5fr 1fr;\\ngrid-template-columns: 1fr 5fr;\\ngrid-template-areas: \\\"header header\\\"\\n                     \\\"sidebar content\\\"\\n                     \\\"footer footer\\\" ;\\n}\\n.header{\\nborder: 1px solid black;\\nheight: 100px;\\ngrid-area: header;\\n}\\n.content{\\nbackground-color: whitesmoke;\\nposition: relative;\\nborder: 1px solid black;\\ngrid-area: content;\\ndisplay: grid; \\njustify-content: center;\\n}\\n#toDoFormcontainer{\\n    display: none;\\n    position: absolute;\\n    top: 0;\\n    left: 300px;\\n    border: 1px solid black;\\n    \\n}\\n#dueDate{\\n\\n}\\n.openToDoForm{\\n    /* new todo boton */\\nheight: 30px;\\nbackground-color: yellow;\\ncolor: black;\\nposition: absolute;\\ntop: 120px;\\nleft: 300px;\\n}\\n.sidebar{\\n    border: 1px solid black;\\n    grid-area: sidebar;\\n}\\n.footer{\\n    border: 1px solid black;\\ngrid-area: footer;\\n}\\n/* tarjetas de los todo */\\n.toDoContainer{\\n    background-color: antiquewhite;\\nwidth: 400px;\\nheight: 100px;\\ndisplay: grid;\\ngrid-template-rows: repeat(2, 1fr);\\nborder: 1px solid black;\\n}\\n.toDoTitle{\\nfont-size: 12px;\\n}\\n.toDoNotes{\\nfont-size: 8px;\\n}\\n.checkBox{\\n    width: 20px;\\n    height: 20px;\\n    border: 1px solid black;\\n    border-radius: 10px;\\n}\\n.openArrayForm{\\n\\n}\\n/* Formulario del array */\\n#arrayFormContainer{\\n    display: none; \\n    position: absolute;\\n    bottom: 100px;\\n    width: 170px;\\n    border: 1px solid black;\\n   \\n}\\n.projectContainer{\\nheight: 20px;\\nborder: 1px solid black;\\n}\\n.projectTitle{\\nfont-size: 12px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"daysInWeek\": () => (/* binding */ daysInWeek),\n/* harmony export */   \"daysInYear\": () => (/* binding */ daysInYear),\n/* harmony export */   \"maxTime\": () => (/* binding */ maxTime),\n/* harmony export */   \"millisecondsInHour\": () => (/* binding */ millisecondsInHour),\n/* harmony export */   \"millisecondsInMinute\": () => (/* binding */ millisecondsInMinute),\n/* harmony export */   \"millisecondsInSecond\": () => (/* binding */ millisecondsInSecond),\n/* harmony export */   \"minTime\": () => (/* binding */ minTime),\n/* harmony export */   \"minutesInHour\": () => (/* binding */ minutesInHour),\n/* harmony export */   \"monthsInQuarter\": () => (/* binding */ monthsInQuarter),\n/* harmony export */   \"monthsInYear\": () => (/* binding */ monthsInYear),\n/* harmony export */   \"quartersInYear\": () => (/* binding */ quartersInYear),\n/* harmony export */   \"secondsInDay\": () => (/* binding */ secondsInDay),\n/* harmony export */   \"secondsInHour\": () => (/* binding */ secondsInHour),\n/* harmony export */   \"secondsInMinute\": () => (/* binding */ secondsInMinute),\n/* harmony export */   \"secondsInMonth\": () => (/* binding */ secondsInMonth),\n/* harmony export */   \"secondsInQuarter\": () => (/* binding */ secondsInQuarter),\n/* harmony export */   \"secondsInWeek\": () => (/* binding */ secondsInWeek),\n/* harmony export */   \"secondsInYear\": () => (/* binding */ secondsInYear)\n/* harmony export */ });\n/**\n * Days in 1 week.\n *\n * @name daysInWeek\n * @constant\n * @type {number}\n * @default\n */\nvar daysInWeek = 7;\n/**\n * Days in 1 year\n * One years equals 365.2425 days according to the formula:\n *\n * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.\n * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days\n *\n * @name daysInYear\n * @constant\n * @type {number}\n * @default\n */\n\nvar daysInYear = 365.2425;\n/**\n * Maximum allowed time.\n *\n * @name maxTime\n * @constant\n * @type {number}\n * @default\n */\n\nvar maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;\n/**\n * Milliseconds in 1 minute\n *\n * @name millisecondsInMinute\n * @constant\n * @type {number}\n * @default\n */\n\nvar millisecondsInMinute = 60000;\n/**\n * Milliseconds in 1 hour\n *\n * @name millisecondsInHour\n * @constant\n * @type {number}\n * @default\n */\n\nvar millisecondsInHour = 3600000;\n/**\n * Milliseconds in 1 second\n *\n * @name millisecondsInSecond\n * @constant\n * @type {number}\n * @default\n */\n\nvar millisecondsInSecond = 1000;\n/**\n * Minimum allowed time.\n *\n * @name minTime\n * @constant\n * @type {number}\n * @default\n */\n\nvar minTime = -maxTime;\n/**\n * Minutes in 1 hour\n *\n * @name minutesInHour\n * @constant\n * @type {number}\n * @default\n */\n\nvar minutesInHour = 60;\n/**\n * Months in 1 quarter\n *\n * @name monthsInQuarter\n * @constant\n * @type {number}\n * @default\n */\n\nvar monthsInQuarter = 3;\n/**\n * Months in 1 year\n *\n * @name monthsInYear\n * @constant\n * @type {number}\n * @default\n */\n\nvar monthsInYear = 12;\n/**\n * Quarters in 1 year\n *\n * @name quartersInYear\n * @constant\n * @type {number}\n * @default\n */\n\nvar quartersInYear = 4;\n/**\n * Seconds in 1 hour\n *\n * @name secondsInHour\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInHour = 3600;\n/**\n * Seconds in 1 minute\n *\n * @name secondsInMinute\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInMinute = 60;\n/**\n * Seconds in 1 day\n *\n * @name secondsInDay\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInDay = secondsInHour * 24;\n/**\n * Seconds in 1 week\n *\n * @name secondsInWeek\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInWeek = secondsInDay * 7;\n/**\n * Seconds in 1 year\n *\n * @name secondsInYear\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInYear = secondsInDay * daysInYear;\n/**\n * Seconds in 1 month\n *\n * @name secondsInMonth\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInMonth = secondsInYear / 12;\n/**\n * Seconds in 1 quarter\n *\n * @name secondsInQuarter\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInQuarter = secondsInMonth * 3;\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/constants/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseISO)\n/* harmony export */ });\n/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ \"./node_modules/date-fns/esm/constants/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n\n\n\n/**\n * @name parseISO\n * @category Common Helpers\n * @summary Parse ISO string\n *\n * @description\n * Parse the given string in ISO 8601 format and return an instance of Date.\n *\n * Function accepts complete ISO 8601 formats as well as partial implementations.\n * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601\n *\n * If the argument isn't a string, the function cannot parse the string or\n * the values are invalid, it returns Invalid Date.\n *\n * @param {String} argument - the value to convert\n * @param {Object} [options] - an object with options.\n * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2\n *\n * @example\n * // Convert string '2014-02-11T11:30:30' to date:\n * const result = parseISO('2014-02-11T11:30:30')\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert string '+02014101' to date,\n * // if the additional number of digits in the extended year format is 1:\n * const result = parseISO('+02014101', { additionalDigits: 1 })\n * //=> Fri Apr 11 2014 00:00:00\n */\n\nfunction parseISO(argument, options) {\n  var _options$additionalDi;\n\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);\n\n  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {\n    throw new RangeError('additionalDigits must be 0, 1 or 2');\n  }\n\n  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {\n    return new Date(NaN);\n  }\n\n  var dateStrings = splitDateString(argument);\n  var date;\n\n  if (dateStrings.date) {\n    var parseYearResult = parseYear(dateStrings.date, additionalDigits);\n    date = parseDate(parseYearResult.restDateString, parseYearResult.year);\n  }\n\n  if (!date || isNaN(date.getTime())) {\n    return new Date(NaN);\n  }\n\n  var timestamp = date.getTime();\n  var time = 0;\n  var offset;\n\n  if (dateStrings.time) {\n    time = parseTime(dateStrings.time);\n\n    if (isNaN(time)) {\n      return new Date(NaN);\n    }\n  }\n\n  if (dateStrings.timezone) {\n    offset = parseTimezone(dateStrings.timezone);\n\n    if (isNaN(offset)) {\n      return new Date(NaN);\n    }\n  } else {\n    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone\n    // but we need it to be parsed in our timezone\n    // so we use utc values to build date in our timezone.\n    // Year values from 0 to 99 map to the years 1900 to 1999\n    // so set year explicitly with setFullYear.\n\n    var result = new Date(0);\n    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());\n    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());\n    return result;\n  }\n\n  return new Date(timestamp + time + offset);\n}\nvar patterns = {\n  dateTimeDelimiter: /[T ]/,\n  timeZoneDelimiter: /[Z ]/i,\n  timezone: /([Z+-].*)$/\n};\nvar dateRegex = /^-?(?:(\\d{3})|(\\d{2})(?:-?(\\d{2}))?|W(\\d{2})(?:-?(\\d{1}))?|)$/;\nvar timeRegex = /^(\\d{2}(?:[.,]\\d*)?)(?::?(\\d{2}(?:[.,]\\d*)?))?(?::?(\\d{2}(?:[.,]\\d*)?))?$/;\nvar timezoneRegex = /^([+-])(\\d{2})(?::?(\\d{2}))?$/;\n\nfunction splitDateString(dateString) {\n  var dateStrings = {};\n  var array = dateString.split(patterns.dateTimeDelimiter);\n  var timeString; // The regex match should only return at maximum two array elements.\n  // [date], [time], or [date, time].\n\n  if (array.length > 2) {\n    return dateStrings;\n  }\n\n  if (/:/.test(array[0])) {\n    timeString = array[0];\n  } else {\n    dateStrings.date = array[0];\n    timeString = array[1];\n\n    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {\n      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];\n      timeString = dateString.substr(dateStrings.date.length, dateString.length);\n    }\n  }\n\n  if (timeString) {\n    var token = patterns.timezone.exec(timeString);\n\n    if (token) {\n      dateStrings.time = timeString.replace(token[1], '');\n      dateStrings.timezone = token[1];\n    } else {\n      dateStrings.time = timeString;\n    }\n  }\n\n  return dateStrings;\n}\n\nfunction parseYear(dateString, additionalDigits) {\n  var regex = new RegExp('^(?:(\\\\d{4}|[+-]\\\\d{' + (4 + additionalDigits) + '})|(\\\\d{2}|[+-]\\\\d{' + (2 + additionalDigits) + '})$)');\n  var captures = dateString.match(regex); // Invalid ISO-formatted year\n\n  if (!captures) return {\n    year: NaN,\n    restDateString: ''\n  };\n  var year = captures[1] ? parseInt(captures[1]) : null;\n  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both\n\n  return {\n    year: century === null ? year : century * 100,\n    restDateString: dateString.slice((captures[1] || captures[2]).length)\n  };\n}\n\nfunction parseDate(dateString, year) {\n  // Invalid ISO-formatted year\n  if (year === null) return new Date(NaN);\n  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string\n\n  if (!captures) return new Date(NaN);\n  var isWeekDate = !!captures[4];\n  var dayOfYear = parseDateUnit(captures[1]);\n  var month = parseDateUnit(captures[2]) - 1;\n  var day = parseDateUnit(captures[3]);\n  var week = parseDateUnit(captures[4]);\n  var dayOfWeek = parseDateUnit(captures[5]) - 1;\n\n  if (isWeekDate) {\n    if (!validateWeekDate(year, week, dayOfWeek)) {\n      return new Date(NaN);\n    }\n\n    return dayOfISOWeekYear(year, week, dayOfWeek);\n  } else {\n    var date = new Date(0);\n\n    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {\n      return new Date(NaN);\n    }\n\n    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));\n    return date;\n  }\n}\n\nfunction parseDateUnit(value) {\n  return value ? parseInt(value) : 1;\n}\n\nfunction parseTime(timeString) {\n  var captures = timeString.match(timeRegex);\n  if (!captures) return NaN; // Invalid ISO-formatted time\n\n  var hours = parseTimeUnit(captures[1]);\n  var minutes = parseTimeUnit(captures[2]);\n  var seconds = parseTimeUnit(captures[3]);\n\n  if (!validateTime(hours, minutes, seconds)) {\n    return NaN;\n  }\n\n  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;\n}\n\nfunction parseTimeUnit(value) {\n  return value && parseFloat(value.replace(',', '.')) || 0;\n}\n\nfunction parseTimezone(timezoneString) {\n  if (timezoneString === 'Z') return 0;\n  var captures = timezoneString.match(timezoneRegex);\n  if (!captures) return 0;\n  var sign = captures[1] === '+' ? -1 : 1;\n  var hours = parseInt(captures[2]);\n  var minutes = captures[3] && parseInt(captures[3]) || 0;\n\n  if (!validateTimezone(hours, minutes)) {\n    return NaN;\n  }\n\n  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);\n}\n\nfunction dayOfISOWeekYear(isoWeekYear, week, day) {\n  var date = new Date(0);\n  date.setUTCFullYear(isoWeekYear, 0, 4);\n  var fourthOfJanuaryDay = date.getUTCDay() || 7;\n  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;\n  date.setUTCDate(date.getUTCDate() + diff);\n  return date;\n} // Validation functions\n// February is null to handle the leap year (using ||)\n\n\nvar daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\n\nfunction isLeapYearIndex(year) {\n  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;\n}\n\nfunction validateDate(year, month, date) {\n  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));\n}\n\nfunction validateDayOfYearDate(year, dayOfYear) {\n  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);\n}\n\nfunction validateWeekDate(_year, week, day) {\n  return week >= 1 && week <= 53 && day >= 0 && day <= 6;\n}\n\nfunction validateTime(hours, minutes, seconds) {\n  if (hours === 24) {\n    return minutes === 0 && seconds === 0;\n  }\n\n  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;\n}\n\nfunction validateTimezone(_hours, minutes) {\n  return minutes >= 0 && minutes <= 59;\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/parseISO/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _popUpForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popUpForm */ \"./src/popUpForm.js\");\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n\n\n\n\n\n(0,_createTodo__WEBPACK_IMPORTED_MODULE_3__.renderTDList)();\n(0,_popUpForm__WEBPACK_IMPORTED_MODULE_2__.clickNewToDo)();\n(0,_popUpForm__WEBPACK_IMPORTED_MODULE_2__.closePopUpToDo)();\n(0,_popUpForm__WEBPACK_IMPORTED_MODULE_2__.clickNewProject)();//A\n(0,_popUpForm__WEBPACK_IMPORTED_MODULE_2__.closeProjectPopUp)();//A\n\n\n\n\n//1 DOM va a exportar a popUp el metodo de seleccionar el boton +\n//2 popUp va a cambiar la clase de la forma para que sea visible\n//3 aparece el formulario y se rellena\n//4.1 submit toma los valores del DOM, la logica de fechas y los convierte en variables para exportar a createTodo\n//4.2 submit va a importar una funcion de popUp para cambiar la clase para que sea invisible y borre el valor de las variables\n//5 createToDo exporta un objeto para que se empuje a un array\n//6 toDoArray importa métodos del DOM para hacer un render de los elementos dentro de cada array\n// 7 hay un modulo similar a createToDo que es para crear un array, que toma solo un argumento que es el nombre del proyecto\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/parseISO/index.js\");\n\n\n\n\n\n//creates a new to do when you click submit, it gets pushed to the generalTodo array\n_DOM__WEBPACK_IMPORTED_MODULE_0__.submitBtn.addEventListener('click', getInputValues);\nfunction getInputValues(event){\n    event.preventDefault();\n    let newTitle = _DOM__WEBPACK_IMPORTED_MODULE_0__.titleInput.value;\n    let newNotes = _DOM__WEBPACK_IMPORTED_MODULE_0__.notesInput.value;\n    let newDate = _DOM__WEBPACK_IMPORTED_MODULE_0__.dueDate.value;\n    let formatDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newDate);\n    const dynamicTodo = new _createTodo__WEBPACK_IMPORTED_MODULE_1__.Todo (newTitle, newNotes, newDate);\n    console.log(formatDate);\n    _createTodo__WEBPACK_IMPORTED_MODULE_1__.generalTodo.push(dynamicTodo);\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderToDo)(dynamicTodo);\n}\n\n//creates a new array inside the generalToDo array, in other words the project list\n_DOM__WEBPACK_IMPORTED_MODULE_0__.submitBtnA.addEventListener('click', getProjectName);\nfunction getProjectName(event){ \n    event.preventDefault();\n    let projectInput = _DOM__WEBPACK_IMPORTED_MODULE_0__.projectName.value;\n    [projectInput] = []\n    _createTodo__WEBPACK_IMPORTED_MODULE_1__.generalTodo.push([projectInput]);\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderProject)([projectInput]);\n}\n\n\n\n//# sourceURL=webpack://todo/./src/submit.js?");

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