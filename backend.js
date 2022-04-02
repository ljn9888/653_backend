
var msg;
var express = require('express');
var app = express();
const { spawn } = require('child_process');
const ls = spawn('python3', ['fuzz.py', 'https://uwaterloo.ca/coronavirus']);
var data


var str;

ls.stdout.on('data', (data) => {
  console.log(`${data}`)
  str = `${data}`
}); 



app.get('/', function (req, res) {
  // console.log(msg);
  //  res.send('Hello Worssssld');

 res.send(str);
})
 
var server = app.listen(8082, function () {
 
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})

ls.stderr.on('data', (data) => {
  console.error(`${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code $[code]`);
});