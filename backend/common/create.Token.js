const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const createToken = async (data)=>{
   const token = await jwt.sign(data,process.env.SECRET_KEY,{expiresIn:"24h"});
   return token;
}

module.exports = createToken;