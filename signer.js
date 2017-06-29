var Escher = require('escher-auth');
var Url = require('url');

module.exports = function (escherParams, url, method, data) {
    var escher = new Escher(escherParams);

    var request = {
            url: url.replace(/{{(\w+)}}/, function(p0, p1) {return postman.getEnvironmentVariable(p1);} )
        };

    l = Url.parse(request.url);

    var options = {
        host: l.hostname,
        port: l.port,
        method: method,
        url: l.path,
        path: l.path,
        headers: [
            ['host', l.host]
        ]
    };

    return escher.signRequest(options, data);
};

