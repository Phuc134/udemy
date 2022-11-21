const user = require('../models/user');
const bcrypt = require('bcrypt');
const e = require("express");
const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const User = await user.findOne({"email": email});
        console.log(User);
        if (User){
            const result = await bcrypt.compare(password, User.password);
            if (result) {
                res.json("login success");
            }
            else {
                res.json("password incorrect");
            }
        }
        else res.json("email doesn't exist");
    }
    catch (err){
        res.json(err.message);
    }
}

const register = async (req, res) => {
    try{
        const {email, password} = req.body;
        const checkEmail = await user.find({"email": email});
        if (checkEmail){
            res.json("Email already exists ")
        }
        req.body.password = await bcrypt.hash(password, 10);
        const User = await user.create(req.body);
        res.json(User);
    }
    catch (err){
        res.json(err.message);
    }
}

const updateUser = async () => {

}

module.exports = {register, login};
