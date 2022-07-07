const { Router } = require('express')
const router = Router()
const settings = require('../../controllers/admin/settings/settings')
const uploads = require('../../middleware/Upload')

router.get('/',settings.home)

router.post('/admin/edit/:id',uploads.single('img') , settings.adminUpdate)

module.exports = router