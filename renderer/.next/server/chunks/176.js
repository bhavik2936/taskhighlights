exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 3485:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": function() { return /* binding */ Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./contexts/FireUserContext.tsx
var FireUserContext = __webpack_require__(4861);
// EXTERNAL MODULE: ../node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(3368);
// EXTERNAL MODULE: external "react-loading-skeleton"
var external_react_loading_skeleton_ = __webpack_require__(1704);
var external_react_loading_skeleton_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_skeleton_);
// EXTERNAL MODULE: ../node_modules/next/image.js
var next_image = __webpack_require__(8579);
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__(9894);
// EXTERNAL MODULE: ./contexts/UserContext.tsx
var UserContext = __webpack_require__(8486);
// EXTERNAL MODULE: ./libs/Firebase.ts
var Firebase = __webpack_require__(9949);
;// CONCATENATED MODULE: ./components/layout/Header.tsx








 // !Stories Limit 5 including own

const Header = () => {
  const currentUser = (0,external_react_.useContext)(UserContext/* default */.Z);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-1 flex-row py-3 items-center justify-evenly px-4 sm:space-x-40 md:space-x-60",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          title: "Home",
          "aria-label": "Home",
          className: "flex items-center",
          children: /*#__PURE__*/jsx_runtime_.jsx(esm/* HomeIcon */.tvw, {
            className: "w-7 h-7"
          })
        })
      })
    }), currentUser !== null && currentUser !== void 0 && currentUser.user_avatar ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex -space-x-1 overflow-hidden",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "relative inline-block h-12 w-12 rounded-full ring-2 ring-theme-blueGray-900",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/p/${currentUser.user_username}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              alt: "user-avatar",
              src: currentUser.user_avatar,
              layout: "fill"
            })
          })
        })
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx(external_react_loading_skeleton_.SkeletonTheme, {
      color: "#0F172A",
      highlightColor: "#1E293B",
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_loading_skeleton_default()), {
        circle: true,
        height: 44,
        width: 44
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        "aria-label": "Sign out",
        className: "flex items-center",
        title: "Sign out",
        onClick: () => Firebase/* fireAuth.signOut */.m.signOut(),
        children: /*#__PURE__*/jsx_runtime_.jsx(esm/* LogoutIcon */.R0g, {
          className: "w-7 h-7"
        })
      })
    })]
  });
};
// EXTERNAL MODULE: ./utils/fetchHelpers.ts + 1 modules
var fetchHelpers = __webpack_require__(2465);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/layout/index.tsx








const Layout = ({
  children
}) => {
  const {
    fireId
  } = (0,external_react_.useContext)(FireUserContext/* default */.Z);
  const {
    0: currentUser,
    1: setCurrentUser
  } = (0,external_react_.useState)(null);
  const {
    0: displayHeader,
    1: setDisplayHeader
  } = (0,external_react_.useState)(true);
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    setDisplayHeader(router.pathname.toString() !== "/sign-up" && router.pathname.toString() !== "/sign-in");
  }, [router.pathname]);
  (0,external_react_.useEffect)(() => {
    (async () => {
      const user = await (0,fetchHelpers/* fetch_getUserByUserid */.kv)(fireId);

      if (JSON.stringify(currentUser) !== JSON.stringify(user)) {
        setCurrentUser(user);
      }
    })();
  }, [fireId, currentUser]);
  return /*#__PURE__*/jsx_runtime_.jsx(UserContext/* default.Provider */.Z.Provider, {
    value: currentUser,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "bg-theme-blueGray-900 min-h-screen flex flex-col text-theme-blueGray-400 selection:bg-theme-blueGray-800 selection:text-theme-blueGray-400",
      children: [displayHeader && /*#__PURE__*/jsx_runtime_.jsx("header", {
        className: "flex justify-center",
        children: /*#__PURE__*/jsx_runtime_.jsx(Header, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("main", {
        className: `flex-1 ${displayHeader && "border-t-2"} border-theme-primary-500 ${!displayHeader && "flex justify-center items-center"}`,
        children: children
      })]
    })
  });
};

/***/ }),

/***/ 4861:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const FireUserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
/* harmony default export */ __webpack_exports__["Z"] = (FireUserContext);

/***/ }),

/***/ 8486:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
/* harmony default export */ __webpack_exports__["Z"] = (UserContext);

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

