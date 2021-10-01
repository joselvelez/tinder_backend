import dotenv from 'dotenv';
dotenv.config();
import Express from 'express';
import Mongoose from 'mongoose';
import cors from 'cors';
import Cards from './dbCards.js';

// App Config
const app = Express();
const PORT = process.env.PORT || 8001;
const connection_url = `mongodb+srv://tinder-clone:${process.env.DBPASS}@cluster0.0vqlh.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

// Middlewares
app.use(cors());
app.use(Express.json());

// DB Config
Mongoose.connect(connection_url);

// API Endpoints
app.get('/', (req, res) => {
    return res.status(200)
        .send('Hellooooo')
});

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});

// Listener
app.listen(PORT, () => console.log(`listening on localhost: ${PORT}`));
