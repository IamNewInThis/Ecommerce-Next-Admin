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
exports.id = "pages/api/marca";
exports.ids = ["pages/api/marca"];
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

/***/ "(api)/./models/Marca.js":
/*!*************************!*\
  !*** ./models/Marca.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Marca: () => (/* binding */ Marca)\n/* harmony export */ });\nconst { Schema, models, model, default: mongoose } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst MarcaSchema = new Schema({\n    nombre: {\n        type: String,\n        required: true\n    }\n});\nconst Marca = models?.Marca || model(\"Marca\", MarcaSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvTWFyY2EuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sRUFBRUEsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsU0FBU0MsUUFBUSxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLDBCQUFVO0FBRXZFLE1BQU1DLGNBQWMsSUFBSU4sT0FBTztJQUMzQk8sUUFBTztRQUFDQyxNQUFLQztRQUFRQyxVQUFVO0lBQUk7QUFFdkM7QUFFTyxNQUFNQyxRQUFRVixRQUFRVSxTQUFTVCxNQUFNLFNBQVFJLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub21icmUtZGVsLXByb3llY3RvLy4vbW9kZWxzL01hcmNhLmpzPzZmY2YiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBTY2hlbWEsIG1vZGVscywgbW9kZWwsIGRlZmF1bHQ6IG1vbmdvb3NlIH0gPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcblxyXG5jb25zdCBNYXJjYVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgbm9tYnJlOnt0eXBlOlN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hcmNhID0gbW9kZWxzPy5NYXJjYSB8fCBtb2RlbCgnTWFyY2EnLE1hcmNhU2NoZW1hKTsiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWxzIiwibW9kZWwiLCJkZWZhdWx0IiwibW9uZ29vc2UiLCJyZXF1aXJlIiwiTWFyY2FTY2hlbWEiLCJub21icmUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJNYXJjYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Marca.js\n");

/***/ }),

