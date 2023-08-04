"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/productos";
exports.ids = ["pages/api/productos"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mongooseConnect: () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLFNBQVNDO0lBQ2QsSUFBSUQsNERBQW1CLENBQUNHLFVBQVUsS0FBSyxHQUFHO1FBQ3hDLE9BQU9ILDBEQUFtQixDQUFDSSxTQUFTO0lBQ3RDLE9BQU87UUFDTCxNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7UUFDbkMsT0FBT1IsdURBQWdCLENBQUNLO0lBQzFCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub21icmUtZGVsLXByb3llY3RvLy4vbGliL21vbmdvb3NlLmpzPzE2M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vbmdvb3NlQ29ubmVjdCgpIHtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XHJcbiAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbi5hc1Byb21pc2UoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcbiAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdCh1cmkpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtb25nb29zZUNvbm5lY3QiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImFzUHJvbWlzZSIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Producto.js":
/*!****************************!*\
  !*** ./models/Producto.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Producto: () => (/* binding */ Producto)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductoSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    nombre: {\n        type: String,\n        required: true\n    },\n    categoria: String,\n    precio: {\n        type: Number\n    },\n    descripcion: String,\n    imagen: [\n        {\n            type: String\n        }\n    ]\n});\nconst Producto = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.producto || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"producto\", ProductoSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdG8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEO0FBRWhELE1BQU1HLGlCQUFpQixJQUFJSCw0Q0FBTUEsQ0FBQztJQUM5QkksUUFBUTtRQUFDQyxNQUFNQztRQUFRQyxVQUFVO0lBQUk7SUFDckNDLFdBQVlGO0lBQ1pHLFFBQVE7UUFBQ0osTUFBTUs7SUFBTTtJQUNyQkMsYUFBYUw7SUFDYk0sUUFBUTtRQUFDO1lBQUNQLE1BQUtDO1FBQU07S0FBRTtBQUUzQjtBQUVPLE1BQU1PLFdBQVdYLDRDQUFNQSxDQUFDWSxRQUFRLElBQUliLCtDQUFLQSxDQUFDLFlBQVdFLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL25vbWJyZS1kZWwtcHJveWVjdG8vLi9tb2RlbHMvUHJvZHVjdG8uanM/NmM4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsbW9kZWwsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgUHJvZHVjdG9TY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgIG5vbWJyZToge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgY2F0ZWdvcmlhIDogU3RyaW5nLCBcclxuICAgIHByZWNpbzoge3R5cGU6IE51bWJlcn0sXHJcbiAgICBkZXNjcmlwY2lvbjogU3RyaW5nLFxyXG4gICAgaW1hZ2VuOiBbe3R5cGU6U3RyaW5nfV0sXHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0byA9IG1vZGVscy5wcm9kdWN0byB8fCBtb2RlbCgncHJvZHVjdG8nLFByb2R1Y3RvU2NoZW1hICkiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJQcm9kdWN0b1NjaGVtYSIsIm5vbWJyZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNhdGVnb3JpYSIsInByZWNpbyIsIk51bWJlciIsImRlc2NyaXBjaW9uIiwiaW1hZ2VuIiwiUHJvZHVjdG8iLCJwcm9kdWN0byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Producto.js\n");

/***/ }),

