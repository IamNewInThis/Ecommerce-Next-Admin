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
exports.id = "pages/api/categoria";
exports.ids = ["pages/api/categoria"];
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

/***/ "(api)/./models/Categoria.js":
/*!*****************************!*\
  !*** ./models/Categoria.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Categoria: () => (/* binding */ Categoria)\n/* harmony export */ });\nconst { Schema, models, model, default: mongoose } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst CategoriaSchema = new Schema({\n    nombre: {\n        type: String,\n        required: true\n    },\n    parent: {\n        type: mongoose.Types.ObjectId,\n        ref: \"Categoria\"\n    }\n});\nconst Categoria = models?.Categoria || model(\"Categoria\", CategoriaSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQ2F0ZWdvcmlhLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLEVBQUVBLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFNBQVNDLFFBQVEsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQywwQkFBVTtBQUV2RSxNQUFNQyxrQkFBa0IsSUFBSU4sT0FBTztJQUMvQk8sUUFBTztRQUFDQyxNQUFLQztRQUFRQyxVQUFVO0lBQUk7SUFDbkNDLFFBQU87UUFBQ0gsTUFBS0osU0FBU1EsS0FBSyxDQUFDQyxRQUFRO1FBQUVDLEtBQUk7SUFBVztBQUV6RDtBQUVPLE1BQU1DLFlBQVlkLFFBQVFjLGFBQWFiLE1BQU0sYUFBWUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9tYnJlLWRlbC1wcm95ZWN0by8uL21vZGVscy9DYXRlZ29yaWEuanM/NjMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFNjaGVtYSwgbW9kZWxzLCBtb2RlbCwgZGVmYXVsdDogbW9uZ29vc2UgfSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuXHJcbmNvbnN0IENhdGVnb3JpYVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgbm9tYnJlOnt0eXBlOlN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgcGFyZW50Ont0eXBlOm1vbmdvb3NlLlR5cGVzLk9iamVjdElkLCByZWY6J0NhdGVnb3JpYSd9LFxyXG4gICAgXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3JpYSA9IG1vZGVscz8uQ2F0ZWdvcmlhIHx8IG1vZGVsKCdDYXRlZ29yaWEnLENhdGVnb3JpYVNjaGVtYSk7Il0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVscyIsIm1vZGVsIiwiZGVmYXVsdCIsIm1vbmdvb3NlIiwicmVxdWlyZSIsIkNhdGVnb3JpYVNjaGVtYSIsIm5vbWJyZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInBhcmVudCIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJDYXRlZ29yaWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Categoria.js\n");

/***/ }),

