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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _listStyles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listStyles.css */ \"./public/src/components/List/listStyles.css\");\n\n\n\n\n\nfunction List(_ref) {\n  var restaurants = _ref.restaurants,\n      len = _ref.len;\n  // add props from app state.\n  // look up useMemo\n  console.log('rests', restaurants);\n  console.log('len', len); // const data = useMemo(\n  //   (restaurants) => [\n  //     {\n  //       col1: '1',\n  //       col2: 'World',\n  //     },\n  //     {\n  //       col1: '2',\n  //       col2: 'rocks',\n  //     },\n  //     {\n  //       col1: '3',\n  //       col2: 'you want',\n  //     },\n  //   ],\n  //   [],\n  // );\n\n  var rListData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {\n    restaurants.map(function (rest, i) {\n      var lat = rest.lat,\n          lng = rest.lng,\n          timePlaced = rest.timePlaced;\n      return {\n        col1: i,\n        col2: \"\".concat(lat, \", \").concat(lng, \", \").concat(timePlaced)\n      };\n    });\n  }, [restaurants]);\n  var columns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {\n    return [{\n      Header: '',\n      accessor: 'col1' // accessor is the \"key\" in the data\n\n    }, {\n      Header: 'Restaurants',\n      accessor: 'col2'\n    }];\n  }, []);\n  var tableInstance = (0,react_table__WEBPACK_IMPORTED_MODULE_1__.useTable)({\n    columns: columns,\n    rListData: rListData\n  });\n  var getTableProps = tableInstance.getTableProps,\n      getTableBodyProps = tableInstance.getTableBodyProps,\n      headerGroups = tableInstance.headerGroups,\n      rows = tableInstance.rows,\n      prepareRow = tableInstance.prepareRow;\n  return (\n    /*#__PURE__*/\n    // apply the table props\n    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"table\", getTableProps(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"thead\", null, // Loop over the header rows\n    headerGroups.map(function (headerGroup) {\n      return (\n        /*#__PURE__*/\n        // Apply the header row props\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", headerGroup.getHeaderGroupProps(), // Loop over the headers in each row\n        headerGroup.headers.map(function (column) {\n          return (\n            /*#__PURE__*/\n            // Apply the header cell props\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", column.getHeaderProps(), // Render the header\n            column.render('Header'))\n          );\n        }))\n      );\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tbody\", getTableBodyProps(), // Loop over the table rows\n    rows.map(function (row) {\n      // Prepare the row for display\n      prepareRow(row);\n      return (\n        /*#__PURE__*/\n        // Apply the row props\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", row.getRowProps(), // Loop over the rows cells\n        row.cells.map(function (cell) {\n          return (\n            /*#__PURE__*/\n            // Apply the cell props\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", cell.getCellProps(), // Render the cell contents\n            cell.render('Cell'))\n          );\n        }))\n      );\n    })))\n  );\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);\nList.propTypes = {\n  restaurants: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.array,\n  len: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.number\n};\n\n//# sourceURL=webpack://y/./public/src/components/List/List.jsx?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0792a88bd2c91568266a")
/******/ })();
/******/ 
/******/ }
;