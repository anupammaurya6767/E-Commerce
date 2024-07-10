import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const DB_NAME = "ECOMMERCE"; // Replace with your database name

    // MongoDB Atlas URI with `mongodb+srv://`
    const URI = `mongodb+srv://noobkoda:noobkoda2004@expresso.7tk1f8j.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('Error connecting to database:', error.message);
    }
};

export default Connection;
