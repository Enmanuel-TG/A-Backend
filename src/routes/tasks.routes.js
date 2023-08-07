import { Router } from "express";
import { authRequired } from "../middlewares/validertoken.js";
import {
  getTask,
  createTasks,
  getTasks,
  updateTasks,
  deleteTasks,
} from "../controllers/tasks.controller.js";

import { createTaskSchema } from "../schemas/task.schemas.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTask);
router.post(
  "/tasks",
  authRequired,
  validateSchema(createTaskSchema),
  createTasks
);
router.delete("/tasks/:id", authRequired, deleteTasks);
router.put("/tasks/:id", authRequired, updateTasks);

export default router;
