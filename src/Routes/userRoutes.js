import Router  from "express";
import UserControler from "../controllers/UserController.js";

const userRoutes = Router()
const instanceUserControler = new UserControler

userRoutes.get( "/", instanceUserControler.home )

export default userRoutes;