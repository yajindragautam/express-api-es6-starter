import express from "express"
import UserController from "../controllers/userController";
import Validator from "../middlewares/Validator";
import verifyToken from "../middlewares/auth";

const Route = express.Router()

// Get All Users
Route.route("/").get(UserController.findAll)

// Create User
Route.route("/").post(Validator("user"),UserController.create)

// Get Logged in User Profile
Route.route('/profile').get(verifyToken,UserController.getUserProfile)

// Update Logged In User Profile
Route.route('/profile/update').patch(verifyToken, UserController.updateUserProfile);

// Delete User Profile
Route.route('/profile/delete').delete(verifyToken, UserController.deleteUserProfile)



// Find User By Id
Route.route("/:id").get(UserController.findById)

// Update User By Id
Route.route("/update/:id").patch(UserController.updateById)

// Delete User By Id
Route.route("/delete/:id").delete(UserController.deleteById)

// Exporting Routes
export default Route