/***/ "(api)/./pages/api/productos.js":
/*!********************************!*\
  !*** ./pages/api/productos.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Producto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Producto */ \"(api)/./models/Producto.js\");\n\n\nasync function handle(req, res) {\n    const { method } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n    //GET\n    if (method === \"GET\") {\n        if (req.query?.id) {\n            res.json(await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.findOne({\n                _id: req.query.id\n            }));\n        } else {\n            res.json(await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.find());\n        }\n    }\n    //POST\n    if (method === \"POST\") {\n        const { nombre, categoria, precio, descripcion, imagen } = req.body;\n        const productoDoc = await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.create({\n            nombre,\n            categoria,\n            precio,\n            descripcion,\n            imagen\n        });\n        res.json(productoDoc);\n    }\n    //PUT\n    if (method === \"PUT\") {\n        const { nombre, descripcion, categoria, precio, imagen, _id } = req.body;\n        console.log({\n            imagen\n        });\n        await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.updateOne({\n            _id\n        }, {\n            nombre,\n            descripcion,\n            categoria,\n            precio,\n            imagen\n        });\n        res.json(true);\n    }\n    //DELETE\n    if (method === \"DELETE\") {\n        if (req.query?.id) {\n            await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.deleteOne({\n                _id: req.query?.id\n            });\n            res.json(true);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdG9zLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNpRDtBQUNBO0FBRWxDLGVBQWVFLE9BQU9DLEdBQUcsRUFBRUMsR0FBRztJQUN6QyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRjtJQUNuQixNQUFNSCw4REFBZUE7SUFFckIsS0FBSztJQUNMLElBQUlLLFdBQVcsT0FBTztRQUNsQixJQUFJRixJQUFJRyxLQUFLLEVBQUVDLElBQUk7WUFDZkgsSUFBSUksSUFBSSxDQUFDLE1BQU1QLHNEQUFRQSxDQUFDUSxPQUFPLENBQUM7Z0JBQUVDLEtBQUtQLElBQUlHLEtBQUssQ0FBQ0MsRUFBRTtZQUFDO1FBQ3hELE9BQU87WUFDSEgsSUFBSUksSUFBSSxDQUFDLE1BQU1QLHNEQUFRQSxDQUFDVSxJQUFJO1FBQ2hDO0lBQ0o7SUFFQSxNQUFNO0lBQ04sSUFBSU4sV0FBVyxRQUFRO1FBQ25CLE1BQU0sRUFBRU8sTUFBTSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsV0FBVyxFQUFDQyxNQUFNLEVBQUUsR0FBR2IsSUFBSWMsSUFBSTtRQUNsRSxNQUFNQyxjQUFjLE1BQU1qQixzREFBUUEsQ0FBQ2tCLE1BQU0sQ0FBQztZQUN0Q1A7WUFBUUM7WUFBV0M7WUFBUUM7WUFBYUM7UUFDNUM7UUFDQVosSUFBSUksSUFBSSxDQUFDVTtJQUNiO0lBRUEsS0FBSztJQUNMLElBQUliLFdBQVcsT0FBTztRQUNsQixNQUFNLEVBQUVPLE1BQU0sRUFBRUcsV0FBVyxFQUFFRixTQUFTLEVBQUVDLE1BQU0sRUFBRUUsTUFBTSxFQUFFTixHQUFHLEVBQUUsR0FBR1AsSUFBSWMsSUFBSTtRQUN4RUcsUUFBUUMsR0FBRyxDQUFDO1lBQUNMO1FBQU07UUFDbkIsTUFBTWYsc0RBQVFBLENBQUNxQixTQUFTLENBQUM7WUFBRVo7UUFBSSxHQUFHO1lBQUVFO1lBQVFHO1lBQWFGO1lBQVdDO1lBQVFFO1FBQU87UUFDbkZaLElBQUlJLElBQUksQ0FBQztJQUNiO0lBRUEsUUFBUTtJQUNSLElBQUlILFdBQVcsVUFBVTtRQUNyQixJQUFJRixJQUFJRyxLQUFLLEVBQUVDLElBQUk7WUFDZixNQUFNTixzREFBUUEsQ0FBQ3NCLFNBQVMsQ0FBQztnQkFBQ2IsS0FBS1AsSUFBSUcsS0FBSyxFQUFFQztZQUFHO1lBQzdDSCxJQUFJSSxJQUFJLENBQUM7UUFDYjtJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub21icmUtZGVsLXByb3llY3RvLy4vcGFnZXMvYXBpL3Byb2R1Y3Rvcy5qcz9iMjA5Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBtb25nb29zZUNvbm5lY3QgfSBmcm9tIFwiQC9saWIvbW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgUHJvZHVjdG8gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Byb2R1Y3RvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XHJcbiAgICBhd2FpdCBtb25nb29zZUNvbm5lY3QoKTtcclxuXHJcbiAgICAvL0dFVFxyXG4gICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICBpZiAocmVxLnF1ZXJ5Py5pZCkge1xyXG4gICAgICAgICAgICByZXMuanNvbihhd2FpdCBQcm9kdWN0by5maW5kT25lKHsgX2lkOiByZXEucXVlcnkuaWQgfSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKGF3YWl0IFByb2R1Y3RvLmZpbmQoKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9QT1NUXHJcbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICBjb25zdCB7IG5vbWJyZSwgY2F0ZWdvcmlhLCBwcmVjaW8sIGRlc2NyaXBjaW9uLGltYWdlbiB9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdG9Eb2MgPSBhd2FpdCBQcm9kdWN0by5jcmVhdGUoe1xyXG4gICAgICAgICAgICBub21icmUsIGNhdGVnb3JpYSwgcHJlY2lvLCBkZXNjcmlwY2lvbiwgaW1hZ2VuXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXMuanNvbihwcm9kdWN0b0RvYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9QVVRcclxuICAgIGlmIChtZXRob2QgPT09ICdQVVQnKSB7XHJcbiAgICAgICAgY29uc3QgeyBub21icmUsIGRlc2NyaXBjaW9uLCBjYXRlZ29yaWEsIHByZWNpbywgaW1hZ2VuLCBfaWQgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHtpbWFnZW59KVxyXG4gICAgICAgIGF3YWl0IFByb2R1Y3RvLnVwZGF0ZU9uZSh7IF9pZCB9LCB7IG5vbWJyZSwgZGVzY3JpcGNpb24sIGNhdGVnb3JpYSwgcHJlY2lvLCBpbWFnZW4gfSk7XHJcbiAgICAgICAgcmVzLmpzb24odHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICAvL0RFTEVURVxyXG4gICAgaWYgKG1ldGhvZCA9PT0gJ0RFTEVURScpIHtcclxuICAgICAgICBpZiAocmVxLnF1ZXJ5Py5pZCkge1xyXG4gICAgICAgICAgICBhd2FpdCBQcm9kdWN0by5kZWxldGVPbmUoe19pZDogcmVxLnF1ZXJ5Py5pZCB9KTtcclxuICAgICAgICAgICAgcmVzLmpzb24odHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsibW9uZ29vc2VDb25uZWN0IiwiUHJvZHVjdG8iLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJxdWVyeSIsImlkIiwianNvbiIsImZpbmRPbmUiLCJfaWQiLCJmaW5kIiwibm9tYnJlIiwiY2F0ZWdvcmlhIiwicHJlY2lvIiwiZGVzY3JpcGNpb24iLCJpbWFnZW4iLCJib2R5IiwicHJvZHVjdG9Eb2MiLCJjcmVhdGUiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlT25lIiwiZGVsZXRlT25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/productos.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/productos.js"));
module.exports = __webpack_exports__;

})();