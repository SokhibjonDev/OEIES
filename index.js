const express = require('express')
const app = express()
const { create } = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')

require('dotenv').config()
const adminAuth = require('./routes/admin/auth')
const adminRouter = require('./routes/admin/admin')

const hbs = create({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
})

// MongoDB connect
require('./helper/db')()

// HBS connect
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('tiny'))
}
// Routing
app.use('/api/', adminAuth)
app.use('/api/', adminRouter)

const port = normalizePort(process.env.port || '5000')
app.set('port', port)


try {
    app.listen(port, () => {
        console.log(`Server listening on port: `, app.get('port'));
    })
} catch (error) {
    console.log(error);
    process.exit(0)
}

function normalizePort(val) {
    const port = parseInt(val, 10)

    if (isNaN(port)) {
        return val
    }

    if (port > 0) {
        return port
    }

    return false
}