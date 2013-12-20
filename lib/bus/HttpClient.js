/**
 * Created by Administrator on 13-12-18.
 */
var http = require("http");

module.exports = function (path, res) {
    "use strict";
    var dataStr = '',
        options = {
            host: 'venpoo.com',
            path: path,
            port: 9090
        },
        request = http.request(options, function (response) {
            response.setEncoding('UTF-8');
            response.on('data', function (data) {
                console.log(data.length);
                dataStr += data;
            });
            response.on('end', function () {
                console.log(dataStr);
                res.write(dataStr);
                res.end();
            });
        });

    // Write the parameters to the HTTP POST.
    request.write('\n');
    //Close the HTTP connection...
    request.end();
};


