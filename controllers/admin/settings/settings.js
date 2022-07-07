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
        if(req.body.password){
            req.body.password = await bcrypt.hash(req.body.password, 10)
        }
        const admin = await Admin.findByIdAndUpdate(req.params.id,req.body)
        res.redirect('/api')
    }
}