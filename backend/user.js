import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    

    name:String,
    email:{
        type:String,
        required:[true,"please enter  email"],
        unique:true
    },
    password:String,
   
    
  
    
})

export const User= mongoose.model('user',userSchema)



