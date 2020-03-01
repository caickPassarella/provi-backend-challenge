const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const registerRouter = require('./routes/register');
const infoRouter = require('./routes/info');
const { handleError } = require('./middlewares/errorHandler');

const connect = async (database) => {
    try {
        mongoose.connection.on("connected", () => console.log('mongo is connected'))
        mongoose.connection.on("error", (err) => console.log('error on mongo', err))
        await mongoose.connect(database, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
    }
    catch (error) {
        console.error('Error while trying to connect to mongoDb', error);
    }
}

const PORT = config.PORT
const database = config.MONGOURI;

connect(database);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(handleError);
app.use('/register', registerRouter);
app.use('/info', infoRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
});