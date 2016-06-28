const signer = require('./signer');

const options = signer(
    {
        credentialScope: postman.getEnvironmentVariable('escher-credentialScope'),
        accessKeyId:  postman.getEnvironmentVariable('escher-accessKeyId'),
        apiSecret: postman.getEnvironmentVariable('escher-apiSecret')
    },
    request.url,
    request.method
);

postman.setEnvironmentVariable("date", options.headers[1][1]);
postman.setEnvironmentVariable("auth", options.headers[2][1]);
