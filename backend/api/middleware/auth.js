import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  
  if (req.headers.cookie) {
    const token = req.headers.cookie.split("=")[1];
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
    res.send("Token Tidak ditemukan");
  }
};
