"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/productos/NuevoProducto",{

/***/ "./pages/productos/NuevoProducto.js":
/*!******************************************!*\
  !*** ./pages/productos/NuevoProducto.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/api-utils */ \"./node_modules/next/dist/server/api-utils/index.js\");\n/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction NuevoProducto() {\n    _s();\n    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [categoria, setCategoria] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [precio, setPrecio] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [descripcion, setDescripcion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [imagen, setImagen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [irProductos, setIrProductos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleImageChange = (e)=>{\n        const file = e.target.files[0];\n        setImagen(file);\n    };\n    async function crearProducto(ev) {\n        ev.preventDefault();\n        const data = {\n            nombre,\n            descripcion,\n            categoria,\n            precio\n        };\n        await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/productos\", data);\n    }\n    if (irProductos) {\n        router.push(\"/productos\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: crearProducto,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-blue-900 mb-2 text-xl\",\n                    children: \"Nuevo Producto\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\NuevoProducto.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Nombre\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\NuevoProducto.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Nombre\",\n                    value: nombre,\n                    onChange: (ev)=>setNombre(ev.target.value)\n                }, void 0, false, {\n                    fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\NuevoProducto.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Categoria\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\NuevoProducto.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Categoria\",\n                    value: categoria,\n                    onChange: (ev)=>setCategoria(ev.target.value)\n                }, void 0, false, {\n                    fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\NuevoProducto.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Descripcion\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\NuevoProducto.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    placeholder: \"Descripcion\",\n                    value: descripcion,\n                    onChange: (ev)=>setDescripcion(ev.target.value)\n                }, void 0, false, {\n                    fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\NuevoProducto.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Precio\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\NuevoProducto.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    placeholder: \"Precio\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\NuevoProducto.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Imagen\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\NuevoProducto.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    onChange: handleImageChange\n                }, void 0, false, {\n                    fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\NuevoProducto.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn-primary\",\n                    type: \"submit\",\n                    children: \"Guardar\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\NuevoProducto.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\NuevoProducto.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\NuevoProducto.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(NuevoProducto, \"Um0HwWfBchkDu4LZkMVqImmY1ow=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = NuevoProducto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NuevoProducto);\nvar _c;\n$RefreshReg$(_c, \"NuevoProducto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0b3MvTnVldm9Qcm9kdWN0by5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1I7QUFDUDtBQUM0QjtBQUNkO0FBRXhDLFNBQVNLOztJQUNQLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUyxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1csYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNhLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQUM7SUFFckMsTUFBTSxDQUFDZSxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNaUIsU0FBU2Qsc0RBQVNBO0lBQ3hCLE1BQU1lLG9CQUFvQixDQUFDQztRQUN6QixNQUFNQyxPQUFPRCxFQUFFRSxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBQzlCUixVQUFVTTtJQUNaO0lBRUEsZUFBZUcsY0FBY0MsRUFBRTtRQUM3QkEsR0FBR0MsY0FBYztRQUNqQixNQUFNQyxPQUFPO1lBQUNyQjtZQUFRTTtZQUFhSjtZQUFXRTtRQUFNO1FBQ3BELE1BQU1SLGtEQUFVLENBQUMsa0JBQWtCeUI7SUFDckM7SUFFQSxJQUFHWCxhQUFZO1FBQ2JFLE9BQU9XLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQ0UsOERBQUM3QiwwREFBTUE7a0JBQ0wsNEVBQUM4QjtZQUFLQyxVQUFVUDs7OEJBQ2QsOERBQUNRO29CQUFHQyxXQUFVOzhCQUE2Qjs7Ozs7OzhCQUUzQyw4REFBQ0M7OEJBQU07Ozs7Ozs4QkFDUCw4REFBQ0M7b0JBQ0NDLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pDLE9BQU9oQztvQkFDUGlDLFVBQVUsQ0FBQ2QsS0FBT2xCLFVBQVVrQixHQUFHSCxNQUFNLENBQUNnQixLQUFLOzs7Ozs7OEJBRzdDLDhEQUFDSjs4QkFBTTs7Ozs7OzhCQUNQLDhEQUFDQztvQkFDQ0MsTUFBSztvQkFDTEMsYUFBWTtvQkFDWkMsT0FBTzlCO29CQUNQK0IsVUFBVSxDQUFDZCxLQUFPaEIsYUFBYWdCLEdBQUdILE1BQU0sQ0FBQ2dCLEtBQUs7Ozs7Ozs4QkFHaEQsOERBQUNKOzhCQUFNOzs7Ozs7OEJBQ1AsOERBQUNNO29CQUNDSCxhQUFZO29CQUNaQyxPQUFPMUI7b0JBQ1AyQixVQUFVLENBQUNkLEtBQU9aLGVBQWVZLEdBQUdILE1BQU0sQ0FBQ2dCLEtBQUs7Ozs7Ozs4QkFHbEQsOERBQUNKOzhCQUFNOzs7Ozs7OEJBQ1AsOERBQUNDO29CQUFNQyxNQUFLO29CQUFTQyxhQUFZOzs7Ozs7OEJBRWpDLDhEQUFDSDs4QkFBTTs7Ozs7OzhCQUNQLDhEQUFDQztvQkFBTUMsTUFBSztvQkFBT0csVUFBVXBCOzs7Ozs7OEJBRTdCLDhEQUFDc0I7b0JBQU9SLFdBQVU7b0JBQWNHLE1BQUs7OEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXREO0dBaEVTL0I7O1FBUVFELGtEQUFTQTs7O0tBUmpCQztBQWtFVCwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0b3MvTnVldm9Qcm9kdWN0by5qcz8yNzRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9hcGktdXRpbHNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBOdWV2b1Byb2R1Y3RvKCkge1xyXG4gIGNvbnN0IFtub21icmUsIHNldE5vbWJyZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2F0ZWdvcmlhLCBzZXRDYXRlZ29yaWFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByZWNpbywgc2V0UHJlY2lvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZXNjcmlwY2lvbiwgc2V0RGVzY3JpcGNpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlbiwgc2V0SW1hZ2VuXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIFxyXG4gIGNvbnN0IFtpclByb2R1Y3Rvcywgc2V0SXJQcm9kdWN0b3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGhhbmRsZUltYWdlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIHNldEltYWdlbihmaWxlKTtcclxuICB9O1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBjcmVhclByb2R1Y3RvKGV2KXtcclxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge25vbWJyZSwgZGVzY3JpcGNpb24sIGNhdGVnb3JpYSwgcHJlY2lvfTtcclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcHJvZHVjdG9zJywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBpZihpclByb2R1Y3Rvcyl7XHJcbiAgICByb3V0ZXIucHVzaCgnL3Byb2R1Y3RvcycpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2NyZWFyUHJvZHVjdG99PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtOTAwIG1iLTIgdGV4dC14bFwiPk51ZXZvIFByb2R1Y3RvPC9oMT5cclxuXHJcbiAgICAgICAgPGxhYmVsPk5vbWJyZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZVwiXHJcbiAgICAgICAgICB2YWx1ZT17bm9tYnJlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhldikgPT4gc2V0Tm9tYnJlKGV2LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgPjwvaW5wdXQ+XHJcblxyXG4gICAgICAgIDxsYWJlbD5DYXRlZ29yaWE8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yaWFcIlxyXG4gICAgICAgICAgdmFsdWU9e2NhdGVnb3JpYX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHNldENhdGVnb3JpYShldi50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG5cclxuICAgICAgICA8bGFiZWw+RGVzY3JpcGNpb248L2xhYmVsPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwY2lvblwiXHJcbiAgICAgICAgICB2YWx1ZT17ZGVzY3JpcGNpb259XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiBzZXREZXNjcmlwY2lvbihldi50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L3RleHRhcmVhPlxyXG5cclxuICAgICAgICA8bGFiZWw+UHJlY2lvPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiUHJlY2lvXCI+PC9pbnB1dD5cclxuXHJcbiAgICAgICAgPGxhYmVsPkltYWdlbjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUltYWdlQ2hhbmdlfSAvPlxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOdWV2b1Byb2R1Y3RvO1xyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwidXNlU3RhdGUiLCJheGlvcyIsInJlZGlyZWN0IiwidXNlUm91dGVyIiwiTnVldm9Qcm9kdWN0byIsIm5vbWJyZSIsInNldE5vbWJyZSIsImNhdGVnb3JpYSIsInNldENhdGVnb3JpYSIsInByZWNpbyIsInNldFByZWNpbyIsImRlc2NyaXBjaW9uIiwic2V0RGVzY3JpcGNpb24iLCJpbWFnZW4iLCJzZXRJbWFnZW4iLCJpclByb2R1Y3RvcyIsInNldElyUHJvZHVjdG9zIiwicm91dGVyIiwiaGFuZGxlSW1hZ2VDaGFuZ2UiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiY3JlYXJQcm9kdWN0byIsImV2IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwicG9zdCIsInB1c2giLCJmb3JtIiwib25TdWJtaXQiLCJoMSIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/productos/NuevoProducto.js\n"));

/***/ })

});