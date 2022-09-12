import express from "express"

import{login,logout,getUser,contact,myProfile} from "./Controlleruser.js"

import { isAuthenticated } from "./me.js";
  const userRouter=express.Router()


 
// userRouter.route("/login").post(login);

// userRouter.route("/logout").get(logout);

// userRouter.route("/user").get(getUser);

// userRouter.route("/me").get(isAuthenticated, myProfile);

userRouter.route("/contact").post(contact);