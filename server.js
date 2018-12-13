// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);


var http = require("http");

var usbDetect = require('usb-detection');
 
usbDetect.startMonitoring();
 
// Detect add/insert
/*usbDetect.on('add', function(device) { console.log('add', device); });
usbDetect.on('add:vid', function(device) { console.log('add', device); });
usbDetect.on('add:vid:pid', function(device) { console.log('add', device); });
 
// Detect remove
usbDetect.on('remove', function(device) { console.log('remove', device); });
usbDetect.on('remove:vid', function(device) { console.log('remove', device); });
usbDetect.on('remove:vid:pid', function(device) { console.log('remove', device); });
 
// Detect add or remove (change)
usbDetect.on('change', function(device) { console.log('change', device); });
usbDetect.on('change:vid', function(device) { console.log('change', device); });
usbDetect.on('change:vid:pid', function(device) { console.log('change', device); });
 
// Get a list of USB devices on your system, optionally filtered by `vid` or `pid`
// usbDetect.find(function(err, devices) { console.log('find', devices, err); });
usbDetect.find(5967, function(err, devices) { console.log('find', devices, err); });
// usbDetect.find(2821, 7772, function(err, devices) { console.log('find', devices, err); });
// Promise version of `find`:
usbDetect.find().then(function(devices) { console.log(devices); }).catch(function(err) { console.log(err); });*/
 
// Allow the process to exit
usbDetect.stopMonitoring()

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');