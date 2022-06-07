import bookshelf from "../config/bookshelf.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import res from "express/lib/response";
// import knex from "knex";
//import bookshelf from'../config/bookshelf'

const tableName = "users"
// Creating User Model
const User = bookshelf.model(
  "User",
  {
    tableName: tableName,
    // Encrypt password
    initialize() {
      this.on('saving', async(model) => {
        console.log('Hook is working');
        const userPassword = model.get('password');
        const encryptPass = await bcrypt.hash(userPassword,12);
        model.set('password',encryptPass);
      });



    }, 
  },
  {
    // Static class properties and methods
    getTableName: function () {
      return tableName
    },
    // Generate Jwt token
    generateJwtToken: async function(user){
      try {
        const {email} = user;
         return  jwt.sign({email:email},process.env.JWT_SECRET);
      } catch (err) {
        return res.send("The error part :", err);
      }
    }
  },


)

// Exporting Model
export default User
