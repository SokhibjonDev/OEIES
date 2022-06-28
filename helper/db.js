const uri = 'mongodb+srv://Sohibjon:android106@cluster0.g2p1q.mongodb.net/online-edu'
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