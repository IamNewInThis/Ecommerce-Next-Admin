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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormProducto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction FormProducto(param) {\n    let { nombre: existingNombre, categoria: existingCategoria, descripcion: existingDescripcion, precio: existingPrecio } = param;\n    _s();\n    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [categoria, setCategoria] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [precio, setPrecio] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [descripcion, setDescripcion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [imagen, setImagen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Actualizar los estados con los valores de las props cuando estas cambian\n        setNombre(existingNombre || \"\");\n        setCategoria(existingCategoria || \"\");\n        setPrecio(existingPrecio || \"\");\n        setDescripcion(existingDescripcion || \"\");\n    }, [\n        existingNombre,\n        existingCategoria,\n        existingPrecio,\n        existingDescripcion\n    ]);\n    const [irProductos, setIrProductos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleImageChange = (e)=>{\n        const file = e.target.files[0];\n        setImagen(file);\n    };\n    async function crearProducto(ev) {\n        ev.preventDefault();\n        const data = {\n            nombre,\n            descripcion,\n            categoria,\n            precio\n        };\n        await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/productos\", data);\n        setIrProductos(true);\n    }\n    if (irProductos) {\n        router.push(\"/productos\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: crearProducto,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-blue-900 mb-2 text-xl\",\n                children: \"Agregar Producto\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Nombre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Nombre\",\n                value: nombre,\n                onChange: (ev)=>setNombre(ev.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Categoria\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Categoria\",\n                value: categoria,\n                onChange: (ev)=>setCategoria(ev.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Descripcion\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"Descripcion\",\n                value: descripcion,\n                onChange: (ev)=>setDescripcion(ev.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Precio\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Precio\",\n                value: precio,\n                onChange: (ev)=>setPrecio(ev.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Imagen\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleImageChange\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn-primary\",\n                type: \"submit\",\n                children: \"Guardar\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\components\\\\FormProducto.js\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_s(FormProducto, \"1jErC5wlBaxNFs92HoaxBv72l+c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = FormProducto;\nvar _c;\n$RefreshReg$(_c, \"FormProducto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1Qcm9kdWN0by5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ2E7QUFDSztBQUU3QixTQUFTSSxhQUFhLEtBS3BDO1FBTG9DLEVBQ2pDQyxRQUFPQyxjQUFjLEVBQ3JCQyxXQUFXQyxpQkFBaUIsRUFDNUJDLGFBQWFDLG1CQUFtQixFQUNoQ0MsUUFBUUMsY0FBYyxFQUN6QixHQUxvQzs7SUFNakMsTUFBTSxDQUFDUCxRQUFRUSxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ksV0FBV08sYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBRTtJQUM1QyxNQUFNLENBQUNRLFFBQVFJLFVBQVUsR0FBR1osK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDTSxhQUFhTyxlQUFlLEdBQUdiLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2MsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUVyQ0QsZ0RBQVNBLENBQUM7UUFDTiwyRUFBMkU7UUFDM0VXLFVBQVVQLGtCQUFrQjtRQUM1QlEsYUFBYU4scUJBQXFCO1FBQ2xDTyxVQUFVSCxrQkFBa0I7UUFDNUJJLGVBQWVOLHVCQUF1QjtJQUMxQyxHQUFHO1FBQUNKO1FBQWdCRTtRQUFtQkk7UUFBZ0JGO0tBQW9CO0lBRTNFLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHakIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTWtCLFNBQVNwQixzREFBU0E7SUFDeEIsTUFBTXFCLG9CQUFvQixDQUFDQztRQUN2QixNQUFNQyxPQUFPRCxFQUFFRSxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBQzlCUixVQUFVTTtJQUNkO0lBRUEsZUFBZUcsY0FBY0MsRUFBRTtRQUMzQkEsR0FBR0MsY0FBYztRQUNqQixNQUFNQyxPQUFPO1lBQUV6QjtZQUFRSTtZQUFhRjtZQUFXSTtRQUFPO1FBQ3RELE1BQU1YLGtEQUFVLENBQUMsa0JBQWtCOEI7UUFDbkNWLGVBQWU7SUFDbkI7SUFFQSxJQUFJRCxhQUFhO1FBQ2JFLE9BQU9XLElBQUksQ0FBQztJQUNoQjtJQUVBLHFCQUNJLDhEQUFDQztRQUFLQyxVQUFVUDs7MEJBQ1osOERBQUNRO2dCQUFHQyxXQUFVOzBCQUE2Qjs7Ozs7OzBCQUMzQyw4REFBQ0M7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQ0dDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLE9BQU9wQztnQkFDUHFDLFVBQVUsQ0FBQ2QsS0FBT2YsVUFBVWUsR0FBR0gsTUFBTSxDQUFDZ0IsS0FBSzs7Ozs7OzBCQUcvQyw4REFBQ0o7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQ0dDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLE9BQU9sQztnQkFDUG1DLFVBQVUsQ0FBQ2QsS0FBT2QsYUFBYWMsR0FBR0gsTUFBTSxDQUFDZ0IsS0FBSzs7Ozs7OzBCQUdsRCw4REFBQ0o7MEJBQU07Ozs7OzswQkFDUCw4REFBQ007Z0JBQ0dILGFBQVk7Z0JBQ1pDLE9BQU9oQztnQkFDUGlDLFVBQVUsQ0FBQ2QsS0FBT1osZUFBZVksR0FBR0gsTUFBTSxDQUFDZ0IsS0FBSzs7Ozs7OzBCQUdwRCw4REFBQ0o7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQVNDLGFBQVk7Z0JBQVNDLE9BQU85QjtnQkFBUStCLFVBQVUsQ0FBQ2QsS0FBT2IsVUFBVWEsR0FBR0gsTUFBTSxDQUFDZ0IsS0FBSzs7Ozs7OzBCQUVwRyw4REFBQ0o7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQU9HLFVBQVVwQjs7Ozs7OzBCQUU3Qiw4REFBQ3NCO2dCQUFPUixXQUFVO2dCQUFjRyxNQUFLOzBCQUFTOzs7Ozs7Ozs7Ozs7QUFLMUQ7R0EzRXdCbkM7O1FBcUJMSCxrREFBU0E7OztLQXJCSkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtUHJvZHVjdG8uanM/NzI2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtUHJvZHVjdG8oe1xyXG4gICAgbm9tYnJlOmV4aXN0aW5nTm9tYnJlLFxyXG4gICAgY2F0ZWdvcmlhOiBleGlzdGluZ0NhdGVnb3JpYSxcclxuICAgIGRlc2NyaXBjaW9uOiBleGlzdGluZ0Rlc2NyaXBjaW9uLFxyXG4gICAgcHJlY2lvOiBleGlzdGluZ1ByZWNpbyxcclxufSkge1xyXG4gICAgY29uc3QgW25vbWJyZSwgc2V0Tm9tYnJlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2NhdGVnb3JpYSwgc2V0Q2F0ZWdvcmlhXSA9IHVzZVN0YXRlKCBcIlwiKTtcclxuICAgIGNvbnN0IFtwcmVjaW8sIHNldFByZWNpb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtkZXNjcmlwY2lvbiwgc2V0RGVzY3JpcGNpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaW1hZ2VuLCBzZXRJbWFnZW5dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBBY3R1YWxpemFyIGxvcyBlc3RhZG9zIGNvbiBsb3MgdmFsb3JlcyBkZSBsYXMgcHJvcHMgY3VhbmRvIGVzdGFzIGNhbWJpYW5cclxuICAgICAgICBzZXROb21icmUoZXhpc3RpbmdOb21icmUgfHwgXCJcIik7XHJcbiAgICAgICAgc2V0Q2F0ZWdvcmlhKGV4aXN0aW5nQ2F0ZWdvcmlhIHx8IFwiXCIpO1xyXG4gICAgICAgIHNldFByZWNpbyhleGlzdGluZ1ByZWNpbyB8fCBcIlwiKTtcclxuICAgICAgICBzZXREZXNjcmlwY2lvbihleGlzdGluZ0Rlc2NyaXBjaW9uIHx8IFwiXCIpO1xyXG4gICAgfSwgW2V4aXN0aW5nTm9tYnJlLCBleGlzdGluZ0NhdGVnb3JpYSwgZXhpc3RpbmdQcmVjaW8sIGV4aXN0aW5nRGVzY3JpcGNpb25dKTtcclxuXHJcbiAgICBjb25zdCBbaXJQcm9kdWN0b3MsIHNldElyUHJvZHVjdG9zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgaGFuZGxlSW1hZ2VDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBzZXRJbWFnZW4oZmlsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWFyUHJvZHVjdG8oZXYpIHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IG5vbWJyZSwgZGVzY3JpcGNpb24sIGNhdGVnb3JpYSwgcHJlY2lvIH07XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9wcm9kdWN0b3MnLCBkYXRhKTtcclxuICAgICAgICBzZXRJclByb2R1Y3Rvcyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXJQcm9kdWN0b3MpIHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2R1Y3RvcycpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Y3JlYXJQcm9kdWN0b30+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtOTAwIG1iLTIgdGV4dC14bFwiPkFncmVnYXIgUHJvZHVjdG88L2gxPlxyXG4gICAgICAgICAgICA8bGFiZWw+Tm9tYnJlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldikgPT4gc2V0Tm9tYnJlKGV2LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsPkNhdGVnb3JpYTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NhdGVnb3JpYX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHNldENhdGVnb3JpYShldi50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwY2lvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwY2lvblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcGNpb259XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiBzZXREZXNjcmlwY2lvbihldi50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbD5QcmVjaW88L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiUHJlY2lvXCIgdmFsdWU9e3ByZWNpb30gb25DaGFuZ2U9eyhldikgPT4gc2V0UHJlY2lvKGV2LnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWw+SW1hZ2VuPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUltYWdlQ2hhbmdlfSAvPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9ybVByb2R1Y3RvIiwibm9tYnJlIiwiZXhpc3RpbmdOb21icmUiLCJjYXRlZ29yaWEiLCJleGlzdGluZ0NhdGVnb3JpYSIsImRlc2NyaXBjaW9uIiwiZXhpc3RpbmdEZXNjcmlwY2lvbiIsInByZWNpbyIsImV4aXN0aW5nUHJlY2lvIiwic2V0Tm9tYnJlIiwic2V0Q2F0ZWdvcmlhIiwic2V0UHJlY2lvIiwic2V0RGVzY3JpcGNpb24iLCJpbWFnZW4iLCJzZXRJbWFnZW4iLCJpclByb2R1Y3RvcyIsInNldElyUHJvZHVjdG9zIiwicm91dGVyIiwiaGFuZGxlSW1hZ2VDaGFuZ2UiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiY3JlYXJQcm9kdWN0byIsImV2IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwicG9zdCIsInB1c2giLCJmb3JtIiwib25TdWJtaXQiLCJoMSIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FormProducto.js\n"));

/***/ })

});