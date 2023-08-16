import Router  from "express";
import UserControler from "../controllers/UserController.js";

const userRoutes = Router()
const instanceUserControler = new UserControler

userRoutes.get( "/", instanceUserControler.home )
userRoutes.get( "/sal_e_luz_2023", instanceUserControler.saleluz)
userRoutes.get( "/eventos", instanceUserControler.eventos)

export default userRoutes;