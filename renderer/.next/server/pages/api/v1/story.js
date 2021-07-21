(function() {
var exports = {};
exports.id = 438;
exports.ids = [438];
exports.modules = {

/***/ 4586:
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
    story_id,
    story_title,
    story_user_id,
    page_id,
    today
  } = req.query;

  if (method === "GET") {
    if (story_id) {
      const story = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__/* .prisma_getStoryByStoryId */ .dP)(story_id);
      res.status(200).json(story);
    } else if (story_title) {
      const story = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__/* .prisma_getStoryByStoryTitle */ .YZ)(story_title, story_user_id);
      res.status(200).json(story);
    } else {
      if (typeof story_user_id === "string") {
        const story = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__/* .prisma_createUpdateStory */ .Rf)({
          story_user_id,
          today,
          page_id
        });
        res.status(200).json(story);
      }
    }
  } else if (method === "POST") {
    try {
      const body = req.body;

      if (body.task === "add") {
        const story = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__/* .prisma_addTodoToStory */ .jX)(body);
        res.status(201).json(story);
      } else if (body.task === "remove") {
        const story = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__/* .prisma_removeTodoFromStory */ .FS)(body);
        res.status(201).json(story);
      } else {
        res.status(501).json({
          Error: "bad req"
        });
      }
    } catch (e) {
      if (e instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
        res.status(409).json(e.message);
      }
    }
  } else if (method === "DELETE") {
    if (story_id) {
      const deletedPage = await (0,_utils_prismaHelpers__WEBPACK_IMPORTED_MODULE_1__/* .prisma_deleteStoryByStoryid */ .E2)(story_id);
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
var __webpack_exports__ = __webpack_require__.X(0, [927], function() { return __webpack_exec__(4586); });
module.exports = __webpack_exports__;

})();