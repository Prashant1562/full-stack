import mongoose from 'mongoose';

mongoose.set('strictQuery', false)

const Connection = async () => {
    const URL = process.env.mongoURL;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Database cannot connected: ', error.message);
    }
}


export default Connection;