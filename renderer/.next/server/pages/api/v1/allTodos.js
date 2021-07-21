(function() {
var exports = {};
exports.id = 13;
exports.ids = [13];
exports.modules = {

/***/ 8937:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var _utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1927);

async function handler(req, // eslint-disable-next-line @typescript-eslint/no-explicit-any
res) {
  const method = req.method;
  const {
    page_id,
    user_id
  } = req.query;

  if (method === "GET") {
    const todos = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_0__/* .prisma_getAllTodosByPage */ .SU)(page_id, user_id);
    res.status(200).json(todos);
  }
}

/***/ }),

/***/ 212:
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [927], function() { return __webpack_exec__(8937); });
module.exports = __webpack_exports__;

})();