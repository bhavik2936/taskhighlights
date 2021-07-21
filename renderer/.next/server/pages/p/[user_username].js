(function() {
var exports = {};
exports.id = 946;
exports.ids = [946];
exports.modules = {

/***/ 2954:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserProfile; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1704);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8579);
/* harmony import */ var _components_layout_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3485);







function UserProfile({
  user: profileUser
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_index__WEBPACK_IMPORTED_MODULE_4__/* .Layout */ .A, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: `${profileUser === null || profileUser === void 0 ? void 0 : profileUser.user_fullname} (${profileUser === null || profileUser === void 0 ? void 0 : profileUser.user_username})`
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:image",
        content: profileUser === null || profileUser === void 0 ? void 0 : profileUser.user_avatar
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__.SkeletonTheme, {
      color: "#0F172A",
      highlightColor: "#1E293B",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex-1 flex justify-center mt-5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "flex items-center space-x-3",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative w-28 h-28",
            children: profileUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__.default, {
              src: profileUser.user_avatar,
              alt: "user-avatar",
              layout: "fill"
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default()), {
              circle: true,
              height: 44,
              width: 44
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: profileUser ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-4xl",
                children: profileUser.user_username
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "flex justify-center space-x-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                  children: [profileUser.user_followers.length, " Followers"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                  children: [profileUser.user_following.length, " Following"]
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: profileUser.user_fullname
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: profileUser.user_bio
              })]
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default()), {
              count: 10,
              height: 20
            })
          })]
        })
      })
    })]
  });
}
const getServerSideProps = async context => {
  var _context$query$user_u;

  const reqUsername = (_context$query$user_u = context.query.user_username) === null || _context$query$user_u === void 0 ? void 0 : _context$query$user_u.toString();

  if (reqUsername !== undefined) {
    const getUserByUsername = async (user_username) => {
      const data = await fetch( // process.env.NODE_ENV === "development"
      // ? `http://localhost:3000/api/v1/user?user_username=${user_username}`
      `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"}/api/v1/user?user_username=${user_username}`);
      return data;
    };

    const fetchedUser = await getUserByUsername(reqUsername);

    if (fetchedUser.status !== 501) {
      const user = await fetchedUser.json();
      return {
        props: {
          user
        }
      }; // } else {
      // return {
      // redirect: {
      // destination: "/404",
      // permanent: false
      // }
      // };
    }
  }
};

/***/ }),

/***/ 9421:
/***/ (function(module) {

"use strict";
module.exports = require("firebase/app");;

/***/ }),

/***/ 5942:
/***/ (function(module) {

"use strict";
module.exports = require("firebase/auth");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 6786:
/***/ (function(module) {

"use strict";
module.exports = require("node-fetch");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 1704:
/***/ (function(module) {

"use strict";
module.exports = require("react-loading-skeleton");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [103,537,176], function() { return __webpack_exec__(2954); });
module.exports = __webpack_exports__;

})();