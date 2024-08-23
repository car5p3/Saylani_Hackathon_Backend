const jwt = require("jsonwebtoken");
const Admin = require("../models/admin.model.js")
require("dotenv").config();

const Authenticated = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Login first" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token missing or malformed" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const id = decoded.userId;
    const user = await Admin.findById(id);

    if (!user) {
      return res.status(401).json({ message: "User not exist" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

  // const token = req.header("Authorization");
  // // req.cookies.jwtToken
  // if (!token) return res.json({ message: "Login first" });

  // const decoded = jwt.verify(token.slice(7), process.env.JWT_SECRET);

  // const id = decoded.userId;

  // let user = await Admin.findById(id);

  // if (!user) return res.json({ message: "User not exist" });

  // req.user = user;
  // next();
// };

module.exports = Authenticated;

// const jwt = require('jsonwebtoken')
// const { config } = require('../configs/server.config.js')

// const checkAuth = (req, res, next) => {
//     try {
//         const token = req.header('Authorization')
//         if (!token) {
//             return res.status(401).json({ success: false, message: 'unauthorized', data: null })
//         }
//         // Bearer sjjklagldjfklgjsdkljklsdjklgsdjkl
//         const isValid = jwt.verify(token.slice(7), config.secretKey)
//         console.log(isValid)
//         next()
//     } catch (error) {
//         return res.status(401).json({ success: false, message: 'unauthorized', data: error })
//     }
// }

// module.exports = {
//     checkAuth
// }