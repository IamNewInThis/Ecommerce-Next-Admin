"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/productos",{

/***/ "./pages/productos.js":
/*!****************************!*\
  !*** ./pages/productos.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ productos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction productos() {\n    _s();\n    const [productos, setProductos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/productos\").then((response)=>{\n            setProductos(response.data);\n            console.log(response.data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/productos/NuevoProducto\",\n                className: \"bg-blue-900 rounded-md text-white py-1 px-2\",\n                children: \"Agregra un nuevo Producto\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"basic mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"Nombre\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: productos.map((producto)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: producto.nombre\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this)\n                            }, producto._id, false, {\n                                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(productos, \"1DSHZPgX73L4Uszt4d22RALz2sY=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0b3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDZjtBQUNHO0FBQ2U7QUFFNUIsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0EsV0FBV0MsYUFBYSxHQUFHRiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDRCxnREFBU0EsQ0FBQztRQUNSRixpREFBUyxDQUFDLGtCQUFrQk8sSUFBSSxDQUFDQyxDQUFBQTtZQUMvQkgsYUFBYUcsU0FBU0MsSUFBSTtZQUMxQkMsUUFBUUMsR0FBRyxDQUFDSCxTQUFTQyxJQUFJO1FBQzNCO0lBRUYsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNWLDBEQUFNQTs7MEJBQ0wsOERBQUNFLGtEQUFJQTtnQkFBQ1csTUFBTTtnQkFBNEJDLFdBQVU7MEJBQThDOzs7Ozs7MEJBSWhHLDhEQUFDQztnQkFBTUQsV0FBVTs7a0NBQ2YsOERBQUNFO2tDQUNDLDRFQUFDQztzQ0FDQyw0RUFBQ0M7MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNDO2tDQUNFZCxVQUFVZSxHQUFHLENBQUNDLENBQUFBLHlCQUNiLDhEQUFDSjswQ0FDQyw0RUFBQ0M7OENBQUlHLFNBQVNDLE1BQU07Ozs7OzsrQkFEYkQsU0FBU0UsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqQztHQS9Cd0JsQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0b3MuanM/ZmVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2R1Y3RvcygpIHtcclxuICBjb25zdCBbcHJvZHVjdG9zLCBzZXRQcm9kdWN0b3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoJy9hcGkvcHJvZHVjdG9zJykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHNldFByb2R1Y3RvcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuICAgIH0pO1xyXG5cclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxMaW5rIGhyZWY9eycvcHJvZHVjdG9zL051ZXZvUHJvZHVjdG8nfSBjbGFzc05hbWU9XCJiZy1ibHVlLTkwMCByb3VuZGVkLW1kIHRleHQtd2hpdGUgcHktMSBweC0yXCI+XHJcbiAgICAgICAgQWdyZWdyYSB1biBudWV2byBQcm9kdWN0b1xyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwiYmFzaWMgbXQtMlwiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPk5vbWJyZTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge3Byb2R1Y3Rvcy5tYXAocHJvZHVjdG8gPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtwcm9kdWN0by5faWR9PlxyXG4gICAgICAgICAgICAgIDx0ZD57cHJvZHVjdG8ubm9tYnJlfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJheGlvcyIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInByb2R1Y3RvcyIsInNldFByb2R1Y3RvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaHJlZiIsImNsYXNzTmFtZSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRkIiwidGJvZHkiLCJtYXAiLCJwcm9kdWN0byIsIm5vbWJyZSIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/productos.js\n"));

/***/ })

});