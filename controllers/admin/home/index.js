module.exports = {
    async home(req, res) {
        res.render('admin/index', {
            title: 'Admin Panel',
            layout: '../admin/layouts/main'
        })
    }
}