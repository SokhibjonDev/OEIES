const Joi = require('joi')
const Course = require('../../../models/courses')

module.exports = {
    home: async (req, res) => {
        const courses = await Course.find()
        res.render('admin/courses', {
            title: 'Courses page',
            layout: '../admin/layouts/main',
            courses
        })
    },

    add: async (req, res) => {
        const error = validateCourse(req.body)

        if (!!error) {
            res.status(400).send(error.message)
        }

        const course = new Course({
            name: req.body.name,
            price: req.body.price,
            img: req.body.img
        })

        await course.save()

        res.redirect('/api/courses')
    },

    getAddCourse: async (req, res) => {
        res.render('admin/addCourse', {
            title: 'Add course',
            layout: '../admin/layouts/main',

        })
    },


    delById: async (req, res) => {
        const courses = await Course.findByIdAndDelete(req.params.id)
        res.redirect('/api/courses')
    },

    UpdateById: async (req, res) => {
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

    getUpdate: async (req, res) => {
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
        img: Joi.string()
    })

    const res = schema.validate(val)

    return res.error
}