import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  // console.log(req.headers)

  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token);
    try {
      const user = jwt.verify(token, process.env.SECRET_KEY);
      req.user = user;
      next();
    } catch (error) { 
      res.status(401);
      res.send("Token Invalid");
    }
  }else{
    res.status(401);
    res.send("Empty Token ");
  }
};

// import jwt from "jsonwebtoken";
// import "dotenv/config";

// export const verifyToken = (req, res, next)=>{
//     const token = req.cookies.token;
//     // console.log(token);
//     if (!token) {
//         return res.status(401).send("invalid");
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         // console.log(decoded);
//         next();
//     } catch (error) {
//         res.status(403).send("Invalid token");
//     }
// }

