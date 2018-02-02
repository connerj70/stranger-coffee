module.exports = {
    newMatch: function(req, res, next) {
        const db = req.app.get('db');
        const {id, city} = req.body;
        console.log(id)
        console.log(city);
        //google places api url
        //https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=process.env.GOOGLE_PLACES_KEY&
        res.status(200).send('newMatch hit');
    }
};