// schema of database
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt  =  require("jsonwebtoken");
const employeeSchema = new mongoose.Schema(
    {
      firstname:{type:String,
       required:true},

       lastname:{type:String,
         required:true},

         date:{type:Date,
         default:Date.now},
         
         email:{
             type:String,
             required:true,
             unique:true
         },
         gender:{
            type:String,
            required:true,
         },
         city:{
            type:String,
            required:true,  
         },
         password:{
            type:String,
            required:true, 
            unique:true 
         },
         tokens: [{
               token:{
                  type:String,
                  required:true,
               }
            }]
     })
    //token creation
    employeeSchema.methods.AuthToken = async function(){
try {
   const token = await jwt.sign({_id:this._id.toString()},process.env.SECRET-KEY,{
              expiresIn:"30 minutes"            
          });
          console.log(token);
          this.tokens = this.tokens.concat({token});
          await this.save();
          return token;
} catch (error) {
   console.log(error);  
}
    }



//converting password to hash
      employeeSchema.pre("save",async function(next){
         if(this.isModified("password")){
         this.password = await bcrypt.hash(this.password,10);
         next();
      }
            })
     


     // // mongoose.Collection creation
     const Register = mongoose.model("Register",employeeSchema);
     module.exports=Register;
  