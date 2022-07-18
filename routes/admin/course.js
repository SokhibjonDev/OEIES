const { Router } = require('express')
const router = Router()
const courses = require('../../controllers/admin/courses/index')

// Categories home page 
router.get('/', courses.homeCourse)

// Courses in catalog
router.get('/catalog/:categoryid', courses.catalogCourses)

// Add category form
router.get('/add', courses.getAddCourse)

// Add category
router.post('/add', courses.addCourse)

//Delete category
router.get('/del/:id', courses.delByIdCourse)

//Update form
router.get('/update/:id', courses.getUpdateCourse)

//Update category
router.post('/update/:id', courses.UpdateByIdCourse)


module.exports = router