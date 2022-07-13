module.exports = function (req, res, next) {
  if (!req.user.isAdmin) {
    return res.status(403).send("This site can’t be reached ");
  }
  next();
};
