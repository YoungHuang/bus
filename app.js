
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var path = require('path');
var app = express();

// all environments
app.set('port', process.env.PORT || 18080);

app.use(express.logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}
routes(app);
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
