const Joi = require("joi");
const Admin = require("../../../models/admin");

module.exports = {
  async getLogin(req, res) {
    res.render("admin/login", {
      title: "Login",
      layout: "../admin/layouts/auth",
    });
  },
  async login(req, res) {
    try {
        if (!req.body) {
            res.send("Login required");
          }
          const admin = await Admin.findOne({ username: req.body.username });
          if (!admin) {
            res.send("Username is incorrect");
            return;
          }
          if (admin.password !== req.body.password) {
            res.send("Password is incorrect");
            return;
          }
          res.redirect('/api')
    } catch (error) {
        console.log(error);
        res.redirect('/api/login')
    }
  },
  async getRegister(req, res) {
    res.render("admin/register", {
      title: "Register",
      layout: "../admin/layouts/auth",
    });
  },
  async register(req, res) {
    const error = loginValidation(req.body);

    if (!!error) {
      res.redirect("/api/register");
      return;
    }

    const admin = new Admin(req.body);
    await admin.save();
    res.redirect("/api/login");
  },
};

function loginValidation(val) {
  const schema = Joi.object({
    name: Joi.string().required,
    surname: Joi.string(),
    username: Joi.string().required,
    password: Joi.string().required,
    adminImg: Joi.string(),
  });

  const result = schema.validate(val);

  result.error;

  return;
}
