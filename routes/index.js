/**
 * Created by Administrator on 13-12-19.
 */
var client = require('./../lib/bus/HttpClient');
module.exports = function (app) {
    "use strict";
    app.get('/', function (req, res) {
        res.redirect('/index.html');
    });

    app.get('/Default.aspx?*', function (req, res) {
        var path = req.url;
        res.writeHead(200, {'Content-Type': 'text/xml'});
        client(path, res);
    });
};