require('dotenv').config();
const express    = require('express'),
      bodyParser = require('body-parser'),
      cors       = require('cors'),
      massive    = require('massive'),
      session    = require('express-session'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      userCtrl      = require('./controllers/userController'),
      matchCtrl     = require('./controllers/matchController'),
      axios         = require('axios'),
      notificationsCtrl = require('./controllers/notificationsCtrl'),
      reviewCtrl        = require('./controllers/reviewController');

const app = express();

app.use(cors());
app.use(bodyParser({limit: '50mb'}));

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

massive({
    host: process.env.CONNECTION_STRING,
    port: 5432,
    database: 'stranger_coffee',
    user: process.env.USERNAME,
    password: process.env.PASSWORD
}).then(db => {
    app.set('db', db);
});


passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL//,
    // allowedConnections: ['github']
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    console.log(profile.identities[0]);
    db.find_user([String(profile.identities[0].user_id)]).then(user => {
        console.log("user from Auth0Strat", user)        //edit for our app
        if (user[0]) {
            // db.add_visit([String(user[0].user_id)])                             // edit for our app
            return done(null, user[0].auth_id)
        }
        else {
            db.create_user([
                profile.nickname,
                profile.name,
                profile.identities[0].user_id,
                profile.picture,
                profile.email
            ])
                .then(user => {
                    db.find_user([String(user[0].auth_id)])
                    return done(null, user[0].auth_id)
                })
        }
    })
}));

app.get(`/auth/`, passport.authenticate(`auth0`));
app.get(`/auth/callback`, passport.authenticate(`auth0`, {
    successRedirect: process.env.SUCCESS_REDIRECT,
    failureRedirect: process.env.FAILURE_REDIRECT
}))
app.get(`/auth/me`, (req, res, next) => {
    console.log("/auth/me user:", req.user)
    if (!req.user) {
        return res.status(400).send('user not found');
    }
    else return res.status(200).send(req.user);
})
app.get(`/auth/logout`, (req, res, next) => {
    let { user } = req
    req.logOut();
    res.redirect(302, `/`)
})


// MY ENDPOINTS


app.put('/api/users', userCtrl.editUser);
app.post('/api/match', matchCtrl.newMatch);
app.put('/api/match/:id', matchCtrl.updateMatchPending);
app.get('/api/match/:id', matchCtrl.getCurrentMatch);
app.get("/api/notifications/:id", notificationsCtrl.getNotifications);
app.delete('/api/notifications/:id', notificationsCtrl.deleteNotification);
app.post('/api/newreview', reviewCtrl.uploadImage);
app.post('/api/createreview', reviewCtrl.createReview);
//

setInterval(function() {
    console.log('fired');
    const db = app.get('db');
    db.select_upcoming_matches().then(resp => {
        for(let i=0; i < resp.length; i++) {
            db.create_notification([resp[i].user1_id, resp[i].user2_id, resp[i].location_name, resp[i].location, resp[i].date]).then(resp => {
                console.log(resp);
            });
        }
    });
    db.check_expired_matches().then(resp => {
        console.log(resp);
    });
}, 8.64e+7);


passport.serializeUser(function (id, done) {
    return done(null, id);
});
passport.deserializeUser(function (id, done) {
    console.log(id);
    app.get('db').find_user([id])
        .then(user => {
            return done(null, user[0]);
        })
});

app.listen(process.env.PORT, function() {
    console.log(`listening on port ${process.env.PORT}...`);
});