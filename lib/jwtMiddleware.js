import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default function authorizeUser(req, res, next) {
  const header = req.header("Authorization");

  if (!header) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  const token = header.replace("Bearer ", "");
  console.log("Token Received:", token);

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err || !decoded) {
      return res.status(401).json({
        message: "Invalid token, please login",
      });
    }

    // attach decoded user info to request
    req.user = decoded;
    console.log("Decoded Token:", decoded);

    next(); // only call next AFTER verification
  });
}
