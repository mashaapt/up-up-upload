require('dotenv').config();

const path = require('path');
const bodyParser = require('bosy-parser');
const express = require('express');
const mongo = require('mongo');
const cors = require('cors');

const profileRouts = require('routes/profiles');
const app = express();
const ports = process.env.PORT || 3000;

