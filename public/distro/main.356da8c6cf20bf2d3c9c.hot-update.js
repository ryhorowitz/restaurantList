"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./public/src/components/List/List.jsx":
/*!*********************************************!*\
  !*** ./public/src/components/List/List.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _listStyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listStyles.css */ \"./public/src/components/List/listStyles.css\");\n/* harmony import */ var _ListItem_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListItem.jsx */ \"./public/src/components/List/ListItem.jsx\");\n\n\n\n\n\nfunction List(_ref) {\n  var restaurants = _ref.restaurants,\n      len = _ref.len;\n  // add props from app state.\n  console.log('rests', restaurants);\n  console.log('len', len);\n  var data = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {\n    restaurants.map(function (rest, i) {\n      var lat = rest.lat,\n          lng = rest.lng,\n          timePlaced = rest.timePlaced;\n      var num = i + 1;\n      return {\n        col1: num,\n        col2: \"\".concat(lat, \", \").concat(lng, \", \").concat(timePlaced)\n      };\n    });\n  }, [restaurants]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"list\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ol\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ListItem_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);\nList.propTypes = {\n  restaurants: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.array,\n  len: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.number\n};\n\n//# sourceURL=webpack://y/./public/src/components/List/List.jsx?");

/***/ }),

/***/ "./public/src/components/List/ListItem.jsx":
/*!*************************************************!*\
  !*** ./public/src/components/List/ListItem.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _listStyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listStyles.css */ \"./public/src/components/List/listStyles.css\");\n\n\n\n\nfunction ListItem(item) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, item, \"item\\xDF\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);\n\n//# sourceURL=webpack://y/./public/src/components/List/ListItem.jsx?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("569862dc1c2830fc6fc4")
/******/ })();
/******/ 
/******/ }
;