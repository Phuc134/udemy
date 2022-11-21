const mongoose= require('mongoose');
const connectDB = async () => {
    try{
        mongoose
            .connect(process.env.URL_MONGO)
            .then(()=>{
                console.log('connected')
            })
    }
    catch (err){

    }
}

module.exports = connectDB;