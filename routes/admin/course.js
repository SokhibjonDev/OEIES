const { Router } = require('express')
const router = Router()
const courses = require('../../controllers/admin/courses/index')

// Categories home page 
router.get('/', courses.home)

// Add category form
router.get('/add', courses.getAddCourse)

// Add category
router.post('/add', courses.add)

module.exports = router