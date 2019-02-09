const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_SECRET || "JWT SECRET NOT FOUND in .env";

module.exports = {
  authenticate,
  generateToken
};

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) {
        res.status(401).json(err);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({
      message: "No token provided, must be set on Authorization Header"
    });
  }
}

function generateToken(user) {
  const payload = {
    username: user.username
  };
  const secret = jwtKey;
  return jwt.sign(payload, secret);
}
