const jwt = require("jsonwebtoken");
const { messages, http_code } = require("../constant/index.constant");
const dotenv = require("dotenv").config();

module.exports = verifyToken = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const userverify = await jwt.verify(
        req.headers.authorization,
        process.env.SECRET_KEY
      );
      req.token = userverify;
      next();
    } else {
      return res.json({
        data: {},
        message: messages.tokenmustrequired,
        status: http_code.forbidden,
      });
    }
  } catch (error) {
    return res.json({
      data: {},
      message: messages.invalidtoken,
      status: http_code.forbidden,
    });
  }
};
