require("dotenv").config();
const fs = require("fs");
const AWS = require("aws-sdk");

AWS.config.update({ region: "us-west-1" });

s3 = new AWS.S3();

module.exports = {
  uploadImage: function(req, res, next) {

    var buf = new Buffer(
      req.body.preview.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );
    var uploadParams = {
      Bucket: "stranger-coffee/review-images",
      Key: req.body.name,
      Body: buf,
      ACL: "public-read",
      ContentType: req.body.fileType
    };

    s3.upload(uploadParams, function(err, data) {
      if (err) {
        console.log("Error", err);
      }
      if (data) {
        res.status(200).send(data.Location);
      }
    });
  },
  createReview: function(req, res, next) {
    const db = req.app.get("db");
    const { reviewerId, revieweeId, review, stars, imageUrls } = req.body;
    db
      .create_review([reviewerId, revieweeId, review, stars])
      .then(resp => {
        for (var i = 0; i < imageUrls.length; i++) {
          db
            .append_image_urls([imageUrls[i], resp[0].review_id])
            .then(resp => {});
        }
        res.status(200).send("Review Created");
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  getReviews: function(req, res, next) {
    const db = req.app.get("db");
    db.get_random_reviews().then(resp => {
      res.status(200).send(resp);
    });
  },
  getReview: function(req, res, next) {
    const db = req.app.get("db");
    const id = req.params.id;
    db.get_review([id]).then(resp => {
      res.status(200).send(resp);
    });
  }
};
