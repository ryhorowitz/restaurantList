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

/***/ "./public/src/components/Map/SearchBox.jsx":
/*!*************************************************!*\
  !*** ./public/src/components/Map/SearchBox.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var use_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-places-autocomplete */ \"./node_modules/use-places-autocomplete/dist/index.esm.js\");\n\n\n\n\nfunction SearchBox() {\n  var _usePlacesAutocomplet = (0,use_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    requestOptions: {\n      location: {\n        lat: function lat() {\n          return 39.952583;\n        },\n        lng: function lng() {\n          return -75.165222;\n        }\n      },\n      radius: 100 * 1000\n    }\n  }),\n      ready = _usePlacesAutocomplet.ready,\n      value = _usePlacesAutocomplet.value,\n      _usePlacesAutocomplet2 = _usePlacesAutocomplet.suggestions,\n      status = _usePlacesAutocomplet2.status,\n      data = _usePlacesAutocomplet2.data,\n      setValue = _usePlacesAutocomplet.setValue,\n      clearSuggestions = _usePlacesAutocomplet.clearSuggestions;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.StandaloneSearchBox, {\n    onLoad: function onLoad() {// submit value;\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Search Restaurants Near By\",\n    style: {\n      boxSizing: 'border-box',\n      border: '1px solid transparent',\n      width: '240px',\n      height: '32px',\n      padding: '0 12px',\n      borderRadius: '3px',\n      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',\n      fontSize: '14px',\n      outline: 'none',\n      textOverflow: 'ellipses',\n      position: 'absolute',\n      left: '50%',\n      marginLeft: '-120px',\n      zIndex: '3'\n    }\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBox);\n\n//# sourceURL=webpack://y/./public/src/components/Map/SearchBox.jsx?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("765ebec5a7e6a75a7578")
/******/ })();
/******/ 
/******/ }
;