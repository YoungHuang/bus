/**
 * Created by Administrator on 13-12-18.
 */
//var path =  '/Default.aspx?Attion=0&Lparm=10&wangye=1';
//var path =  '/Default.aspx?Attion=1&Lid=10';
//var path =  '/Default.aspx?Attion=2&Lid=10&Lkind=0&Lpm=10&fuck=1';
module.exports = function(app){
    app.get('/',function(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Node.js</h1>');
        res.end('<p>Hello World</p>');
    });
};