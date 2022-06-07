import BaseController from "./baseController"
import UserService from "../services/userService"
import User from '../models/User'
import { use } from "bcrypt/promises"

class UserController extends BaseController {
  constructor(service) {
    super(service)
  }
  // create user
  async create(req, res) {
    try {
      const { firstName, lastName, email, password, conformPassword } = req.body
      const newUser = await this.service.create({
        firstName,
        lastName,
        email,
        password,
        conformPassword,
      })
      return res.status(200).json({
        status: "success",
        data: newUser,
      })
    } catch (err) {
      return res.status(400).json({
        status: "fail",
        err: err.message,
      })
    }
  }

  // Get All User
  async findAll(req, res) {
    try {
      const users = await this.service.findAll()
      return res.status(200).json({
        status: "success",
        data: users,
      })
    } catch (err) {
      return res.status(400).json({
        status: "fail",
        err: err.message,
      })
    }
  }
  // Get User By Id

  async findById(req, res) {
    try {
      const users = await this.service.findById(req.params.id)
      console.log(users)
      return res.status(200).json({
        status: "success",
        data: users,
      })
    } catch (err) {
      return res.status(400).json({
        status: "fail",
        err: err.message,
      })
    }
  }

  //Update User By Id
  async updateById(req, res) {
    try {
      const { firstName, lastName, email } = req.body
      const data = { firstName, lastName, email }
      const user = await this.service.updateById(req.params.id, data)

      return res.status(200).json({
        status: "success",
        message: "User Updated Success",
        data: user,
      })
    } catch (err) {
      return res.status(400).json({
        status: "fail",
        err: err.message,
      })
    }
  }

  // Get Logged in user Profile
  async getUserProfile(req,res){
    try { 
      // Find User Profile suing token email
      const {email} = req.user;
      // Find user profile
      const user = await User.where({email:email}).fetch();
      // Return response
      return res.status(200).json({
        status:'success',
        data:{
          firstName: user.attributes.firstName,
          lastName:user.attributes.lastName,
          email: user.attributes.email,
          password: user.attributes.password
        }
      })
    } catch (err) {
      // Empty response
      if(err.message === 'EmptyResponse') res.send("You have deleted Your account already ..!")
       res.status(400).json({
        status: "fail",
        err: err.message,
      })

     // console.log(err);

    }
  }
  // Update Logged In User Profile
  async updateUserProfile(req,res){
    try{
      // Find User Profile suing token email
      const {email} = req.user;
      // Find user profile
      const user = await User.where({email:email}).fetch();
      // Get date from req body
      const {firstName,lastName} = req.body;
      // Update Data
      user.attributes.firstName = firstName;
      user.attributes.lastName = lastName;
      // save the user
      const updatedUser = await user.save({firstName:firstName,lastName:lastName});
      return res.status(200).json({
        status:'success',
        data:updatedUser,
      })
    }catch(err){
       res.status(400).json({
        status: "fail",
        err: err.message,
      });
      console.log(err);
    }
  }

   // Delete User Profile
   async deleteUserProfile(req,res){
    try{
      // Find User Profile suing token email
      console.log("req user :", req.use);
      const {email} = req.user;
      // Find user profile
      const user = await User.where({email:email}).fetch();
      // Delete 
      await user.destroy();
      
      return res.status(200).json({
        status:'success',
        msg:"User Deleted Success",
      })
    }catch(err){
       res.status(400).json({
        status: "fail",
        err: err.message,
      });
      
    }
  }


}

// Exporting controller
const userController = new UserController(UserService)
export default userController
