import type { NextApiRequest, NextApiResponse } from "next";
import { Todo_Body, Useful_Todo, corsMethods } from "../../../constants/Types";
import {
  prisma_createTodo,
  prisma_deleteTodo,
  prisma_getTodobyTodoId,
  prisma_makeHighlight,
  prisma_toggleArchived,
  prisma_toggleTodoDone,
  prisma_updateTodoDescription
} from "../../../utils/prismaHelpers";

import Cors from "cors";
import initMiddleware from "../../../libs/InitMiddleware";

interface Query {
  todo_id?: string;
}
const cors = initMiddleware(
  Cors({
    methods: corsMethods
  })
);

export default async function handler(
  req: NextApiRequest,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  res: NextApiResponse<any>
): Promise<void> {
  await cors(req, res);

  const method = req.method;
  const body: Todo_Body = req.body;
  const { todo_id }: Query = req.query;

  switch (method) {
    case "GET": {
      const todo: Useful_Todo = await prisma_getTodobyTodoId(todo_id);

      res.status(200).json(todo);

      break;
    }

    case "POST":
      if (body.task === "toggleState") {
        const todo: Useful_Todo = await prisma_toggleTodoDone(body);

        res.status(201).json(todo);
      } else if (body.task === "updateDescription") {
        const todo: Useful_Todo = await prisma_updateTodoDescription(body);

        res.status(201).json(todo);
      } else if (body.task === "toggleArchive") {
        const todo: Useful_Todo = await prisma_toggleArchived(body);

        res.status(201).json(todo);
      } else if (body.task === "makeHighlight") {
        const todo: Useful_Todo = await prisma_makeHighlight(body.todo_id);

        res.status(201).json(todo);
      } else if (body.task === "create") {
        const todo: Useful_Todo = await prisma_createTodo(body);

        res.status(201).json(todo);
      }

      break;

    case "DELETE": {
      const deletedTodo: Useful_Todo = await prisma_deleteTodo(todo_id);

      res.status(200).json(deletedTodo);

      break;
    }
  }
}
