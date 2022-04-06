
var msg;
var express = require('express');
// var cors = require('cors');
var app = express();

app.all('/', function (req, res) {
  // console.log(req.body);
  // console.log(msg);
  //  res.send('Hello Worssssld');
  console.log(req.headers.url);
  res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
 res.send('hehe   e');
})

app.all('/sendurl',                               (req, res)=> {
  // console.log(req.body);
  // console.log(msg);
  //  res.send('Hello Worssssld');
  res.setHeader('Access-Control-Allow-Origin', '*');
 res.send('sendurl');
})
// app.post('/', function (req, res) {
//   console.log(req.body);
//   // console.log(msg);
//   //  res.send('Hello Worssssld');
//   res.setHeader('Access-Control-Allow-Origin', '*');
//  res.send('hahahahaha');
// })

var server = app.listen(8082, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 

})


