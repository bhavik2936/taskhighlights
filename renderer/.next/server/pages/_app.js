(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4861:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const FireUserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
/* harmony default export */ __webpack_exports__["Z"] = (FireUserContext);

/***/ }),

/***/ 9949:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": function() { return /* binding */ fireAuth; }
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5942);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9421);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);


const config = {
  apiKey: "AIzaSyCMkUW9-pxwq8dWOt1wwWBP28IbIUv0odU",
  authDomain: "tasks-bc3f4.firebaseapp.com",
  projectId: "tasks-bc3f4",
  storageBucket: "tasks-bc3f4.appspot.com",
  messagingSenderId: "451666946585",
  appId: "1:451666946585:web:79486a55488d967cad9888",
  measurementId: "G-H66083DM1N"
};
const firebase = !(firebase_app__WEBPACK_IMPORTED_MODULE_1___default().apps.length) ? firebase_app__WEBPACK_IMPORTED_MODULE_1___default().initializeApp(config) : (firebase_app__WEBPACK_IMPORTED_MODULE_1___default());
const fireAuth = firebase.auth();


/***/ }),

/***/ 6050:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_FireUserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4861);
/* harmony import */ var _libs_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9949);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  const {
    0: fireId,
    1: setFireId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    _libs_Firebase__WEBPACK_IMPORTED_MODULE_3__/* .fireAuth.onAuthStateChanged */ .m.onAuthStateChanged(user => {
      if (!user && router.pathname.toString() !== "/sign-in" && router.pathname.toString() !== "/sign-up") {
        router.push("/sign-in");
      } else {
        setFireId(user === null || user === void 0 ? void 0 : user.uid);
      }
    });
  }, [router, fireId]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_FireUserContext__WEBPACK_IMPORTED_MODULE_2__/* .default.Provider */ .Z.Provider, {
    value: {
      fireId
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

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

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(6050));
module.exports = __webpack_exports__;

})();