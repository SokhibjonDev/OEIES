const { Router } = require('express')
const router = Router()
const settings = require('../../controllers/admin/settings/settings')
const uploads = require('../../middleware/Upload')
const deleteMiddleware = require("../../middleware/dalateImg");


router.get('/',settings.home)

router.post('/admin/edit/:id',uploads.single('adminImg'),deleteMiddleware , settings.adminUpdate)

module.exports = router