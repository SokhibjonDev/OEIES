const Joi = require("joi");
const Course = require("../../../models/courses");
const Category = require("../../../models/category");

module.exports = {
  async homeCourse(req, res) {
    const courses = await Course.find();
    res.render("admin/courses", {
      title: "Courses page",
      layout: "../admin/layouts/main",
      courses,
    });
  },

  async catalogCourses(req, res) {
    const courses = await Course.find({ catalogId: req.params.categoryid})

    res.render('admin/courses', {
      title: "Courses page",
      layout: "../admin/layouts/main",
      courses,
    })
  },

  async addCourse(req, res) {
    const error = validateCourse(req.body);

    if (!!error) {
      res.status(400).send(error.message);
    }

    const course = new Course({
      name: req.body.name,
      price: req.body.price,
      img: req.body.img,
      catalogId: req.body.catalogId,
    });

    await course.save();

    res.redirect("/api/courses");
  },

  async getAddCourse(req, res) {
    const category = await Category.find();
    res.render("admin/addCourse", {
      title: "Add course",
      layout: "../admin/layouts/main",
      category,
    });
  },

  async delByIdCourse(req, res) {
    const courses = await Course.findByIdAndDelete(req.params.id);
    res.redirect(`/api/courses/catalog/${courses.catalogId}`);
  },

  async UpdateByIdCourse(req, res) {
    const error = validateCourseUp(req.body);

    if (!!error) {
      await req.flash("empty", error.message);
      res.redirect(`/api/courses/update/${req.params.id}`);
      return;
    }
    const { name, price, img } = req.body;

    const courses = await Course.findByIdAndUpdate(req.params.id, {
      name,
      price,
      img,
    });

    res.redirect("/api/courses");
  },

  async getUpdateCourse(req, res) {
    const courses = await Course.findById(req.params.id);
    // console.log(req.flash()[0]);
    // console.log(req.flash().message);
    res.render("admin/updateCourses", {
      courses,
      title: "Update course",
      layout: "../admin/layouts/main",
      error: await req.flash("empty")[0],
    });
  },
};

function validateCourse(val) {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    img: Joi.string(),
    catalogId: Joi.string().required(),
  });

  const res = schema.validate(val);

  return res.error;
}

function validateCourseUp(val) {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required().min(10),
    img: Joi.string(),
  });

  const res = schema.validate(val);

  return res.error;
}
