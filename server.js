import dotenv from 'dotenv';
dotenv.config();
import Express from 'express';
import Mongoose from 'mongoose';

// App Config
const app = Express();
const PORT = process.env.PORT || 8001;
const connection_url = `mongodb+srv://tinder-clone:${process.env.DBPASS}@cluster0.0vqlh.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

// Middlewares

// DB Config
Mongoose.connect(connection_url);

// API Endpoints
app.get('/', (req, res) => {
    return res.status(200)
        .send('Hellooooo')
});

// Listener
app.listen(PORT, () => console.log(`listening on localhost: ${PORT}`));
