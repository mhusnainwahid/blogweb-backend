import User from "../models/auth.js";
import bcrypt, { compareSync } from "bcrypt";
import { json } from "express";
import jwt from "jsonwebtoken"
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Required fields are missing"
      });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(401).json({
        message: "User already exists"
      });
    }

    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hashSync(password, salt); 
    // console.log(hashedPassword)

    const token = jwt.sign(
        { name },
        "test352",
        {expiresIn: "1d"}
    )
    // console.log(token)

    const userObj ={
        name,
        email,
        password : hashedPassword,
        token
    }
    const user = await User.create(userObj)
    
    return res.status(201).json({
        message:"User created succesfully",
        user
    })

  } catch (error) {
    res.status(500).json({
      message: "An error occurred while signing up",
      error: error.message
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if ( !email || !password) {
      return res.status(400).json({
        message: "Required fields are missing"
      });
    }

    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(401).json({
        message: "User doesn't exist!"
      });
    }
    // console.log(existUser)
    const comparePass = bcrypt.compareSync(password,existUser.password)
    if(!comparePass){
      return res.status(401).json({
        message:"Please enter correct password"
      })
    }

     const token = jwt.sign(
        { name:existUser.name },
        "test352",
        {expiresIn: "1d"}
    )

    return res.status(201).json({
      message:"Login successfully",
      token,
      existUser
    })


  } catch (error) {
    res.status(500).json({
      message: "An error occurred while signing up",
      error: error.message
    });
  }
};