/***/ 2465:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_T": function() { return /* binding */ fetch_addTodoToStory; },
  "Wt": function() { return /* binding */ fetch_createRetDailyPage; },
  "c2": function() { return /* binding */ fetch_createTodo; },
  "oF": function() { return /* binding */ fetch_createUser; },
  "NW": function() { return /* binding */ fetch_deleteTodo; },
  "kv": function() { return /* binding */ fetch_getUserByUserid; },
  "Ut": function() { return /* binding */ fetch_removeTodoFromStory; },
  "G8": function() { return /* binding */ fetch_toggleArchived; },
  "pk": function() { return /* binding */ fetch_toggleTodoDone; },
  "Oo": function() { return /* binding */ fetch_updateTodoDescription; }
});

// UNUSED EXPORTS: fetch_getAllTodosByPage, fetch_getStoryByStoryId, fetch_getUserByUsername

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(6786);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);
;// CONCATENATED MODULE: ./constants/Routes.ts
const TODAY = "/today";
const SIGN_IN = "/sign-in";
const SIGN_UP = "/sign-up";
const PROFILE = "/p/:username";
const COMPLETED = "/completed";
const ARCHIVED = "/archived";
const NOT_FOUND = "/404";
const Routes_API_V1 = "/api/v1/";
;// CONCATENATED MODULE: ./utils/fetchHelpers.ts


const fetch_getUserByUserid = async (user_id) => {
  const data = await external_node_fetch_default()(`${Routes_API_V1}user?user_id=${user_id}`);
  return data.json();
};
const fetch_getUserByUsername = async (user_username) => {
  const data = await fetch(`${API_V1}user?user_username=${user_username}`);
  return data;
};
const fetch_createUser = async (body) => {
  if (body) {
    const data = await external_node_fetch_default()(`${Routes_API_V1}user`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return data.json();
  }
};
const fetch_createRetDailyPage = async (user_id, today) => {
  const data = await external_node_fetch_default()(`${Routes_API_V1}page?page_user_id=${user_id}&today=${today}`);
  return data.json();
};
const fetch_createTodo = async (body) => {
  if (body) {
    const data = await external_node_fetch_default()(`${Routes_API_V1}todo`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return data.json();
  }
};
const fetch_getAllTodosByPage = async (page_id, user_id) => {
  const data = await fetch(`${API_V1}allTodos?page_id=${page_id}&user_id=${user_id}`);
  return data.json();
};
const fetch_toggleTodoDone = async ({
  todo_id,
  todo_done
}) => {
  const data = await external_node_fetch_default()(`${Routes_API_V1}todo`, {
    method: "POST",
    body: JSON.stringify({
      task: "toggleState",
      todo_id,
      todo_done: !todo_done
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return data.json();
};
const fetch_updateTodoDescription = async ({
  todo_id,
  todo_description
}) => {
  if (todo_id && todo_description) {
    const data = await external_node_fetch_default()(`${Routes_API_V1}todo`, {
      method: "POST",
      body: JSON.stringify({
        task: "updateDescription",
        todo_id,
        todo_description
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return data.json();
  }
};
const fetch_deleteTodo = async (todo_id) => {
  if (todo_id) {
    const data = await external_node_fetch_default()(`${Routes_API_V1}todo?todo_id=${todo_id}`, {
      method: "DELETE"
    });
    return data.json();
  }
};
const fetch_toggleArchived = async ({
  todo_id,
  todo_archived
}) => {
  const data = await external_node_fetch_default()(`${Routes_API_V1}todo`, {
    method: "POST",
    body: JSON.stringify({
      task: "toggleArchive",
      todo_id,
      todo_archived
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return data.json();
};
const fetch_getStoryByStoryId = async (story_id) => {
  const data = await fetch(`${API_V1}story?story_id=${story_id}`);
  return data.json();
};
const fetch_addTodoToStory = async ({
  story_id,
  todo_id
}) => {
  const data = await external_node_fetch_default()(`${Routes_API_V1}story`, {
    method: "POST",
    body: JSON.stringify({
      todo_id,
      story_id,
      task: "add"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return data.json();
};
const fetch_removeTodoFromStory = async ({
  story_id,
  todo_id
}) => {
  const data = await external_node_fetch_default()(`${Routes_API_V1}story`, {
    method: "POST",
    body: JSON.stringify({
      todo_id,
      story_id,
      task: "remove"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return data.json();
};

/***/ }),

/***/ 5576:
/***/ (function() {

/* (ignored) */

/***/ })

};
;