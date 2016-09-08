const signer = require('./signer');

const serialize = function(obj) {
    var str = [];
    for(var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
};

const getData = function (request) {
    if (_.isEmpty(request.data)) {
        return '';
    }

    if (request.dataMode === 'raw') {
        return request.data;
    }

    if (request.dataMode === "urlencoded") {
        return serialize(request.data);
    }
};

const options = signer(
    {
        credentialScope: postman.getEnvironmentVariable('escher-credentialScope'),
        accessKeyId:  postman.getEnvironmentVariable('escher-accessKeyId'),
        apiSecret: postman.getEnvironmentVariable('escher-apiSecret')
    },
    request.url,
    request.method,
    getData(request)
);

postman.setEnvironmentVariable("date", options.headers[1][1]);
postman.setEnvironmentVariable("auth", options.headers[2][1]);
