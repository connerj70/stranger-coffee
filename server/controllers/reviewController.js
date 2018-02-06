const aws = require('aws-sdk');

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

module.exports = {
    sign: function(filename, filetype) {
        var s3 = new aws.S3();

        var params = {
            Bucket: SOME_BUCKET,
            Key: filename,
            Expires: 60,
            ContentType: filetype
        };

        s3.getSignedUrl('pubObject', params, function(err, data) {
            if (err) {
                console.log(err);
                return err;
            } else {
                return data;
            }
        });
    }
};