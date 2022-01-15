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

/***/ "./public/src/components/Map/Map.jsx":
/*!*******************************************!*\
  !*** ./public/src/components/Map/Map.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-google-maps/api */ \"./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var use_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-places-autocomplete */ \"./node_modules/use-places-autocomplete/dist/index.esm.js\");\n/* harmony import */ var _mapStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapStyles */ \"./public/src/components/Map/mapStyles.js\");\n/* harmony import */ var _SearchBox_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBox.jsx */ \"./public/src/components/Map/SearchBox.jsx\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/* eslint-disable no-unused-vars */\n\n\n\n\n\n\n\nvar libraries = ['places'];\nvar mapContainerStyle = {\n  height: '50vh',\n  width: '90%',\n  top: '5%',\n  left: '5%',\n  position: 'RELATIVE',\n  overflow: 'hidden'\n};\nvar center = {\n  lat: 39.952583,\n  lng: -75.165222\n};\nvar options = {\n  styles: _mapStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  disableDefaultUI: true,\n  zoomControl: true\n};\n\nfunction Map(_ref) {\n  var restaurants = _ref.restaurants,\n      setRestaurants = _ref.setRestaurants;\n\n  var _useLoadScript = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.useLoadScript)({\n    id: 'google-map-script',\n    googleMapsApiKey: \"AIzaSyBaWMjMLsMNtygW5Jl9NIf_tpicT7Fu6f8\",\n    libraries: libraries,\n    version: 'weekly'\n  }),\n      isLoaded = _useLoadScript.isLoaded,\n      loadError = _useLoadScript.loadError;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(restaurants),\n      _useState2 = _slicedToArray(_useState, 2),\n      markers = _useState2[0],\n      setMarkers = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      selected = _useState4[0],\n      setSelected = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setMarkers(restaurants);\n  }, [restaurants]);\n  var onMapClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {\n    setRestaurants(function (current) {\n      return [].concat(_toConsumableArray(current), [{\n        lat: e.latLng.lat(),\n        lng: e.latLng.lng(),\n        time: new Date().toISOString()\n      }]);\n    });\n  }, [setRestaurants]);\n\n  function handleRemove(id) {\n    console.log('handleRemove', id);\n    var newMarkers = markers.filter(function (marker) {\n      return marker.id !== id;\n    });\n    setMarkers(newMarkers);\n  } // const mapRef = useRef();\n  // const onMapLoad = useCallback((map) => {\n  //   mapRef.current = map;\n  // }, []);\n\n\n  if (loadError) return 'Error';\n  if (!isLoaded) return 'Loading...';\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.GoogleMap, {\n    mapContainerStyle: mapContainerStyle,\n    zoom: 14,\n    center: center,\n    options: options,\n    onClick: onMapClick // onLoad={onMapLoad}\n\n  }, markers.map(function (marker) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.Marker, {\n      key: marker.lat,\n      position: {\n        lat: marker.lat,\n        lng: marker.lng\n      },\n      onClick: function onClick() {\n        setSelected(marker);\n      },\n      \"z-index\": 2\n    });\n  }), selected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.InfoWindow, {\n    key: selected.lat,\n    position: {\n      lat: selected.lat,\n      lng: selected.lng\n    },\n    onCloseClick: function onCloseClick() {\n      setSelected(null);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"I want to go here!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"or...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    type: \"submit\",\n    onClick: handleRemove\n  }, \"Remove From the List\")))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map); // remove selected marker\n//find marker with lat, lng that matches InfoWindow\n\n//# sourceURL=webpack://y/./public/src/components/Map/Map.jsx?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("731002151079ae0435f0")
/******/ })();
/******/ 
/******/ }
;