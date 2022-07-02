const { Router } = require('express')
const router = Router()
const auth = require('../../controllers/admin/auth/index.js')
const upload = require('../../middleware/Upload')

router.get('/login', auth.getLogin)

// Logout
router.get('/logout', auth.logout)

// Post login
router.post('/login', auth.login)

// Get register 
router.get('/register', auth.getRegister)

// Post register
router.post('/register',upload.single("img"), auth.register)

module.exports = router