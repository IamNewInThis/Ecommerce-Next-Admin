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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditarProducto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction EditarProducto() {\n    _s();\n    const [producto, setProducto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [categoria, setCategoria] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [precio, setPrecio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [descripcion, setDescripcion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Obtener los datos del producto por su ID\n        const fetchProducto = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/productos?id\" + id);\n                setProducto(response.data);\n                setNombre(response.data.nombre);\n                setCategoria(response.data.categoria);\n                setPrecio(response.data.precio);\n                setDescripcion(response.data.descripcion);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchProducto();\n    }, []);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Enviar los datos actualizados al servidor para la actualización\n        try {\n            const updatedData = {\n                nombre,\n                categoria,\n                precio,\n                descripcion\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"/api/productos/\".concat(producto._id), updatedData);\n        // Redireccionar después de la actualización\n        // router.push(`/productos/${producto._id}`);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Editar Producto\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Nombre\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: nombre,\n                        onChange: (e)=>setNombre(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Categor\\xeda\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: categoria,\n                        onChange: (e)=>setCategoria(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Precio\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: precio,\n                        onChange: (e)=>setPrecio(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Descripci\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        value: descripcion,\n                        onChange: (e)=>setDescripcion(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Actualizar Producto\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(EditarProducto, \"K4L94D10aL4i1fEgiPceOnPbXDs=\");\n_c = EditarProducto;\nvar _c;\n$RefreshReg$(_c, \"EditarProducto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0b3MvZWRpdGFyL1suLi5lZGl0YXJQcm9kdWN0b10uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2xCO0FBQ2U7QUFFMUIsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVSxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1ksYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUUvQ0QsZ0RBQVNBLENBQUM7UUFDUiwyQ0FBMkM7UUFDM0MsTUFBTWUsZ0JBQWdCO1lBQ3BCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNZCxpREFBUyxDQUFDLHNCQUFvQmdCO2dCQUNyRFosWUFBWVUsU0FBU0csSUFBSTtnQkFDekJYLFVBQVVRLFNBQVNHLElBQUksQ0FBQ1osTUFBTTtnQkFDOUJHLGFBQWFNLFNBQVNHLElBQUksQ0FBQ1YsU0FBUztnQkFDcENHLFVBQVVJLFNBQVNHLElBQUksQ0FBQ1IsTUFBTTtnQkFDOUJHLGVBQWVFLFNBQVNHLElBQUksQ0FBQ04sV0FBVztZQUMxQyxFQUFFLE9BQU9PLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7WUFDaEI7UUFDRjtRQUVBTDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1PLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsa0VBQWtFO1FBQ2xFLElBQUk7WUFDRixNQUFNQyxjQUFjO2dCQUNsQmxCO2dCQUNBRTtnQkFDQUU7Z0JBQ0FFO1lBQ0Y7WUFFQSxNQUFNWCxpREFBUyxDQUFDLGtCQUErQixPQUFiRyxTQUFTc0IsR0FBRyxHQUFJRjtRQUNsRCw0Q0FBNEM7UUFDNUMsNkNBQTZDO1FBQy9DLEVBQUUsT0FBT0wsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2hCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2pCLDBEQUFNQTs7MEJBQ0wsOERBQUN5QjswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0MsVUFBVVI7O2tDQUNkLDhEQUFDUztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsT0FBTzNCO3dCQUNQNEIsVUFBVSxDQUFDWixJQUFNZixVQUFVZSxFQUFFYSxNQUFNLENBQUNGLEtBQUs7Ozs7OztrQ0FFM0MsOERBQUNIO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxPQUFPekI7d0JBQ1AwQixVQUFVLENBQUNaLElBQU1iLGFBQWFhLEVBQUVhLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O2tDQUU5Qyw4REFBQ0g7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLE9BQU92Qjt3QkFDUHdCLFVBQVUsQ0FBQ1osSUFBTVgsVUFBVVcsRUFBRWEsTUFBTSxDQUFDRixLQUFLOzs7Ozs7a0NBRTNDLDhEQUFDSDtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDTTt3QkFDQ0gsT0FBT3JCO3dCQUNQc0IsVUFBVSxDQUFDWixJQUFNVCxlQUFlUyxFQUFFYSxNQUFNLENBQUNGLEtBQUs7Ozs7OztrQ0FFaEQsOERBQUNJO3dCQUFPTCxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7R0EzRXdCN0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG9zL2VkaXRhci9bLi4uZWRpdGFyUHJvZHVjdG9dLmpzPzk1ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRhclByb2R1Y3RvKCkge1xyXG4gIGNvbnN0IFtwcm9kdWN0bywgc2V0UHJvZHVjdG9dID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtub21icmUsIHNldE5vbWJyZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2F0ZWdvcmlhLCBzZXRDYXRlZ29yaWFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByZWNpbywgc2V0UHJlY2lvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZXNjcmlwY2lvbiwgc2V0RGVzY3JpcGNpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBPYnRlbmVyIGxvcyBkYXRvcyBkZWwgcHJvZHVjdG8gcG9yIHN1IElEXHJcbiAgICBjb25zdCBmZXRjaFByb2R1Y3RvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9wcm9kdWN0b3M/aWRcIitpZCk7XHJcbiAgICAgICAgc2V0UHJvZHVjdG8ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgc2V0Tm9tYnJlKHJlc3BvbnNlLmRhdGEubm9tYnJlKTtcclxuICAgICAgICBzZXRDYXRlZ29yaWEocmVzcG9uc2UuZGF0YS5jYXRlZ29yaWEpO1xyXG4gICAgICAgIHNldFByZWNpbyhyZXNwb25zZS5kYXRhLnByZWNpbyk7XHJcbiAgICAgICAgc2V0RGVzY3JpcGNpb24ocmVzcG9uc2UuZGF0YS5kZXNjcmlwY2lvbik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hQcm9kdWN0bygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIEVudmlhciBsb3MgZGF0b3MgYWN0dWFsaXphZG9zIGFsIHNlcnZpZG9yIHBhcmEgbGEgYWN0dWFsaXphY2nDs25cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWREYXRhID0ge1xyXG4gICAgICAgIG5vbWJyZSxcclxuICAgICAgICBjYXRlZ29yaWEsXHJcbiAgICAgICAgcHJlY2lvLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgYXdhaXQgYXhpb3MucHV0KGAvYXBpL3Byb2R1Y3Rvcy8ke3Byb2R1Y3RvLl9pZH1gLCB1cGRhdGVkRGF0YSk7XHJcbiAgICAgIC8vIFJlZGlyZWNjaW9uYXIgZGVzcHXDqXMgZGUgbGEgYWN0dWFsaXphY2nDs25cclxuICAgICAgLy8gcm91dGVyLnB1c2goYC9wcm9kdWN0b3MvJHtwcm9kdWN0by5faWR9YCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGgxPkVkaXRhciBQcm9kdWN0bzwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxsYWJlbD5Ob21icmU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e25vbWJyZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm9tYnJlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsYWJlbD5DYXRlZ29yw61hPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXtjYXRlZ29yaWF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENhdGVnb3JpYShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGFiZWw+UHJlY2lvPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgdmFsdWU9e3ByZWNpb31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJlY2lvKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsYWJlbD5EZXNjcmlwY2nDs248L2xhYmVsPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2Rlc2NyaXBjaW9ufVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwY2lvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWN0dWFsaXphciBQcm9kdWN0bzwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTGF5b3V0IiwiRWRpdGFyUHJvZHVjdG8iLCJwcm9kdWN0byIsInNldFByb2R1Y3RvIiwibm9tYnJlIiwic2V0Tm9tYnJlIiwiY2F0ZWdvcmlhIiwic2V0Q2F0ZWdvcmlhIiwicHJlY2lvIiwic2V0UHJlY2lvIiwiZGVzY3JpcGNpb24iLCJzZXREZXNjcmlwY2lvbiIsImZldGNoUHJvZHVjdG8iLCJyZXNwb25zZSIsImdldCIsImlkIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZWREYXRhIiwicHV0IiwiX2lkIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/productos/editar/[...editarProducto].js\n"));

/***/ })

});