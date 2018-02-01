module.exports = {
    editUser: function(req, res, next) {
        const db = req.app.get('db');
        const {city, state, bio, hobby, nickname, id} = req.body;

        db.update_user([city, state, bio, hobby, nickname, id]).then(resp => {
            res.status(200).send(resp.data);
        }).catch(err => {
            res.statu(500).send(err);
        });
    }
};