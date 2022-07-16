const fs = require("fs");
const path = require("path");
const Admin = require("../models/admin");

module.exports = async (req, res, next) => {
  if (req.file) {
    const find = await Admin.findById(req.session.admin._id);
    if (find.adminImg) {
      const dir = path.join(__dirname, "..", "public", "images", find.adminImg);
      fs.unlink(dir, (err) => {
        if (err) console.log(err);
        else `${dir}`;
      });
    }
    next();
  } else {
    next();
  }
};
