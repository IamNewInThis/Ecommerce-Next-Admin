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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Producto: () => (/* binding */ Producto)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductoSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    nombre: {\n        type: String,\n        required: true\n    },\n    categoria: String,\n    precio: {\n        type: Number\n    },\n    descripcion: String\n});\nconst Producto = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.producto || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"producto\", ProductoSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdG8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEO0FBRWhELE1BQU1HLGlCQUFpQixJQUFJSCw0Q0FBTUEsQ0FBQztJQUM5QkksUUFBUTtRQUFDQyxNQUFNQztRQUFRQyxVQUFVO0lBQUk7SUFDckNDLFdBQVlGO0lBQ1pHLFFBQVE7UUFBQ0osTUFBTUs7SUFBTTtJQUNyQkMsYUFBYUw7QUFFakI7QUFFTyxNQUFNTSxXQUFXViw0Q0FBTUEsQ0FBQ1csUUFBUSxJQUFJWiwrQ0FBS0EsQ0FBQyxZQUFXRSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub21icmUtZGVsLXByb3llY3RvLy4vbW9kZWxzL1Byb2R1Y3RvLmpzPzZjODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLG1vZGVsLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RvU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgICBub21icmU6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIGNhdGVnb3JpYSA6IFN0cmluZywgXHJcbiAgICBwcmVjaW86IHt0eXBlOiBOdW1iZXJ9LFxyXG4gICAgZGVzY3JpcGNpb246IFN0cmluZ1xyXG5cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdG8gPSBtb2RlbHMucHJvZHVjdG8gfHwgbW9kZWwoJ3Byb2R1Y3RvJyxQcm9kdWN0b1NjaGVtYSApIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwiUHJvZHVjdG9TY2hlbWEiLCJub21icmUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJjYXRlZ29yaWEiLCJwcmVjaW8iLCJOdW1iZXIiLCJkZXNjcmlwY2lvbiIsIlByb2R1Y3RvIiwicHJvZHVjdG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Producto.js\n");

/***/ }),

