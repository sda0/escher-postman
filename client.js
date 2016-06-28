const signer = require('./signer');
const http = require('http');

const options = signer(
    {
        credentialScope: 'ingatlancom',
        accessKeyId: 'moderation_icom_v1',
        apiSecret: 'abcd1234'
    },
    'http://admin.ingatlan.docker/api/ads/20030011/m1xClusterInfo',
    'PUT'
);

console.log(options);

http.get(options, function (resp) {
    console.log(resp.headers);
    resp.on('data', function (chunk) {
        console.log(chunk.toString());
    });
}).on("error", function (e) {
    console.log("Got error: " + e.message);
});
