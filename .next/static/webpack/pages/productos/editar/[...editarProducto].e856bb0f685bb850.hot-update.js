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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditarProducto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction EditarProducto() {\n    _s();\n    const [producto, setProducto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [categoria, setCategoria] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [precio, setPrecio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [descripcion, setDescripcion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { id } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Obtener los datos del producto por su ID\n        const fetchProducto = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/productos?id\" + id);\n                setProducto(response.data);\n                setNombre(response.data.nombre);\n                setCategoria(response.data.categoria);\n                setPrecio(response.data.precio);\n                setDescripcion(response.data.descripcion);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchProducto();\n    }, []);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Enviar los datos actualizados al servidor para la actualización\n        try {\n            const updatedData = {\n                nombre,\n                categoria,\n                precio,\n                descripcion\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"/api/productos/\".concat(producto._id), updatedData);\n        // Redireccionar después de la actualización\n        // router.push(`/productos/${producto._id}`);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Editar Producto\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Nombre\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: nombre,\n                        onChange: (e)=>setNombre(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Categor\\xeda\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: categoria,\n                        onChange: (e)=>setCategoria(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Precio\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: precio,\n                        onChange: (e)=>setPrecio(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Descripci\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        value: descripcion,\n                        onChange: (e)=>setDescripcion(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Actualizar Producto\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\NextJS\\\\Ecommerce\\\\pages\\\\productos\\\\editar\\\\[...editarProducto].js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(EditarProducto, \"K4L94D10aL4i1fEgiPceOnPbXDs=\");\n_c = EditarProducto;\nvar _c;\n$RefreshReg$(_c, \"EditarProducto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0b3MvZWRpdGFyL1suLi5lZGl0YXJQcm9kdWN0b10uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDbEI7QUFDZTtBQUNKO0FBRXRCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsQ0FBQztJQUMxQyxNQUFNLENBQUNPLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDUyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1csUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNhLGFBQWFDLGVBQWUsR0FBR2QsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxFQUFDZSxFQUFFLEVBQUMsR0FBR0MsT0FBT0MsS0FBSztJQUMzQmxCLGdEQUFTQSxDQUFDO1FBQ1IsMkNBQTJDO1FBQzNDLE1BQU1tQixnQkFBZ0I7WUFDcEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1sQixpREFBUyxDQUFDLHNCQUFvQmM7Z0JBQ3JEVCxZQUFZYSxTQUFTRSxJQUFJO2dCQUN6QmIsVUFBVVcsU0FBU0UsSUFBSSxDQUFDZCxNQUFNO2dCQUM5QkcsYUFBYVMsU0FBU0UsSUFBSSxDQUFDWixTQUFTO2dCQUNwQ0csVUFBVU8sU0FBU0UsSUFBSSxDQUFDVixNQUFNO2dCQUM5QkcsZUFBZUssU0FBU0UsSUFBSSxDQUFDUixXQUFXO1lBQzFDLEVBQUUsT0FBT1MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDQTtZQUNoQjtRQUNGO1FBRUFKO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTU0sZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQixrRUFBa0U7UUFDbEUsSUFBSTtZQUNGLE1BQU1DLGNBQWM7Z0JBQ2xCcEI7Z0JBQ0FFO2dCQUNBRTtnQkFDQUU7WUFDRjtZQUVBLE1BQU1aLGlEQUFTLENBQUMsa0JBQStCLE9BQWJJLFNBQVN3QixHQUFHLEdBQUlGO1FBQ2xELDRDQUE0QztRQUM1Qyw2Q0FBNkM7UUFDL0MsRUFBRSxPQUFPTCxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7UUFDaEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDcEIsMERBQU1BOzswQkFDTCw4REFBQzRCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFLQyxVQUFVUjs7a0NBQ2QsOERBQUNTO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxPQUFPN0I7d0JBQ1A4QixVQUFVLENBQUNaLElBQU1qQixVQUFVaUIsRUFBRWEsTUFBTSxDQUFDRixLQUFLOzs7Ozs7a0NBRTNDLDhEQUFDSDtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsT0FBTzNCO3dCQUNQNEIsVUFBVSxDQUFDWixJQUFNZixhQUFhZSxFQUFFYSxNQUFNLENBQUNGLEtBQUs7Ozs7OztrQ0FFOUMsOERBQUNIO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxPQUFPekI7d0JBQ1AwQixVQUFVLENBQUNaLElBQU1iLFVBQVVhLEVBQUVhLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O2tDQUUzQyw4REFBQ0g7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ007d0JBQ0NILE9BQU92Qjt3QkFDUHdCLFVBQVUsQ0FBQ1osSUFBTVgsZUFBZVcsRUFBRWEsTUFBTSxDQUFDRixLQUFLOzs7Ozs7a0NBRWhELDhEQUFDSTt3QkFBT0wsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0dBM0V3Qi9CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3Rvcy9lZGl0YXIvWy4uLmVkaXRhclByb2R1Y3RvXS5qcz85NWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdGFyUHJvZHVjdG8oKSB7XHJcbiAgY29uc3QgW3Byb2R1Y3RvLCBzZXRQcm9kdWN0b10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW25vbWJyZSwgc2V0Tm9tYnJlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYXRlZ29yaWEsIHNldENhdGVnb3JpYV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJlY2lvLCBzZXRQcmVjaW9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2NyaXBjaW9uLCBzZXREZXNjcmlwY2lvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIE9idGVuZXIgbG9zIGRhdG9zIGRlbCBwcm9kdWN0byBwb3Igc3UgSURcclxuICAgIGNvbnN0IGZldGNoUHJvZHVjdG8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL3Byb2R1Y3Rvcz9pZFwiK2lkKTtcclxuICAgICAgICBzZXRQcm9kdWN0byhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBzZXROb21icmUocmVzcG9uc2UuZGF0YS5ub21icmUpO1xyXG4gICAgICAgIHNldENhdGVnb3JpYShyZXNwb25zZS5kYXRhLmNhdGVnb3JpYSk7XHJcbiAgICAgICAgc2V0UHJlY2lvKHJlc3BvbnNlLmRhdGEucHJlY2lvKTtcclxuICAgICAgICBzZXREZXNjcmlwY2lvbihyZXNwb25zZS5kYXRhLmRlc2NyaXBjaW9uKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFByb2R1Y3RvKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gRW52aWFyIGxvcyBkYXRvcyBhY3R1YWxpemFkb3MgYWwgc2Vydmlkb3IgcGFyYSBsYSBhY3R1YWxpemFjacOzblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSB7XHJcbiAgICAgICAgbm9tYnJlLFxyXG4gICAgICAgIGNhdGVnb3JpYSxcclxuICAgICAgICBwcmVjaW8sXHJcbiAgICAgICAgZGVzY3JpcGNpb24sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBhd2FpdCBheGlvcy5wdXQoYC9hcGkvcHJvZHVjdG9zLyR7cHJvZHVjdG8uX2lkfWAsIHVwZGF0ZWREYXRhKTtcclxuICAgICAgLy8gUmVkaXJlY2Npb25hciBkZXNwdcOpcyBkZSBsYSBhY3R1YWxpemFjacOzblxyXG4gICAgICAvLyByb3V0ZXIucHVzaChgL3Byb2R1Y3Rvcy8ke3Byb2R1Y3RvLl9pZH1gKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDE+RWRpdGFyIFByb2R1Y3RvPC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGxhYmVsPk5vbWJyZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17bm9tYnJlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb21icmUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsPkNhdGVnb3LDrWE8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e2NhdGVnb3JpYX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2F0ZWdvcmlhKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsYWJlbD5QcmVjaW88L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICB2YWx1ZT17cHJlY2lvfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmVjaW8oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsPkRlc2NyaXBjacOzbjwvbGFiZWw+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17ZGVzY3JpcGNpb259XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXBjaW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BY3R1YWxpemFyIFByb2R1Y3RvPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJMYXlvdXQiLCJSb3V0ZXIiLCJFZGl0YXJQcm9kdWN0byIsInByb2R1Y3RvIiwic2V0UHJvZHVjdG8iLCJub21icmUiLCJzZXROb21icmUiLCJjYXRlZ29yaWEiLCJzZXRDYXRlZ29yaWEiLCJwcmVjaW8iLCJzZXRQcmVjaW8iLCJkZXNjcmlwY2lvbiIsInNldERlc2NyaXBjaW9uIiwiaWQiLCJyb3V0ZXIiLCJxdWVyeSIsImZldGNoUHJvZHVjdG8iLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVkRGF0YSIsInB1dCIsIl9pZCIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/productos/editar/[...editarProducto].js\n"));

/***/ })

});