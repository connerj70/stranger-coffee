require('dotenv').config();
const fs = require('fs');
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-west-1'});

s3 = new AWS.S3();

module.exports = {
    uploadImage: function(req, res, next) {
        
        console.log('reviewController hit!');


        var buf = new Buffer(req.body.preview.replace(/^data:image\/\w+;base64,/, ""), 'base64')
        var uploadParams = {Bucket: "stranger-coffee/review-images", Key: req.body.name, Body: buf, ACL: 'public-read', ContentType: req.body.fileType};

        // var fileStream = fs.createReadStream(req.body.preview);
        // fileStream.on('error', function(err) {
        //   console.log('File Error', err);
        // });
        // uploadParams.body = fileStream;

        s3.upload (uploadParams, function (err, data) {
            if (err) {
              console.log("Error", err);
            } if (data) {
              console.log("Upload Success", data.Location);
              res.status(200).send(data.Location);
            }
          });
    },
    createReview: function(req, res, next) {
        console.log('yo')
    }
};