/***/ "(api)/./pages/api/categoria.js":
/*!********************************!*\
  !*** ./pages/api/categoria.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Categoria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Categoria */ \"(api)/./models/Categoria.js\");\n\n\nasync function handle(req, res) {\n    const { method } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n    if (method === \"GET\") {\n        res.json(await _models_Categoria__WEBPACK_IMPORTED_MODULE_1__.Categoria.find().populate(\"parent\"));\n    }\n    if (method === \"POST\") {\n        const { nombre, parentCategoria } = req.body;\n        const categoriaDoc = await _models_Categoria__WEBPACK_IMPORTED_MODULE_1__.Categoria.create({\n            nombre\n        });\n        res.json(categoriaDoc);\n    }\n    if (method === \"PUT\") {\n        const { nombre, parentCategoria, _id } = req.body;\n        const categoriaDoc = await _models_Categoria__WEBPACK_IMPORTED_MODULE_1__.Categoria.updateOne({\n            _id\n        }, {\n            nombre\n        });\n        res.json(categoriaDoc);\n    }\n    if (method === \"DELETE\") {\n        const { _id } = req.query;\n        await _models_Categoria__WEBPACK_IMPORTED_MODULE_1__.Categoria.deleteOne({\n            _id\n        });\n        res.json(\"ok\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmlhLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUNGO0FBRWhDLGVBQWVFLE9BQU9DLEdBQUcsRUFBQ0MsR0FBRztJQUN4QyxNQUFNLEVBQUNDLE1BQU0sRUFBQyxHQUFHRjtJQUNqQixNQUFNSCw4REFBZUE7SUFFckIsSUFBR0ssV0FBVyxPQUFNO1FBQ2hCRCxJQUFJRSxJQUFJLENBQUMsTUFBTUwsd0RBQVNBLENBQUNNLElBQUksR0FBR0MsUUFBUSxDQUFDO0lBQzdDO0lBRUEsSUFBR0gsV0FBVyxRQUFPO1FBQ2pCLE1BQU0sRUFBQ0ksTUFBTSxFQUFDQyxlQUFlLEVBQUMsR0FBR1AsSUFBSVEsSUFBSTtRQUN6QyxNQUFNQyxlQUFlLE1BQU1YLHdEQUFTQSxDQUFDWSxNQUFNLENBQUM7WUFBQ0o7UUFBTTtRQUNuREwsSUFBSUUsSUFBSSxDQUFDTTtJQUNiO0lBRUEsSUFBR1AsV0FBVyxPQUFNO1FBQ2hCLE1BQU0sRUFBQ0ksTUFBTSxFQUFDQyxlQUFlLEVBQUNJLEdBQUcsRUFBQyxHQUFHWCxJQUFJUSxJQUFJO1FBQzdDLE1BQU1DLGVBQWUsTUFBTVgsd0RBQVNBLENBQUNjLFNBQVMsQ0FBQztZQUFDRDtRQUFHLEdBQUU7WUFBQ0w7UUFBTTtRQUM1REwsSUFBSUUsSUFBSSxDQUFDTTtJQUNiO0lBRUEsSUFBR1AsV0FBVyxVQUFTO1FBQ25CLE1BQU0sRUFBQ1MsR0FBRyxFQUFDLEdBQUdYLElBQUlhLEtBQUs7UUFDdkIsTUFBTWYsd0RBQVNBLENBQUNnQixTQUFTLENBQUM7WUFBQ0g7UUFBRztRQUM5QlYsSUFBSUUsSUFBSSxDQUFDO0lBQ2I7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL25vbWJyZS1kZWwtcHJveWVjdG8vLi9wYWdlcy9hcGkvY2F0ZWdvcmlhLmpzPzZlYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9uZ29vc2VDb25uZWN0IH0gZnJvbSBcIkAvbGliL21vbmdvb3NlXCI7XHJcbmltcG9ydCB7IENhdGVnb3JpYSB9IGZyb20gXCJAL21vZGVscy9DYXRlZ29yaWFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEscmVzKXtcclxuICAgIGNvbnN0IHttZXRob2R9ID0gcmVxO1xyXG4gICAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7ICBcclxuXHJcbiAgICBpZihtZXRob2QgPT09ICdHRVQnKXtcclxuICAgICAgICByZXMuanNvbihhd2FpdCBDYXRlZ29yaWEuZmluZCgpLnBvcHVsYXRlKCdwYXJlbnQnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYobWV0aG9kID09PSAnUE9TVCcpe1xyXG4gICAgICAgIGNvbnN0IHtub21icmUscGFyZW50Q2F0ZWdvcmlhfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpYURvYyA9IGF3YWl0IENhdGVnb3JpYS5jcmVhdGUoe25vbWJyZX0pO1xyXG4gICAgICAgIHJlcy5qc29uKGNhdGVnb3JpYURvYyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYobWV0aG9kID09PSAnUFVUJyl7XHJcbiAgICAgICAgY29uc3Qge25vbWJyZSxwYXJlbnRDYXRlZ29yaWEsX2lkfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpYURvYyA9IGF3YWl0IENhdGVnb3JpYS51cGRhdGVPbmUoe19pZH0se25vbWJyZX0pO1xyXG4gICAgICAgIHJlcy5qc29uKGNhdGVnb3JpYURvYyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYobWV0aG9kID09PSAnREVMRVRFJyl7XHJcbiAgICAgICAgY29uc3Qge19pZH0gPSByZXEucXVlcnk7XHJcbiAgICAgICAgYXdhaXQgQ2F0ZWdvcmlhLmRlbGV0ZU9uZSh7X2lkfSk7XHJcbiAgICAgICAgcmVzLmpzb24oJ29rJyk7XHJcbiAgICB9XHJcblxyXG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlQ29ubmVjdCIsIkNhdGVnb3JpYSIsImhhbmRsZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImpzb24iLCJmaW5kIiwicG9wdWxhdGUiLCJub21icmUiLCJwYXJlbnRDYXRlZ29yaWEiLCJib2R5IiwiY2F0ZWdvcmlhRG9jIiwiY3JlYXRlIiwiX2lkIiwidXBkYXRlT25lIiwicXVlcnkiLCJkZWxldGVPbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/categoria.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/categoria.js"));
module.exports = __webpack_exports__;

})();