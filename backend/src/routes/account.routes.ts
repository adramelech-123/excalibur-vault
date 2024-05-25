import express from "express";
import * as AccControllers from "../controllers/account.controllers"

const router = express.Router()

router.get("/", AccControllers.getAccount )

export default router