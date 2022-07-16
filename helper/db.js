const uri = 'mongodb+srv://Bobur:2vhYyYBf659w6eCm@cluster0.jnpjw6n.mongodb.net/online-edu'
const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(uri, () => {
            console.log('MongoDB connected');
        })
    } catch (error) {
        console.log(error);
    }
}