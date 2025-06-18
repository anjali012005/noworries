const User = require('../models/User');
const jwt = require('jsonwebtoken');

//Generating JWT token
const generateToken = (userId) =>{
    return jwt.sign({id:userId}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

//POST
exports.registerUser = async(req,res)=>{
    try {
        const {name, email, password, phone, role} = req.body;

        //if user exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message: 'User already exists'
            })
        }
        
        //create new user
        const user = await User.create({
            name, email, password, phone, role
        })
        

        res.status(200).json({
            message: 'User registered successfully',
            user:{
                id: user._id,
                name: user.name,
                role: user.role,
                token: generateToken(user._id)
            }
        })

    } catch (error) {
        console.log("register time err" + error);
        res.status(500).json({
            error: error.message
        });
    }
}

//POST
exports.loginUser = async(req, res)=>{
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message: 'Invalid Email id'
            })
        }

        const isMatch = await user.matchPassword(password);
        if(!isMatch){
            return res.status(400).json({
                message: 'Invalid password'
            })
        }

        res.status(200).json({
            message: 'Login successfully!',
            user:{
                id: user._id,
                name: user.name,
                role: user.role,
                token: generateToken(user._id)
            }
        });


    } catch (error) {
        console.log("Login err" + error);
        res.status(500).json({
            error: error.message,
            message: 'Something went wrong while login!'
        })
    }
}