import { Router } from "express";
import usersController from "../controllers/users.controller.js";
import { authenticateToken } from "../middlewares/authenticate.middlewares.js";

const router = Router();

/* router.get('/', usersController.getUsers) 

router.post('/', usersController.createUser); */

router
  .route("/")
  .get(usersController.getUsers)
  .post(usersController.createUser);

router
  .route("/:id")
  .get(authenticateToken,usersController.getUser)
  .put(authenticateToken,usersController.updateUser)
  .delete(authenticateToken,usersController.deleteUser)
  .patch(authenticateToken,usersController.activaInactive);

  router.get(':id/tasks',authenticateToken,usersController.getTasks);
export default router;
