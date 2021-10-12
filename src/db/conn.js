// connection and creation of database
const mongoose = require("mongoose");
// mongoose.connect(`mongodb+srv://admin:admin@loginpage.5bngu.mongodb.net/loginpage`).then(() => console.log("connection successful")).catch((err)=>console.log(err));

mongoose.connect("mongodb://localhost:27017/loginpage").then(() => console.log("connection successful")).catch((err)=>console.log(err));
        // // create document
        // const createDocument = async ()=>{
        //     try{
        //         const blog = new Blogs({
        //             title:"title",
        //             blog:"hello"})
        //        const saved= await blog.save();
        //        console.log(saved);
        //     }
        //     catch(err){
        //         console.log(err);
        //     }
        
        // }
        // createDocument();