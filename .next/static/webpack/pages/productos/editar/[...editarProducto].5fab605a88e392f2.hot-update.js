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

/***/ "./components/FormProducto.js":
/*!************************************!*\
  !*** ./components/FormProducto.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormProducto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction FormProducto() {\n    _s();\n    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [categoria, setCategoria] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [precio, setPrecio] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [descripcion, setDescripcion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [imagen, setImagen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [irProductos, setIrProductos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleImageChange = (e)=>{\n        const file = e.target.files[0];\n        setImagen(file);\n    };\n    async function crearProducto(ev) {\n        ev.preventDefault();\n        const data = {\n            nombre,\n            descripcion,\n            categoria,\n            precio\n        };\n        await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/productos\", data);\n        setIrProductos(true);\n    }\n    if (irProductos) {\n        router.push(\"/productos\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: crearProducto,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-blue-900 mb-2 text-xl\",\n                children: \"Nuevo Producto\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Nombre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Nombre\",\n                value: nombre,\n                onChange: (ev)=>setNombre(ev.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Categoria\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Categoria\",\n                value: categoria,\n                onChange: (ev)=>setCategoria(ev.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Descripcion\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"Descripcion\",\n                value: descripcion,\n                onChange: (ev)=>setDescripcion(ev.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Precio\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Precio\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Imagen\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleImageChange\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn-primary\",\n                type: \"submit\",\n                children: \"Guardar\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(FormProducto, \"Um0HwWfBchkDu4LZkMVqImmY1ow=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = FormProducto;\nvar _c;\n$RefreshReg$(_c, \"FormProducto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1Qcm9kdWN0by5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ2E7QUFDSztBQUU3QixTQUFTSTs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ksV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNNLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTWMsU0FBU2hCLHNEQUFTQTtJQUN4QixNQUFNaUIsb0JBQW9CLENBQUNDO1FBQ3ZCLE1BQU1DLE9BQU9ELEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFDOUJSLFVBQVVNO0lBQ2Q7SUFFQSxlQUFlRyxjQUFjQyxFQUFFO1FBQzNCQSxHQUFHQyxjQUFjO1FBQ2pCLE1BQU1DLE9BQU87WUFBRXJCO1lBQVFNO1lBQWFKO1lBQVdFO1FBQU87UUFDdEQsTUFBTVQsa0RBQVUsQ0FBQyxrQkFBa0IwQjtRQUNuQ1YsZUFBZTtJQUNuQjtJQUVBLElBQUlELGFBQWE7UUFDYkUsT0FBT1csSUFBSSxDQUFDO0lBQ2hCO0lBRUEscUJBQ0ksOERBQUNDO1FBQUtDLFVBQVVQOzswQkFDWiw4REFBQ1E7Z0JBQUdDLFdBQVU7MEJBQTZCOzs7Ozs7MEJBRTNDLDhEQUFDQzswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFDR0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsT0FBT2hDO2dCQUNQaUMsVUFBVSxDQUFDZCxLQUFPbEIsVUFBVWtCLEdBQUdILE1BQU0sQ0FBQ2dCLEtBQUs7Ozs7OzswQkFHL0MsOERBQUNKOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUNHQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxPQUFPOUI7Z0JBQ1ArQixVQUFVLENBQUNkLEtBQU9oQixhQUFhZ0IsR0FBR0gsTUFBTSxDQUFDZ0IsS0FBSzs7Ozs7OzBCQUdsRCw4REFBQ0o7MEJBQU07Ozs7OzswQkFDUCw4REFBQ007Z0JBQ0dILGFBQVk7Z0JBQ1pDLE9BQU8xQjtnQkFDUDJCLFVBQVUsQ0FBQ2QsS0FBT1osZUFBZVksR0FBR0gsTUFBTSxDQUFDZ0IsS0FBSzs7Ozs7OzBCQUdwRCw4REFBQ0o7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQVNDLGFBQVk7Ozs7OzswQkFFakMsOERBQUNIOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFPRyxVQUFVcEI7Ozs7OzswQkFFN0IsOERBQUNzQjtnQkFBT1IsV0FBVTtnQkFBY0csTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7O0FBSzFEO0dBL0R3Qi9COztRQVFMSCxrREFBU0E7OztLQVJKRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm1Qcm9kdWN0by5qcz83MjYyIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1Qcm9kdWN0bygpIHtcclxuICAgIGNvbnN0IFtub21icmUsIHNldE5vbWJyZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yaWEsIHNldENhdGVnb3JpYV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwcmVjaW8sIHNldFByZWNpb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtkZXNjcmlwY2lvbiwgc2V0RGVzY3JpcGNpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaW1hZ2VuLCBzZXRJbWFnZW5dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgW2lyUHJvZHVjdG9zLCBzZXRJclByb2R1Y3Rvc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGhhbmRsZUltYWdlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgc2V0SW1hZ2VuKGZpbGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhclByb2R1Y3RvKGV2KSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0geyBub21icmUsIGRlc2NyaXBjaW9uLCBjYXRlZ29yaWEsIHByZWNpbyB9O1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcHJvZHVjdG9zJywgZGF0YSk7XHJcbiAgICAgICAgc2V0SXJQcm9kdWN0b3ModHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlyUHJvZHVjdG9zKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9wcm9kdWN0b3MnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2NyZWFyUHJvZHVjdG99PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTkwMCBtYi0yIHRleHQteGxcIj5OdWV2byBQcm9kdWN0bzwvaDE+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWw+Tm9tYnJlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldikgPT4gc2V0Tm9tYnJlKGV2LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsPkNhdGVnb3JpYTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NhdGVnb3JpYX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHNldENhdGVnb3JpYShldi50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwY2lvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwY2lvblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcGNpb259XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiBzZXREZXNjcmlwY2lvbihldi50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbD5QcmVjaW88L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiUHJlY2lvXCI+PC9pbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbD5JbWFnZW48L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9IC8+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGb3JtUHJvZHVjdG8iLCJub21icmUiLCJzZXROb21icmUiLCJjYXRlZ29yaWEiLCJzZXRDYXRlZ29yaWEiLCJwcmVjaW8iLCJzZXRQcmVjaW8iLCJkZXNjcmlwY2lvbiIsInNldERlc2NyaXBjaW9uIiwiaW1hZ2VuIiwic2V0SW1hZ2VuIiwiaXJQcm9kdWN0b3MiLCJzZXRJclByb2R1Y3RvcyIsInJvdXRlciIsImhhbmRsZUltYWdlQ2hhbmdlIiwiZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImNyZWFyUHJvZHVjdG8iLCJldiIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInBvc3QiLCJwdXNoIiwiZm9ybSIsIm9uU3VibWl0IiwiaDEiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FormProducto.js\n"));

/***/ })

});