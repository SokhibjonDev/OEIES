module.exports = {
    home: async (req, res) => {
        res.render('admin/index', {
            title: 'Admin Panel',
            layout: '../admin/layouts/main'
        })
    }
}