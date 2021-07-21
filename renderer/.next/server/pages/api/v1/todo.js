(function() {
var exports = {};
exports.id = 253;
exports.ids = [253];
exports.modules = {

/***/ 1608:
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
    todo_id
  } = req.query;
  const body = req.body;

  if (method === "GET") {
    const todo = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_0__/* .prisma_getTodobyTodoId */ .lp)(todo_id);
    res.status(200).json(todo);
  } else if (method === "POST") {
    if (body.task === "toggleState") {
      const todo = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_0__/* .prisma_toggleTodoDone */ .Fz)(body);
      res.status(201).json(todo);
    } else if (body.task === "updateDescription") {
      const todo = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_0__/* .prisma_updateTodoDescription */ .jL)(body);
      res.status(201).json(todo);
    } else if (body.task === "toggleArchive") {
      const todo = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_0__/* .prisma_toggleArchived */ .fX)(body);
      res.status(201).json(todo);
    } else if (body.task === "create") {
      const todo = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_0__/* .prisma_createTodo */ .q4)(body);
      res.status(201).json(todo);
    }
  } else if (method === "DELETE") {
    const deletedTodo = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_0__/* .prisma_deleteTodo */ .Fp)(todo_id);
    res.status(200).json(deletedTodo);
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
var __webpack_exports__ = __webpack_require__.X(0, [927], function() { return __webpack_exec__(1608); });
module.exports = __webpack_exports__;

})();