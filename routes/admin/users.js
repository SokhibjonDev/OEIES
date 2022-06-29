const { Router } = require('express')
const router = Router()
const users = require('../../controllers/admin/users/index.js')

// Categories home page 
router.get('/', users.home)

// router.get('/add', categories.getAddCategory)

// router.post('/add', categories.add)

module.exports = router