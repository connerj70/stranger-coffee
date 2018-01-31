require('dotenv').config();
const express    = require('express'),
      bodyParser = require('body-parser'),
      cors       = require('cors'),
      massive    = require('massive'),
      session    = require('express-session'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

massive({
    host: process.env.CONNECTION_STRING,
    port: 5432,
    database: 'bitcoin_app',
    user: process.env.USERNAME,
    password: process.env.PASSWORD
}).then(db => {
    app.set('db', db);
});

app.use(passport.initialize());
app.use(passport.session());

app.listen(process.env.PORT, function() {
    console.log(`listening on port ${process.env.PORT}...`);
});