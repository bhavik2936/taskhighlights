(function() {
var exports = {};
exports.id = 354;
exports.ids = [354];
exports.modules = {

/***/ 2913:
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
    page_id,
    page_title,
    page_user_id,
    today
  } = req.query;

  if (method === "GET") {
    if (page_id) {
      const page = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__/* .prisma_getPageByPageid */ .tL)(page_id);
      res.status(200).json(page);
    } else if (page_title) {
      const page = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__/* .prisma_getPageByPageTitle */ .i5)(page_title, page_user_id);
      res.status(200).json(page);
    } else {
      if (typeof page_user_id === "string") {
        const page = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__/* .prisma_createRetDailyPage */ .Th)(page_user_id, today);
        res.status(200).json(page);
      }
    }
  } else if (method === "POST") {
    try {
      const body = req.body;
      const createdPage = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__/* .prisma_createPage */ .uT)(body);
      res.status(201).json(createdPage);
    } catch (e) {
      if (e instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
        res.status(409).json(e.message);
      }
    }
  } else if (method === "DELETE") {
    if (page_id) {
      const deletedPage = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__/* .prisma_deletePageByPageid */ .zA)(page_id);
      res.status(200).json(deletedPage);
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
var __webpack_exports__ = __webpack_require__.X(0, [927], function() { return __webpack_exec__(2913); });
module.exports = __webpack_exports__;

})();