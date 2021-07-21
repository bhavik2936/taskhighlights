exports.id = 927;
exports.ids = [927];
exports.modules = {

/***/ 1927:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "jX": function() { return /* binding */ prisma_addTodoToStory; },
  "uT": function() { return /* binding */ prisma_createPage; },
  "Th": function() { return /* binding */ prisma_createRetDailyPage; },
  "q4": function() { return /* binding */ prisma_createTodo; },
  "Rf": function() { return /* binding */ prisma_createUpdateStory; },
  "v_": function() { return /* binding */ prisma_createUser; },
  "H0": function() { return /* binding */ prisma_deleteAllPagesByUserid; },
  "zA": function() { return /* binding */ prisma_deletePageByPageid; },
  "E2": function() { return /* binding */ prisma_deleteStoryByStoryid; },
  "Fp": function() { return /* binding */ prisma_deleteTodo; },
  "T": function() { return /* binding */ prisma_deleteUserbyuserid; },
  "dZ": function() { return /* binding */ prisma_deleteUserbyusername; },
  "pT": function() { return /* binding */ prisma_getAllPagesByUserid; },
  "SU": function() { return /* binding */ prisma_getAllTodosByPage; },
  "i5": function() { return /* binding */ prisma_getPageByPageTitle; },
  "tL": function() { return /* binding */ prisma_getPageByPageid; },
  "dP": function() { return /* binding */ prisma_getStoryByStoryId; },
  "YZ": function() { return /* binding */ prisma_getStoryByStoryTitle; },
  "lp": function() { return /* binding */ prisma_getTodobyTodoId; },
  "kf": function() { return /* binding */ prisma_getUserByUserid; },
  "Yk": function() { return /* binding */ prisma_getUserByUsername; },
  "FS": function() { return /* binding */ prisma_removeTodoFromStory; },
  "fX": function() { return /* binding */ prisma_toggleArchived; },
  "Fz": function() { return /* binding */ prisma_toggleTodoDone; },
  "jL": function() { return /* binding */ prisma_updateTodoDescription; }
});

// UNUSED EXPORTS: prisma_deletePageByPageTitle, prisma_deleteStoryByStoryTitle

;// CONCATENATED MODULE: ./constants/Types.ts
/*
  User Model Types
*/

/*
  Page Model Types
*/

/*
  Todo Model Types
*/

/*
  Story Model Types
*/

/*
  Fetch Request Task Types
*/

/*
  Fetch Request Types
*/

/*
  Useful_Todo include object
*/
const Useful_Todo_Include_Object = {
  todo_description: true,
  todo_done: true,
  todo_id: true,
  todo_story_id: true,
  todo_highlight: true,
  todo_archived: true,
  Todo_Page: false,
  Todo_User: false,
  todo_datecreated: false,
  todo_page_id: false,
  todo_user_id: false
};
/*
  stateReload function type
*/
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(212);
;// CONCATENATED MODULE: ./utils/prismaHelpers.ts


