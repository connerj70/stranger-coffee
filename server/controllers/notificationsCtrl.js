module.exports = {
    getNotifications: function(req, res, next) {
        const db = req.app.get('db');

        db.get_notifications([req.params.id]).then(resp => {
            res.status(200).send(resp.data);
        }).catch(err => {
            res.status(500).send(err);
        });
    }
};