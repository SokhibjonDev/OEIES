const { Router } = require('express')
const router = Router()
const auth = require('../../controllers/admin/auth/index.js')

router.get('/login', auth.getLogin)

router.post('/login', auth.login)

router.get('/register', auth.getRegister)

router.post('/register', auth.register)

module.exports = router