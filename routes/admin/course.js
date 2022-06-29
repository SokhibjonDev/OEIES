const { Router } = require('express')
const router = Router()
const courses = require('../../controllers/admin/courses/index')

// Categories home page 
router.get('/', courses.home)

// Add category form
router.get('/add', courses.getAddCourse)

// Add category
router.post('/add', courses.add)

//Delete category
router.get('/del/:id', courses.delById)

//Update form
router.get('/update/:id', courses.getUpdate)

//Update category
router.post('/update/:id', courses.UpdateById)


module.exports = router