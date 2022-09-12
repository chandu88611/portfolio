// import mongoose from "mongoose";
import mongoose from "mongoose"
import express, { urlencoded } from "express"
import cookieParser from "cookie-Parser"
// import {User} from "./user.js"
import cors from "cors";
import path from "path";

// import jwt from "jsonwebtoken";
// import { login } from "./Controlleruser";
// import { userRouter } from "./Routesuser";
// import cloudinary from "cloudinary"
// const cookieParser=require("cookie-Parser"
// const userRouter=express.Router()
const app=express();
app.use(cors())
app.use(cookieParser())
app.use(express.json({limit:"50mb"}))
app.use(urlencoded({extended:true,limit:"50mb"}))
const port=process.env.PORT ||5000;
 const MONGO_URI="mongodb+srv://chandan:2xcVW4SPf.SdAYU@cluster0.wnqqekd.mongodb.net/?retryWrites=true&w=majority"


 mongoose.connect(MONGO_URI,{
    
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected")
}).catch((err)=>{
console.log(err)
})
 
//  const connectDatabase = () => {
//     mongoose
//       .connect(MONGO_URI)
//       .then((c) => {
//         console.log(`Mongodb connect }`);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };
  
// connectDatabase();
// app.get('/',(req,res)=>res.status(200).send('hi'))
 ////////////////////control
//  app.post("/login", async (req, res) => {
//     try {
//       const { email, password } = req.body;
  
//       const user = await User.findOne({ email, password });
  
//       if (!user) {
//         return res.status(404).json({
//           success: false,
//           message: "Invalid email or password",
//         });
//       }
  
//       const token = jwt.sign({ _id: user._id }, "11688#Chandu");
  
//       res
//         .status(200)
//         .cookie("token", token, {
//           expires: new Date(Date.now() + 600000),
//           httpOnly: true,
//         })
//         .json({
//           success: true,
//           message: "Logged In Successfully",
//         });
//     } catch (error) {
//       return res.status(400).json({
//         success: false,
//         message: error.message,
//       });
//     }})
  
  
//   export const logout = async (req, res) => {
//     try {
//       res
//         .status(200)
//         .cookie("token", null, {
//           expires: new Date(Date.now()),
//           httpOnly: true,
//         })
//         .json({
//           success: true,
//           message: "Logged Out Successfully",
//         });
//     } catch (error) {
//       return res.status(400).json({
//         success: false,
//         message: error.message,
//       });
//     }
//   };
  ///////////////////////////////////////////////
//  userRouter.route("/login").post(login)
 //database
//  app.use("/app/v1",userRouter)

    //cloudinary

    // cloudinary.v2.config({
    //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    //     api_key: process.env.CLOUDINARY_API_KEY,
    //     api_secret: process.env.CLOUDINARY_API_SECRET,
    //   });







    app.use(express.static(path.resolve("../frontend/build")));

    app.get("/", (req, res) => {
      res.sendFile(path.resolve("../frontend/build/index.html"));
    });




























app.listen(port ,()=>{
    console.log(`listening at:${port}`)
})

