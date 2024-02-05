import { errorhandler } from '../utils/error.js';
import User from './../models/userModel.js';
import bcryptjs from 'bcryptjs';


export const signup = async(req,res,next) => {
    const { username, email, password } = req.body;

    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPassword });


    try {
        await newUser.save();
        res.status(201).json({message: 'User created successfully'})
    } catch (error) {
        next(error);
    }
    
}



export const signin = async (req, res, next) => {
    const {email, password } = req.body;
    

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorhandler(404), 'User not found!');
        const validPassword = bcryptjs.compareSync(password, validPassword);
        if(!validPassword) return next(errorhandler(401,'wrong credentials!'))
    } catch (error) {
        next(error);
    }
}
