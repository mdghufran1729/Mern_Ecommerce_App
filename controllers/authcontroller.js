import { hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"

export const registerController=async(req,res)=>{
    try {
        const {name,email,password,phone,address}=req.body

        //validation
        if(!name){
            return res.send({error:"Name is Required"})
        }
        if(!email){
            return res.send({error:"Email is Required"})
        }
        if(!phone){
            return res.send({error:"Phone is Required"})
        }
        if(!address){
            return res.send({error:"Address is Required"})
        }

        //Check existing user
        const existingUser=await userModel.findOne({email})

        if(existingUser){
            return res.status(200).send({success:true,
                message:"Already register please login",
            })
        }
        
        //register user
        const hashedPassword=await hashPassword(password);

        //Save
        const user=await new userModel({
            name,
            email,
            phone,
            address,
            password:hashedPassword
        }).save();

        res.status(201).send({
            success:true,
            message:"User Register Successfully",
            user
        })

    } catch(error) {
        console.log(error);
        res.status(500).send({success:false,
            message:'Error in Registeration',
            error})
    }
}

