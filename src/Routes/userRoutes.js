import Router  from "express";
import UserControler from "../controllers/UserController.js";
import mysession from "../middleware/verify_session.js"

const userRoutes = Router()
const instanceUserControler = new UserControler

userRoutes.get( "/", instanceUserControler.home )
userRoutes.get( "/sal_e_luz_2023", instanceUserControler.saleluz) 
userRoutes.get( "/eventos", instanceUserControler.eventos )
userRoutes.get( "/new", instanceUserControler.new )

// Authenticate
userRoutes.post( "/login", instanceUserControler.login )
userRoutes.post( "/sendform", instanceUserControler.sendForm )

userRoutes.get("/dashboard", mysession, instanceUserControler.dashboard )
userRoutes.get("/vendas", mysession, instanceUserControler.vendas )

export default userRoutes;