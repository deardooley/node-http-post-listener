var app = require('http').createServer(handler);
var url = require('url') ;

var statusCode = 200;

app.listen(9000);

function handler (req, res) {
  var data = '';


    console.log(req.url);
    console.log(url.parse(req.url,true));

	  var queryObject = url.parse(req.url,true).query;

  if (req.method == "POST") {
    req.on('data', function(chunk) {
      data += chunk;
    });

    req.on('end', function() {
      console.log('Received body data:');
      console.log(data.toString());

    });
  }

  console.log("Query strings: " + JSON.stringify(queryObject));

  res.writeHead(statusCode, {'Content-Type': 'text/plain'});
  res.end();
}

console.log("Listening to port 9000");
console.log("Returning status code " + statusCode.toString());
