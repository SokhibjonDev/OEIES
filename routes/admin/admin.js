const { Router } = require('express')
const router = Router()
const admin = require('../../controllers/admin/home/index.js')
const category = require('./category')
const courses = require('./course')
const users = require('./users')
const settings = require('./settings')


// Admin home page 
router.get('/', admin.home)

// Category
router.use('/category', category)

// Courses
router.use('/courses', courses)

// Users
router.use('/users', users)


router.use('/settings', settings)


module.exports = router