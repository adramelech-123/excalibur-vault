import express from "express"
import * as UserController from "../controllers/user.controllers"

const router  = express.Router()

router.get("/", UserController.getAuthenticatedUser)
router.post("/signup", UserController.SignUp)
router.post("/login", UserController.Login)
router.post("/logout", UserController.Logout)

export default router