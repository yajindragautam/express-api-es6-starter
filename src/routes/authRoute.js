import express from "express"
import authController from '../controllers/authController';
import Validator from "../middlewares/Validator"
const Route = express.Router()

// Login User
Route.route("/user/register").post(Validator("userRegister"),authController.register)

// Login User
Route.route("/user/login").post(authController.login);

// Protected Route


// Exporting Routes
export default Route
