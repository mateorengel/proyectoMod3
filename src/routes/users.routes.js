import { Router } from "express";
import usersController from "../controllers/users.controller.js";
const router = Router();

/* router.get('/', usersController.getUsers) 

router.post('/', usersController.createUser); */

router.route('/')
.get(usersController.getUsers)
.post(usersController.createUser);
export default router;
