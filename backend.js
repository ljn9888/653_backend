
var msg;
var express = require('express');
// var cors = require('cors');
var app = express();
const { spawn } = require('child_process');
const ls = spawn('python3', ['fuzz.py', 'https://uwaterloo.ca']);
var data


var str;
// app.use(cors())
ls.stdout.on('data', (data) => {
  console.log(`${data}`)
  str = `${data}`
}); 



app.get('/', function (req, res) {
  // console.log(req.body);
  // console.log(msg);
  //  res.send('Hello Worssssld');
  res.setHeader('Access-Control-Allow-Origin', '*');
 res.send(str);
})

app.post('/', function (req, res) {
  // console.log(req.body);
  // console.log(msg);
  //  res.send('Hello Worssssld');
  res.setHeader('Access-Control-Allow-Origin', '*');
 res.send('hahahahaha');
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