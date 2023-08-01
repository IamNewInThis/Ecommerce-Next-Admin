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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormProducto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction FormProducto(param) {\n    let { nombre: existingNombre, categoria: existingCategoria, descripcion: existingDescripcion, precio: existingPrecio } = param;\n    _s();\n    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(existingNombre || \"\");\n    const [categoria, setCategoria] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(existingCategoria || \"\");\n    const [precio, setPrecio] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(existingPrecio || \"\");\n    const [descripcion, setDescripcion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(existingDescripcion || \"\");\n    const [imagen, setImagen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [irProductos, setIrProductos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleImageChange = (e)=>{\n        const file = e.target.files[0];\n        setImagen(file);\n    };\n    async function crearProducto(ev) {\n        ev.preventDefault();\n        const data = {\n            nombre,\n            descripcion,\n            categoria,\n            precio\n        };\n        await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/productos\", data);\n        setIrProductos(true);\n    }\n    if (irProductos) {\n        router.push(\"/productos\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: crearProducto,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-blue-900 mb-2 text-xl\",\n                children: \"Agregar Producto\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Nombre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Nombre\",\n                value: nombre,\n                onChange: (ev)=>setNombre(ev.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Categoria\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Categoria\",\n                value: categoria,\n                onChange: (ev)=>setCategoria(ev.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Descripcion\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"Descripcion\",\n                value: descripcion,\n                onChange: (ev)=>setDescripcion(ev.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Precio\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Precio\",\n                value: precio,\n                onChange: (ev)=>setPrecio(ev.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Imagen\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleImageChange\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn-primary\",\n                type: \"submit\",\n                children: \"Guardar\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(FormProducto, \"gt11YCfTe2uBjVKYiLBewRXrzh0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = FormProducto;\nvar _c;\n$RefreshReg$(_c, \"FormProducto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1Qcm9kdWN0by5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ2E7QUFDSztBQUU3QixTQUFTSSxhQUFhLEtBS3BDO1FBTG9DLEVBQ2pDQyxRQUFPQyxjQUFjLEVBQ3JCQyxXQUFXQyxpQkFBaUIsRUFDNUJDLGFBQWFDLG1CQUFtQixFQUNoQ0MsUUFBUUMsY0FBYyxFQUN6QixHQUxvQzs7SUFNakMsTUFBTSxDQUFDUCxRQUFRUSxVQUFVLEdBQUdWLCtDQUFRQSxDQUFFRyxrQkFBZ0I7SUFDdEQsTUFBTSxDQUFDQyxXQUFXTyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDSyxxQkFBcUI7SUFDaEUsTUFBTSxDQUFDRyxRQUFRSSxVQUFVLEdBQUdaLCtDQUFRQSxDQUFFUyxrQkFBa0I7SUFDeEQsTUFBTSxDQUFDSCxhQUFhTyxlQUFlLEdBQUdiLCtDQUFRQSxDQUFDTyx1QkFBc0I7SUFDckUsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU0sQ0FBQ2dCLGFBQWFDLGVBQWUsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1rQixTQUFTcEIsc0RBQVNBO0lBQ3hCLE1BQU1xQixvQkFBb0IsQ0FBQ0M7UUFDdkIsTUFBTUMsT0FBT0QsRUFBRUUsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUM5QlIsVUFBVU07SUFDZDtJQUVBLGVBQWVHLGNBQWNDLEVBQUU7UUFDM0JBLEdBQUdDLGNBQWM7UUFDakIsTUFBTUMsT0FBTztZQUFFekI7WUFBUUk7WUFBYUY7WUFBV0k7UUFBTztRQUN0RCxNQUFNWCxrREFBVSxDQUFDLGtCQUFrQjhCO1FBQ25DVixlQUFlO0lBQ25CO0lBRUEsSUFBSUQsYUFBYTtRQUNiRSxPQUFPVyxJQUFJLENBQUM7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0M7UUFBS0MsVUFBVVA7OzBCQUNaLDhEQUFDUTtnQkFBR0MsV0FBVTswQkFBNkI7Ozs7OzswQkFDM0MsOERBQUNDOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUNHQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxPQUFPcEM7Z0JBQ1BxQyxVQUFVLENBQUNkLEtBQU9mLFVBQVVlLEdBQUdILE1BQU0sQ0FBQ2dCLEtBQUs7Ozs7OzswQkFHL0MsOERBQUNKOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUNHQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxPQUFPbEM7Z0JBQ1BtQyxVQUFVLENBQUNkLEtBQU9kLGFBQWFjLEdBQUdILE1BQU0sQ0FBQ2dCLEtBQUs7Ozs7OzswQkFHbEQsOERBQUNKOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNNO2dCQUNHSCxhQUFZO2dCQUNaQyxPQUFPaEM7Z0JBQ1BpQyxVQUFVLENBQUNkLEtBQU9aLGVBQWVZLEdBQUdILE1BQU0sQ0FBQ2dCLEtBQUs7Ozs7OzswQkFHcEQsOERBQUNKOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFTQyxhQUFZO2dCQUFTQyxPQUFPOUI7Z0JBQVErQixVQUFVLENBQUNkLEtBQU9iLFVBQVVhLEdBQUdILE1BQU0sQ0FBQ2dCLEtBQUs7Ozs7OzswQkFFcEcsOERBQUNKOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFPRyxVQUFVcEI7Ozs7OzswQkFFN0IsOERBQUNzQjtnQkFBT1IsV0FBVTtnQkFBY0csTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7O0FBSzFEO0dBbkV3Qm5DOztRQWFMSCxrREFBU0E7OztLQWJKRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm1Qcm9kdWN0by5qcz83MjYyIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1Qcm9kdWN0byh7XHJcbiAgICBub21icmU6ZXhpc3RpbmdOb21icmUsXHJcbiAgICBjYXRlZ29yaWE6IGV4aXN0aW5nQ2F0ZWdvcmlhLFxyXG4gICAgZGVzY3JpcGNpb246IGV4aXN0aW5nRGVzY3JpcGNpb24sXHJcbiAgICBwcmVjaW86IGV4aXN0aW5nUHJlY2lvLFxyXG59KSB7XHJcbiAgICBjb25zdCBbbm9tYnJlLCBzZXROb21icmVdID0gdXNlU3RhdGUoIGV4aXN0aW5nTm9tYnJlfHxcIlwiKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yaWEsIHNldENhdGVnb3JpYV0gPSB1c2VTdGF0ZShleGlzdGluZ0NhdGVnb3JpYSB8fCBcIlwiKTtcclxuICAgIGNvbnN0IFtwcmVjaW8sIHNldFByZWNpb10gPSB1c2VTdGF0ZSggZXhpc3RpbmdQcmVjaW8gfHwgXCJcIik7XHJcbiAgICBjb25zdCBbZGVzY3JpcGNpb24sIHNldERlc2NyaXBjaW9uXSA9IHVzZVN0YXRlKGV4aXN0aW5nRGVzY3JpcGNpb258fCBcIlwiKTtcclxuICAgIGNvbnN0IFtpbWFnZW4sIHNldEltYWdlbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBbaXJQcm9kdWN0b3MsIHNldElyUHJvZHVjdG9zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgaGFuZGxlSW1hZ2VDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBzZXRJbWFnZW4oZmlsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWFyUHJvZHVjdG8oZXYpIHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IG5vbWJyZSwgZGVzY3JpcGNpb24sIGNhdGVnb3JpYSwgcHJlY2lvIH07XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9wcm9kdWN0b3MnLCBkYXRhKTtcclxuICAgICAgICBzZXRJclByb2R1Y3Rvcyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXJQcm9kdWN0b3MpIHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2R1Y3RvcycpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Y3JlYXJQcm9kdWN0b30+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtOTAwIG1iLTIgdGV4dC14bFwiPkFncmVnYXIgUHJvZHVjdG88L2gxPlxyXG4gICAgICAgICAgICA8bGFiZWw+Tm9tYnJlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldikgPT4gc2V0Tm9tYnJlKGV2LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsPkNhdGVnb3JpYTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NhdGVnb3JpYX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHNldENhdGVnb3JpYShldi50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwY2lvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwY2lvblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcGNpb259XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiBzZXREZXNjcmlwY2lvbihldi50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbD5QcmVjaW88L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiUHJlY2lvXCIgdmFsdWU9e3ByZWNpb30gb25DaGFuZ2U9eyhldikgPT4gc2V0UHJlY2lvKGV2LnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWw+SW1hZ2VuPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUltYWdlQ2hhbmdlfSAvPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9ybVByb2R1Y3RvIiwibm9tYnJlIiwiZXhpc3RpbmdOb21icmUiLCJjYXRlZ29yaWEiLCJleGlzdGluZ0NhdGVnb3JpYSIsImRlc2NyaXBjaW9uIiwiZXhpc3RpbmdEZXNjcmlwY2lvbiIsInByZWNpbyIsImV4aXN0aW5nUHJlY2lvIiwic2V0Tm9tYnJlIiwic2V0Q2F0ZWdvcmlhIiwic2V0UHJlY2lvIiwic2V0RGVzY3JpcGNpb24iLCJpbWFnZW4iLCJzZXRJbWFnZW4iLCJpclByb2R1Y3RvcyIsInNldElyUHJvZHVjdG9zIiwicm91dGVyIiwiaGFuZGxlSW1hZ2VDaGFuZ2UiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiY3JlYXJQcm9kdWN0byIsImV2IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwicG9zdCIsInB1c2giLCJmb3JtIiwib25TdWJtaXQiLCJoMSIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FormProducto.js\n"));

/***/ })

});