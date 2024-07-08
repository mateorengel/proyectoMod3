import { Router } from "express";
import tasksController from "../controllers/tasks.controller.js";

const router = Router();

/* router.get("/", (req, res) => {
  res.send("Bienvenido a tasks");
});
router.post("/", (req, res) => {
  res.send("Creando una task");
}); */
router.route('/')
    .get(tasksController.getTasks)
    .post(tasksController.createTask);
export default router;
