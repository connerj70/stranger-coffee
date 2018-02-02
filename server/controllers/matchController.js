const axios = require('axios');

module.exports = {
    newMatch: function(req, res, next) {
        const db = req.app.get('db');
        var {id, city} = req.body;
        city = city.toLowerCase();
        id = parseInt(id);
        var lat;
        var long;
        var locationName;
        var locationVicinity;
        var matchedUser;
       
        db.get_match_user([city, id]).then(resp => {
            matchedUser = resp[0];
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.GOOGLE_GEOCODE_KEY}`).then(resp => {
                lat = resp.data.results[0].geometry.location.lat;
                long = resp.data.results[0].geometry.location.lng;
                axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.GOOGLE_PLACES_KEY}&location=${lat},${long}&radius=5000&rankby=prominence&type=cafe`).then(resp => {
                    let pertData = resp.data.results;
                    let randomNum = Math.floor(Math.random() * resp.data.results.length);
                    locationName=pertData[randomNum].name;
                    location = pertData[randomNum].vicinity;
                    let matchInfo = {
                        location_name: locationName,
                        location,
                        username: matchedUser.username
                    };
                    let id2 = parseInt(matchedUser.id);
                    var date = new Date();
                    var creationTime = new Date();
                    var numberOfDaysToAdd = 6;
                    date.setDate(date.getDate() + numberOfDaysToAdd); 
                    db.create_match([id, id2, location, locationName, creationTime, date]).then(resp => {
                        db.create_notification([id, id2, locationName, location, date]).then(resp2 => {
                            res.status(200).send(matchInfo);
                        });
                    });
                });
            });
        });
       
       
    },
    getCurrentMatch: function(req, res, next) {
        const db = req.app.get('db');
        const id = parseInt(req.params.id);
        db.get_match([id]).then(resp => {
            if(resp.length < 1) {
                res.status(200).send([{username: ''}]);
            } else {
            res.status(200).send(resp);
            }
        });
    }
};