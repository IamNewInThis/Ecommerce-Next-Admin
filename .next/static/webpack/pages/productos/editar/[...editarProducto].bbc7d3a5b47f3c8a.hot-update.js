"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/productos/editar/[...editarProducto]",{

/***/ "./pages/productos/editar/[...editarProducto].js":
/*!*******************************************************!*\
  !*** ./pages/productos/editar/[...editarProducto].js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_FormProducto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FormProducto */ \"./components/FormProducto.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction editarProducto() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    console.log({\n        router\n    });\n    const [productoInfo, setProductoInfo] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const { id } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!id) {\n            return;\n        }\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/productos?id=\" + id).then((response)=>{\n            console.log(\"funciona\", response.data);\n            setProductoInfo(response.data);\n        }).catch((error)=>{\n            console.error(\"Error en la llamada a la API:\", error);\n        });\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-blue-900 mb-2 text-xl\",\n                children: \"Editar\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormProducto__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                ...productoInfo\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(editarProducto, \"6ImuWyIFpaONqPJ6dw8vUOxs4lc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (editarProducto);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0b3MvZWRpdGFyL1suLi5lZGl0YXJQcm9kdWN0b10uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ2I7QUFDZDtBQUNhO0FBQ0s7QUFFNUMsU0FBU007O0lBQ0wsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCSyxRQUFRQyxHQUFHLENBQUM7UUFBQ0Y7SUFBTTtJQUNuQixNQUFNLENBQUNHLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLEVBQUVPLEVBQUUsRUFBRSxHQUFHTCxPQUFPTSxLQUFLO0lBQzNCVCxnREFBU0EsQ0FBQztRQUNOLElBQUksQ0FBQ1EsSUFBSTtZQUNMO1FBQ0o7UUFFQVYsaURBQVMsQ0FBQyx1QkFBdUJVLElBQUlHLElBQUksQ0FBQyxDQUFDQztZQUN2Q1IsUUFBUUMsR0FBRyxDQUFDLFlBQVlPLFNBQVNDLElBQUk7WUFDckNOLGdCQUFnQkssU0FBU0MsSUFBSTtRQUNqQyxHQUNLQyxLQUFLLENBQUMsQ0FBQ0M7WUFDSlgsUUFBUVcsS0FBSyxDQUFDLGlDQUFpQ0E7UUFDbkQ7SUFDUixHQUFHO1FBQUNQO0tBQUc7SUFFUCxxQkFDSSw4REFBQ1gsMERBQU1BOzswQkFDSCw4REFBQ21CO2dCQUFHQyxXQUFVOzBCQUE2Qjs7Ozs7OzBCQUMzQyw4REFBQ3JCLGdFQUFZQTtnQkFBRSxHQUFHVSxZQUFZOzs7Ozs7Ozs7Ozs7QUFHMUM7R0F6QlNKOztRQUNVSCxrREFBU0E7OztBQTBCNUIsK0RBQWVHLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG9zL2VkaXRhci9bLi4uZWRpdGFyUHJvZHVjdG9dLmpzPzk1ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm1Qcm9kdWN0byBmcm9tIFwiQC9jb21wb25lbnRzL0Zvcm1Qcm9kdWN0b1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBlZGl0YXJQcm9kdWN0bygpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc29sZS5sb2coe3JvdXRlcn0pXHJcbiAgICBjb25zdCBbcHJvZHVjdG9JbmZvLCBzZXRQcm9kdWN0b0luZm9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3Byb2R1Y3Rvcz9pZD0nICsgaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZnVuY2lvbmFcIiwgcmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgc2V0UHJvZHVjdG9JbmZvKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGVuIGxhIGxsYW1hZGEgYSBsYSBBUEk6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtOTAwIG1iLTIgdGV4dC14bFwiPkVkaXRhcnsgfTwvaDE+XHJcbiAgICAgICAgICAgIDxGb3JtUHJvZHVjdG8gey4uLnByb2R1Y3RvSW5mb30+PC9Gb3JtUHJvZHVjdG8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVkaXRhclByb2R1Y3RvIl0sIm5hbWVzIjpbIkZvcm1Qcm9kdWN0byIsIkxheW91dCIsImF4aW9zIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJlZGl0YXJQcm9kdWN0byIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0b0luZm8iLCJzZXRQcm9kdWN0b0luZm8iLCJpZCIsInF1ZXJ5IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJoMSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/productos/editar/[...editarProducto].js\n"));

/***/ })

});