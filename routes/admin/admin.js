const { Router } = require('express')
const router = Router()
const admin = require('../../controllers/admin/home/index.js')
const category = require('./category')
const courses = require('./course')

// Admin home page 
router.get('/', admin.home)

// Category
router.use('/category', category)

// Courses
router.use('/courses', courses)


module.exports = router