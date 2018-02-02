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
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=provo&key=${process.env.GOOGLE_GEOCODE_KEY}`).then(resp => {
                lat = resp.data.results[0].geometry.location.lat;
                long = resp.data.results[0].geometry.location.lng;
                axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.GOOGLE_PLACES_KEY}&location=${lat},${long}&radius=5000&rankby=prominence&type=cafe`).then(resp => {
                    let pertData = resp.data.results;
                    let randomNum = Math.floor(Math.random() * resp.data.results.length);
                    locationName=pertData[randomNum].name;
                    locationVicinity = pertData[randomNum].vicinity;
                    let matchInfo = {
                        locationName,
                        locationVicinity,
                        matchedUser: matchedUser
                    };
                    res.status(200).send(matchInfo);
                });
            });
        })
       
       
    }
};