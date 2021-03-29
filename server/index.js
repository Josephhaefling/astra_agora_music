//Trevors userName: trevorClock
//Trevors Password: xbsg5qgiCPZdzYe5
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import albumRoutes from './routes/albums.js';

const app = express()

// app.use(bodyParser.json({limit: '30mb', extended: 'true'}))
// app.use(bodyParser.urlencoded({limit: '30mb', extended: 'true'})
app.use(cors())
app.use('/albums', [albumRoutes])

const CONNECTION_URL = 'mongodb+srv://trevorClock:xbsg5qgiCPZdzYe5@cluster0.uqywr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.warn(error.message))

    mongoose.set('useFindAndModify', false)