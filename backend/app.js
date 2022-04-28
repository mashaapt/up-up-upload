require('dotenv').config({
    path: path.resolve(_dirname, '.env')
});

const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const mongo = require('mongo');
const cors = require('cors');

const profileRouts = require('routes/profiles');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(cors());


app.use('/images', express.static(path.join(_dirname, 'images')));
app.use('/api/profiles', profilesRoutes);

const ports = process.env.PORT || 3000;

mongoose.connect(
    `mongobd://localhost:27017/${process.env.DATABASE}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    app.listen(ports);
})
    .catch((err) => console.log(error));

app.use(bodyParser.json());