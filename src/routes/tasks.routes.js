import { Router } from "express";
import tasksController from "../controllers/tasks.controller.js";
import {authenticateToken}from '../middlewares/authenticate.middlewares.js'
const router = Router();

/* router.get("/", (req, res) => {
  res.send("Bienvenido a tasks");
});
router.post("/", (req, res) => {
  res.send("Creando una task");
}); */
router.route('/')
    .get(authenticateToken, tasksController.getTasks)
    .post(authenticateToken, tasksController.createTask);

router.route('/:id').get(tasksController.getTask)
.put(tasksController.updateTask)
.delete(tasksController.deleteTask)
.patch(tasksController.taskDone);
export default router;