/***/ "(api)/./pages/api/productos.js":
/*!********************************!*\
  !*** ./pages/api/productos.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Producto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Producto */ \"(api)/./models/Producto.js\");\n\n\nasync function handle(req, res) {\n    const { method } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n    //GET\n    if (method === \"GET\") {\n        if (req.query?.id) {\n            res.json(await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.findOne({\n                _id: req.query.id\n            }));\n        } else {\n            res.json(await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.find());\n        }\n    }\n    //POST\n    if (method === \"POST\") {\n        const { nombre, categoria, precio, descripcion } = req.body;\n        const productoDoc = await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.create({\n            nombre,\n            categoria,\n            precio,\n            descripcion\n        });\n        res.json(productoDoc);\n    }\n    //PUT\n    if (method === \"PUT\") {\n        const { nombre, descripcion, categoria, precio, _id } = req.body;\n        await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.updateOne({\n            _id\n        }, {\n            nombre,\n            descripcion,\n            categoria,\n            precio\n        });\n        res.json(true);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdG9zLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNpRDtBQUNGO0FBRWhDLGVBQWVFLE9BQU9DLEdBQUcsRUFBRUMsR0FBRztJQUN6QyxNQUFNLEVBQUNDLE1BQU0sRUFBQyxHQUFHRjtJQUNqQixNQUFNSCw4REFBZUE7SUFFckIsS0FBSztJQUNMLElBQUdLLFdBQVcsT0FBTTtRQUNoQixJQUFHRixJQUFJRyxLQUFLLEVBQUVDLElBQUc7WUFDYkgsSUFBSUksSUFBSSxDQUFDLE1BQU1QLHNEQUFRQSxDQUFDUSxPQUFPLENBQUM7Z0JBQUNDLEtBQUlQLElBQUlHLEtBQUssQ0FBQ0MsRUFBRTtZQUFBO1FBQ3JELE9BQUs7WUFDREgsSUFBSUksSUFBSSxDQUFDLE1BQU1QLHNEQUFRQSxDQUFDVSxJQUFJO1FBQ2hDO0lBQ0o7SUFFQSxNQUFNO0lBQ04sSUFBR04sV0FBVyxRQUFPO1FBQ2pCLE1BQU0sRUFBQ08sTUFBTSxFQUFDQyxTQUFTLEVBQUNDLE1BQU0sRUFBQ0MsV0FBVyxFQUFDLEdBQUVaLElBQUlhLElBQUk7UUFDckQsTUFBTUMsY0FBYyxNQUFNaEIsc0RBQVFBLENBQUNpQixNQUFNLENBQUM7WUFDdENOO1lBQVFDO1lBQVdDO1lBQVFDO1FBQy9CO1FBQ0FYLElBQUlJLElBQUksQ0FBQ1M7SUFDYjtJQUVBLEtBQUs7SUFDTCxJQUFHWixXQUFXLE9BQU07UUFDaEIsTUFBTSxFQUFDTyxNQUFNLEVBQUVHLFdBQVcsRUFBRUYsU0FBUyxFQUFFQyxNQUFNLEVBQUVKLEdBQUcsRUFBQyxHQUFHUCxJQUFJYSxJQUFJO1FBQzlELE1BQU1mLHNEQUFRQSxDQUFDa0IsU0FBUyxDQUFDO1lBQUNUO1FBQUcsR0FBRztZQUFDRTtZQUFRRztZQUFhRjtZQUFXQztRQUFNO1FBQ3ZFVixJQUFJSSxJQUFJLENBQUM7SUFDYjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9tYnJlLWRlbC1wcm95ZWN0by8uL3BhZ2VzL2FwaS9wcm9kdWN0b3MuanM/YjIwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgbW9uZ29vc2VDb25uZWN0IH0gZnJvbSBcIkAvbGliL21vbmdvb3NlXCI7XHJcbmltcG9ydCB7UHJvZHVjdG99IGZyb20gXCIuLi8uLi9tb2RlbHMvUHJvZHVjdG9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcyl7XHJcbiAgICBjb25zdCB7bWV0aG9kfSA9IHJlcTtcclxuICAgIGF3YWl0IG1vbmdvb3NlQ29ubmVjdCgpO1xyXG4gICAgXHJcbiAgICAvL0dFVFxyXG4gICAgaWYobWV0aG9kID09PSAnR0VUJyl7XHJcbiAgICAgICAgaWYocmVxLnF1ZXJ5Py5pZCl7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKGF3YWl0IFByb2R1Y3RvLmZpbmRPbmUoe19pZDpyZXEucXVlcnkuaWR9KSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKGF3YWl0IFByb2R1Y3RvLmZpbmQoKSkgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vUE9TVFxyXG4gICAgaWYobWV0aG9kID09PSAnUE9TVCcpe1xyXG4gICAgICAgIGNvbnN0IHtub21icmUsY2F0ZWdvcmlhLHByZWNpbyxkZXNjcmlwY2lvbn09IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RvRG9jID0gYXdhaXQgUHJvZHVjdG8uY3JlYXRlKHtcclxuICAgICAgICAgICAgbm9tYnJlLCBjYXRlZ29yaWEsIHByZWNpbywgZGVzY3JpcGNpb25cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJlcy5qc29uKHByb2R1Y3RvRG9jKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9QVVRcclxuICAgIGlmKG1ldGhvZCA9PT0gJ1BVVCcpe1xyXG4gICAgICAgIGNvbnN0IHtub21icmUsIGRlc2NyaXBjaW9uLCBjYXRlZ29yaWEsIHByZWNpbywgX2lkfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGF3YWl0IFByb2R1Y3RvLnVwZGF0ZU9uZSh7X2lkfSwge25vbWJyZSwgZGVzY3JpcGNpb24sIGNhdGVnb3JpYSwgcHJlY2lvfSk7XHJcbiAgICAgICAgcmVzLmpzb24odHJ1ZSlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJtb25nb29zZUNvbm5lY3QiLCJQcm9kdWN0byIsImhhbmRsZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5IiwiaWQiLCJqc29uIiwiZmluZE9uZSIsIl9pZCIsImZpbmQiLCJub21icmUiLCJjYXRlZ29yaWEiLCJwcmVjaW8iLCJkZXNjcmlwY2lvbiIsImJvZHkiLCJwcm9kdWN0b0RvYyIsImNyZWF0ZSIsInVwZGF0ZU9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/productos.js\n");

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