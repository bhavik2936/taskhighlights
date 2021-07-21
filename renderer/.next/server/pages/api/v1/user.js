(function() {
var exports = {};
exports.id = 34;
exports.ids = [34];
exports.modules = {

/***/ 6550:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1927);


async function handler(req, // eslint-disable-next-line @typescript-eslint/no-explicit-any
res) {
  const method = req.method;
  const {
    user_id,
    user_username
  } = req.query;

  if (method === "GET") {
    if (user_id) {
      const requested_user = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__/* .prisma_getUserByUserid */ .kf)(user_id);
      res.status(200).json(requested_user);
    } else if (user_username) {
      const requested_user = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__/* .prisma_getUserByUsername */ .Yk)(user_username);

      if (requested_user !== null) {
        res.status(200).json(requested_user);
      } else {
        res.status(501).json(null);
      }
    }
  } else if (method === "POST") {
    try {
      const body = req.body;
      const createdUser = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__/* .prisma_createUser */ .v_)(body);
      res.status(201).json(createdUser);
    } catch (e) {
      if (e instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
        res.status(409).json(e.message);
      }
    }
  } else if (method === "DELETE") {
    if (user_id) {
      const deletedUser = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__/* .prisma_deleteUserbyuserid */ .T)(user_id);
      res.status(200).json(deletedUser);
    } else if (user_username) {
      const deletedUser = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__/* .prisma_deleteUserbyusername */ .dZ)(user_username);
      res.status(200).json(deletedUser);
    }
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
var __webpack_exports__ = __webpack_require__.X(0, [927], function() { return __webpack_exec__(6550); });
module.exports = __webpack_exports__;

})();