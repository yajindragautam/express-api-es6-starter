import BaseController from "./baseController";
import authService from "../services/authService";
import User from '../models/User';
import bcrypt from 'bcrypt'

class AuthController extends BaseController{
    constructor(service){
        super(service);
    }
    // Register
    async register(req,res){
        try {
            const {password, conformPassword} = req.body;
             // Check if password and confrom password match
             if(password !== conformPassword){
                 return res.status(400).json({
                     error:false,
                     msg:'Password and Confrom Password do not matched..!'
                 })
             }
            
               const user={
                firstName:req.body.firstName,
                lastName: req.body.lastName,
                email:req.body.email,
                password,
               }
         const newUser =  await this.service.register(user);
          return res.status(200).json({
            error: false,
            data: newUser,
          })
        } catch (err) {
          return res.status(400).json({
            error: true,
            msg: err.message,
          })
        }
      }


    // Login
    async login(req,res){
        try {
            // CHECK IF USER IS EXIT WITH THAT EMAIL OR NOT
            const user = await User.where({email: req.body.email}).fetch({require:false})
           
            if(!user){
                return res.status(404).json({
                    error:false,
                    msg: 'User Not Found With That Email. Try another email or register..!'
                })
            }
            // Compare Password
            const matchPass = await bcrypt.compare(req.body.password, user.attributes.password  )
            if(!matchPass){
                return res.status(402).json({
                    error:true,
                    msg:'Invalid Password.Please try again..!'
                })
            }
            // Verify jwt token
            const userEmail = {  email:req.body.email }
               // Sign JSON Web token
            const token = await User.generateJwtToken(userEmail);

            return res.status(200).json({
                error: false,
                msg: 'Logged in success..!',
                access_token:token,
            })
        } catch (err) {
            return res.status(400).json({
                status:'fail',
                err: err.message
            })
        }
    }
    
}

// Export Auth Controller
const authController = new AuthController(authService);
export default authController; 