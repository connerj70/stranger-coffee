module.exports = {
    getNotifications: function(req, res, next) {
        const db = req.app.get('db');

        db.get_notifications([req.params.id]).then(resp => {
            console.log(resp);
            res.status(200).send(resp);
        }).catch(err => {
            res.status(500).send(err);
        });
    },
    deleteNotification: function(req, res, next) {
        db.delete_notification([req.params.id]).then(resp => {
            res.status(200).send(resp);
        });
    }
};