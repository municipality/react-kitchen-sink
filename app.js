const express = require('express');
const path = require('path');
const app = express();
const Flickr = require('flickrapi');
const albumName = '[React]Homepage';

var flickrOptions = {
  api_key : "f020644253602c840d063034581dabf6",
  secret: "8eaf74a00c961534",
  user_id: "143450202@N04"
};

var flickr;
Flickr.tokenOnly(flickrOptions, function(error, f) {
  // we can now use "flickr" as our API object
  flickr = f;
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Start API calls
var router = express.Router();

router.get('/getphotopanels', function(req, res) {
  flickr.photosets.getList({
    api_key: flickrOptions.api_key,
    user_id: flickrOptions.user_id,
  }, function(err, result) {
    if(!err) {
        var resultset = result.photosets.photoset;
        var set = {};
        for(var i = 0; i < resultset.length; i++) {
          // console.log(resultset[i].title);
          if(resultset[i].title['_content'].toLowerCase() === albumName.toLowerCase()) {
            set = resultset[i];
            break;
          }
        }
        flickr.photosets.getPhotos({
          api_key: flickrOptions.api_key,
          user_id: flickrOptions.user_id,
          photoset_id: set.id
        }, function(err, photosetResult) {
          if(!err) {
            var ret = photosetResult.photoset.photo.map(function(photo, i) {
              // console.log(photo);
              var farm = photo.farm;
              var id = photo.id;
              var server = photo.server;
              var secret = photo.secret;
              return {
                id: i,
                src: 'https://farm' + farm + '.staticflickr.com/' + server + '/' +
                     id + '_' + secret + '_z.jpg'
              }
            });
            res.json(ret);
          }
        });

    }

  });
});

app.use('/api', router);

app.use(express.static(path.join(__dirname, 'build')));

//For routing, if no matching path, send it to react to handle
app.all('*', function(req, res) {
  console.log("[TRACE] Server 404 request:" + req.originalUrl);
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

module.exports = app;
