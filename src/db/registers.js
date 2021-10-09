// schema of database
const mongoose = require("mongoose");
const blogschema = new mongoose.Schema(
    {
      title:{type:String,
       required:true},
       blog:{type:String,
         required:true},
         date:{type:Date,
         default:Date.now}   
     })

     // // mongoose.Collection creation
     const Blogs = mongoose.model("Blogs",blogschema);
     module.exports=Blogs;
  