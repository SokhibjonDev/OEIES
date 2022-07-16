const bcrypt = require('bcrypt')
const Admin = require('../../../models/admin')


module.exports = {
    async home(req, res){
        res.render('admin/settings', {
            title: 'Settings',
            layout: '../admin/layouts/main',
            admin: req.session.admin
        })
    },
    async adminUpdate (req, res){
        if(req.file){
            req.body.adminImg = req.file.filename
        }
        if(req.body.password){
            req.body.password = await bcrypt.hash(req.body.password, 10)
        }else{
            req.body.password = req.session.admin.password
        }

        await Admin.findByIdAndUpdate(req.params.id,req.body)
        req.session.admin = await Admin.findById(req.params.id)
        res.redirect('/api')
    }
}