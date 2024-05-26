import express from "express";
import * as AccControllers from "../controllers/account.controllers"

const router = express.Router()

router.get("/", AccControllers.getAllAccounts )
router.get("/:accId", AccControllers.getAccount)
router.post("/", AccControllers.createAccount)

export default router