/***/ "(api)/./pages/api/marca.js":
/*!****************************!*\
  !*** ./pages/api/marca.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Marca__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Marca */ \"(api)/./models/Marca.js\");\n\n\nasync function handle(req, res) {\n    const { method } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n    if (method === \"GET\") {\n        res.json(await _models_Marca__WEBPACK_IMPORTED_MODULE_1__.Marca.find());\n    }\n    if (method === \"POST\") {\n        const { nombre } = req.body;\n        const marcaDoc = await _models_Marca__WEBPACK_IMPORTED_MODULE_1__.Marca.create({\n            nombre\n        });\n        res.json(marcaDoc);\n    }\n    if (method === \"PUT\") {\n        const { nombre, _id } = req.body;\n        const marcaDoc = await _models_Marca__WEBPACK_IMPORTED_MODULE_1__.Marca.updateOne({\n            _id\n        }, {\n            nombre\n        });\n        res.json(marcaDoc);\n    }\n    if (method === \"DELETE\") {\n        const { _id } = req.query;\n        await _models_Marca__WEBPACK_IMPORTED_MODULE_1__.Marca.deleteOne({\n            _id\n        });\n        res.json(\"ok\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFyY2EuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBQ1Y7QUFFeEIsZUFBZUUsT0FBT0MsR0FBRyxFQUFDQyxHQUFHO0lBQ3hDLE1BQU0sRUFBQ0MsTUFBTSxFQUFDLEdBQUdGO0lBQ2pCLE1BQU1ILDhEQUFlQTtJQUVyQixJQUFHSyxXQUFXLE9BQU07UUFDaEJELElBQUlFLElBQUksQ0FBQyxNQUFNTCxnREFBS0EsQ0FBQ00sSUFBSTtJQUM3QjtJQUVBLElBQUdGLFdBQVcsUUFBTztRQUNqQixNQUFNLEVBQUNHLE1BQU0sRUFBQyxHQUFHTCxJQUFJTSxJQUFJO1FBQ3pCLE1BQU1DLFdBQVcsTUFBTVQsZ0RBQUtBLENBQUNVLE1BQU0sQ0FBQztZQUFDSDtRQUFNO1FBQzNDSixJQUFJRSxJQUFJLENBQUNJO0lBQ2I7SUFFQSxJQUFHTCxXQUFXLE9BQU07UUFDaEIsTUFBTSxFQUFDRyxNQUFNLEVBQUNJLEdBQUcsRUFBQyxHQUFHVCxJQUFJTSxJQUFJO1FBQzdCLE1BQU1DLFdBQVcsTUFBTVQsZ0RBQUtBLENBQUNZLFNBQVMsQ0FBQztZQUFDRDtRQUFHLEdBQUU7WUFBQ0o7UUFBTTtRQUNwREosSUFBSUUsSUFBSSxDQUFDSTtJQUNiO0lBRUEsSUFBR0wsV0FBVyxVQUFTO1FBQ25CLE1BQU0sRUFBQ08sR0FBRyxFQUFDLEdBQUdULElBQUlXLEtBQUs7UUFDdkIsTUFBTWIsZ0RBQUtBLENBQUNjLFNBQVMsQ0FBQztZQUFDSDtRQUFHO1FBQzFCUixJQUFJRSxJQUFJLENBQUM7SUFDYjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9tYnJlLWRlbC1wcm95ZWN0by8uL3BhZ2VzL2FwaS9tYXJjYS5qcz8yM2ExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vbmdvb3NlQ29ubmVjdCB9IGZyb20gXCJAL2xpYi9tb25nb29zZVwiO1xyXG5pbXBvcnQgeyBNYXJjYSB9IGZyb20gXCJAL21vZGVscy9NYXJjYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSxyZXMpe1xyXG4gICAgY29uc3Qge21ldGhvZH0gPSByZXE7XHJcbiAgICBhd2FpdCBtb25nb29zZUNvbm5lY3QoKTsgIFxyXG5cclxuICAgIGlmKG1ldGhvZCA9PT0gJ0dFVCcpe1xyXG4gICAgICAgIHJlcy5qc29uKGF3YWl0IE1hcmNhLmZpbmQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYobWV0aG9kID09PSAnUE9TVCcpe1xyXG4gICAgICAgIGNvbnN0IHtub21icmV9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgY29uc3QgbWFyY2FEb2MgPSBhd2FpdCBNYXJjYS5jcmVhdGUoe25vbWJyZX0pO1xyXG4gICAgICAgIHJlcy5qc29uKG1hcmNhRG9jKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihtZXRob2QgPT09ICdQVVQnKXtcclxuICAgICAgICBjb25zdCB7bm9tYnJlLF9pZH0gPSByZXEuYm9keTtcclxuICAgICAgICBjb25zdCBtYXJjYURvYyA9IGF3YWl0IE1hcmNhLnVwZGF0ZU9uZSh7X2lkfSx7bm9tYnJlfSk7XHJcbiAgICAgICAgcmVzLmpzb24obWFyY2FEb2MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG1ldGhvZCA9PT0gJ0RFTEVURScpe1xyXG4gICAgICAgIGNvbnN0IHtfaWR9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgICAgIGF3YWl0IE1hcmNhLmRlbGV0ZU9uZSh7X2lkfSk7XHJcbiAgICAgICAgcmVzLmpzb24oJ29rJyk7XHJcbiAgICB9XHJcblxyXG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlQ29ubmVjdCIsIk1hcmNhIiwiaGFuZGxlIiwicmVxIiwicmVzIiwibWV0aG9kIiwianNvbiIsImZpbmQiLCJub21icmUiLCJib2R5IiwibWFyY2FEb2MiLCJjcmVhdGUiLCJfaWQiLCJ1cGRhdGVPbmUiLCJxdWVyeSIsImRlbGV0ZU9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/marca.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/marca.js"));
module.exports = __webpack_exports__;

})();