const prisma = new client_.PrismaClient();
const prisma_getUserByUsername = async (user_username) => {
  const user = await prisma.user.findUnique({
    where: {
      user_username
    }
  });
  return user;
};
const prisma_getUserByUserid = async (user_id) => {
  const user = await prisma.user.findUnique({
    where: {
      user_id
    }
  });
  return user;
};
const prisma_createUser = async ({
  user_avatar,
  user_email,
  user_fullname,
  user_id,
  user_username
}) => {
  const createdUser = await prisma.user.create({
    data: {
      user_avatar,
      user_email,
      user_fullname,
      user_id,
      user_username
    }
  });
  return createdUser;
};
const prisma_deleteUserbyuserid = async (user_id) => {
  const deletedUser = await prisma.user.delete({
    where: {
      user_id
    }
  });
  return deletedUser;
};
const prisma_deleteUserbyusername = async (user_username) => {
  const deletedUser = await prisma.user.delete({
    where: {
      user_username
    }
  });
  return deletedUser;
};
const prisma_getPageByPageid = async (page_id) => {
  const page = await prisma.page.findUnique({
    where: {
      page_id
    }
  });
  return page;
};
const prisma_getPageByPageTitle = async (page_title, user_id) => {
  const page = await prisma.page.findUnique({
    where: {
      user_title_unique: {
        page_title,
        page_user_id: user_id
      }
    }
  });
  return page;
};
const prisma_createPage = async ({
  page_title,
  user_id
}) => {
  const createdPage = await prisma.page.create({
    data: {
      page_title,
      Page_User: {
        connect: {
          user_id
        }
      },
      Page_Story: {}
    }
  });
  return createdPage;
};
const prisma_createRetDailyPage = async (user_id, today) => {
  if (user_id.toString() !== "undefined") {
    const page = await prisma.page.upsert({
      where: {
        user_title_unique: {
          page_title: today,
          page_user_id: user_id
        }
      },
      create: {
        page_title: today,
        Page_User: {
          connect: {
            user_id
          }
        },
        Page_Story: {
          connectOrCreate: {
            where: {
              story_user_title_unique: {
                story_title: today,
                story_user_id: user_id
              }
            },
            create: {
              story_title: today,
              Story_User: {
                connect: {
                  user_id
                }
              }
            }
          }
        }
      },
      update: {},
      include: {
        Page_Story: true,
        Page_Todo: {
          select: Useful_Todo_Include_Object,
          where: {
            todo_archived: false
          },
          orderBy: [{
            todo_done: "asc"
          }, {
            todo_description: "asc"
          }, {
            todo_archived: "asc"
          }]
        }
      }
    });
    return page;
  }
};
const prisma_deletePageByPageid = async (page_id) => {
  const deletedPage = await prisma.page.delete({
    where: {
      page_id
    }
  });
  return deletedPage;
};
const prisma_deletePageByPageTitle = async (page_title, user_id) => {
  const deletedPage = await prisma.page.delete({
    where: {
      user_title_unique: {
        page_title,
        page_user_id: user_id
      }
    }
  });
  return deletedPage;
};
const prisma_getAllPagesByUserid = async (user_id) => {
  const pages = await prisma.page.findMany({
    where: {
      Page_User: {
        is: {
          user_id
        }
      }
    }
  });
  return pages;
};
const prisma_deleteAllPagesByUserid = async (user_id) => {
  const deletedPages = await prisma.page.deleteMany({
    where: {
      Page_User: {
        is: {
          user_id
        }
      }
    }
  });
  return deletedPages;
};
const prisma_getTodobyTodoId = async (todo_id) => {
  const todo = await prisma.todo.findUnique({
    where: {
      todo_id
    },
    include: Useful_Todo_Include_Object
  });
  return todo;
};
const prisma_createTodo = async ({
  todo_description,
  page_id,
  user_id,
  todo_highlight
}) => {
  const todo = await prisma.todo.create({
    data: {
      todo_description,
      todo_highlight,
      Todo_User: {
        connect: {
          user_id
        }
      },
      Todo_Page: {
        connect: {
          page_id
        }
      }
    }
  });
  return todo;
};
const prisma_deleteTodo = async (todo_id) => {
  const deletedTodo = await prisma.todo.delete({
    where: {
      todo_id
    }
  });
  return deletedTodo;
};
const prisma_getAllTodosByPage = async (page_id, user_id) => {
  const todos = await prisma.todo.findMany({
    orderBy: [{
      todo_done: "asc"
    }, {
      todo_description: "asc"
    }, {
      todo_archived: "asc"
    }],
    where: {
      AND: {
        Todo_Page: {
          is: {
            page_id
          }
        },
        Todo_User: {
          is: {
            user_id
          }
        }
      }
    }
  });
  return todos;
};
const prisma_toggleTodoDone = async ({
  todo_id,
  todo_done
}) => {
  const todo = await prisma.todo.update({
    where: {
      todo_id
    },
    data: {
      todo_done
    }
  });
  return todo;
};
const prisma_updateTodoDescription = async ({
  todo_id,
  todo_description
}) => {
  const todo = await prisma.todo.update({
    where: {
      todo_id
    },
    data: {
      todo_description
    }
  });
  return todo;
};
const prisma_toggleArchived = async ({
  todo_id,
  todo_archived
}) => {
  const todo = await prisma.todo.update({
    where: {
      todo_id
    },
    data: {
      todo_archived
    }
  });
  return todo;
};
const prisma_getStoryByStoryId = async (story_id) => {
  const story = await prisma.story.findUnique({
    where: {
      story_id
    },
    include: {
      Story_Todo: {
        select: Useful_Todo_Include_Object,
        where: {
          todo_archived: false
        },
        orderBy: [{
          todo_done: "asc"
        }, {
          todo_description: "asc"
        }, {
          todo_archived: "asc"
        }]
      }
    }
  });
  return story;
};
const prisma_getStoryByStoryTitle = async (story_title, user_id) => {
  const story = await prisma.story.findUnique({
    where: {
      story_user_title_unique: {
        story_title,
        story_user_id: user_id
      }
    },
    include: {
      Story_Todo: {
        select: Useful_Todo_Include_Object,
        where: {
          todo_archived: false
        },
        orderBy: [{
          todo_done: "asc"
        }, {
          todo_description: "asc"
        }, {
          todo_archived: "asc"
        }]
      }
    }
  });
  return story;
};
const prisma_createUpdateStory = async ({
  story_user_id,
  page_id,
  today: story_title
}) => {
  const story = await prisma.story.upsert({
    where: {
      story_user_title_unique: {
        story_title,
        story_user_id
      }
    },
    update: {},
    create: {
      story_title,
      Story_Page: {
        connect: {
          page_id
        }
      },
      Story_User: {
        connect: {
          user_id: story_user_id
        }
      }
    },
    include: {
      Story_Todo: {
        select: Useful_Todo_Include_Object,
        where: {
          todo_archived: false
        },
        orderBy: [{
          todo_done: "asc"
        }, {
          todo_description: "asc"
        }, {
          todo_archived: "asc"
        }]
      }
    }
  });
  return story;
};
const prisma_deleteStoryByStoryid = async (story_id) => {
  const story = await prisma.story.delete({
    where: {
      story_id
    }
  });
  return story;
};
const prisma_deleteStoryByStoryTitle = async (story_title, story_user_id) => {
  const story = await prisma.story.delete({
    where: {
      story_user_title_unique: {
        story_title,
        story_user_id
      }
    }
  });
  return story;
};
const prisma_addTodoToStory = async ({
  todo_id,
  story_id
}) => {
  const story = await prisma.story.update({
    where: {
      story_id
    },
    data: {
      Story_Todo: {
        connect: {
          todo_id
        }
      }
    },
    include: {
      Story_Todo: {
        select: Useful_Todo_Include_Object,
        where: {
          todo_archived: false
        },
        orderBy: [{
          todo_done: "asc"
        }, {
          todo_description: "asc"
        }, {
          todo_archived: "asc"
        }]
      }
    }
  });
  return story;
};
const prisma_removeTodoFromStory = async ({
  todo_id,
  story_id
}) => {
  const story = await prisma.story.update({
    where: {
      story_id
    },
    data: {
      Story_Todo: {
        disconnect: {
          todo_id
        }
      }
    },
    include: {
      Story_Todo: {
        select: Useful_Todo_Include_Object,
        where: {
          todo_archived: false
        },
        orderBy: [{
          todo_done: "asc"
        }, {
          todo_description: "asc"
        }, {
          todo_archived: "asc"
        }]
      }
    }
  });
  return story;
};

/***/ })

};
;