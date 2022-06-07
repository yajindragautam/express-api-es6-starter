import express from "express"
import taskCtrl from "@Controllers/tasksController.js"
import verifyToken from "../middlewares/auth"
import Validator from "../middlewares/Validator"
const Router = express.Router()

Router.get("/",verifyToken , taskCtrl.findAll)
Router.get("/:id",  verifyToken,taskCtrl.findById)
Router.post("/", Validator("task"),verifyToken, taskCtrl.create)
Router.put("/:id", Validator("updateTask"),verifyToken, taskCtrl.updateById)
Router.delete("/:id", verifyToken, taskCtrl.deleteById)

export default Router
