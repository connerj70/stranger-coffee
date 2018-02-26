module.exports = {
  getNotifications: function(req, res, next) {
    const db = req.app.get("db");

    db
      .get_notifications([req.params.id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  deleteNotification: function(req, res, next) {
    const db = req.app.get("db");
    const id = req.params.id;
    const userId = req.query.userid;
    db.delete_notification([id, userId]).then(resp => {
      res.status(200).send(resp);
    });
  }
};
