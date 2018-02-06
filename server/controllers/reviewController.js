require('dotenv').config();
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-west-1'});

s3 = new AWS.S3({apiVersion: '2006-03-01'});




module.exports = {
    uploadImage: function(req, res, next) {
        console.log(req.body.name);
        console.log(req.body.preview);
        console.log('reviewController hit!');
        var uploadParams = {Bucket: "s3-us-west-1.amazonaws.com/stranger-coffee/review-images", Key: req.body.name, Body: req.body.preview};

        s3.upload (uploadParams, function (err, data) {
            if (err) {
              console.log("Error", err);
            } if (data) {
              console.log("Upload Success", data.Location);
            }
          });
    }
};