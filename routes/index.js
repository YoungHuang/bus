/**
 * Created by Administrator on 13-12-19.
 */
var client = require('./../public/javascripts/HttpClient');
module.exports = function(app){
    app.get('/',function(req, res){
        var path =  '/Default.aspx?Attion=2&Lid=10&Lkind=0&Lpm=10&fuck=1';
//        var path =  '/Default.aspx?Attion=1&Lid=10';
        res.writeHead(200, {'Content-Type':'text/xml'});
        client(path, res);
    });
};