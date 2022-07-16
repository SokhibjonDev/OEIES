const Joi = require('joi')
const Course = require('../../../models/courses')
const Category = require('../../../models/category')

module.exports = {
    async homeCourse(req, res) {
        const courses = await Course.find()
        res.render('admin/courses', {
            title: 'Courses page',
            layout: '../admin/layouts/main',
            courses
        })
    },

    async addCourse(req, res) {
        const error = validateCourse(req.body)

        if (!!error) {
            res.status(400).send(error.message)
        }

        const course = new Course({
            name: req.body.name,
            price: req.body.price,
            img: req.body.img,
            catalogId: req.body.catalogId
        })

        await course.save()

        res.redirect('/api/courses')
    },

    async getAddCourse(req, res) {
        const category = await Category.find()
        res.render('admin/addCourse', {
            title: 'Add course',
            layout: '../admin/layouts/main',
            category
        })
    },


    async delByIdCourse(req, res) {
        const courses = await Course.findByIdAndDelete(req.params.id)
        res.redirect('/api/courses')
    },

    async UpdateByIdCourse(req, res) {
        const {
            name,
            price,
            img
        } = req.body

        const courses = await Course.findByIdAndUpdate(req.params.id, {
            name,
            price,
            img
        })

        res.redirect('/api/courses')
    },

    async getUpdateCourse(req, res) {
        const courses = await Course.findById(req.params.id)
        res.render('admin/updateCourses', {
            courses,
            title: 'Update course',
            layout: '../admin/layouts/main'
        })
    }
}

function validateCourse(val) {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        img: Joi.string(),
        catalogId: Joi.string().required()
    })

    const res = schema.validate(val)

    return res.error
}