var express = require('express');
var serveStatic = require('serve-static');
var app = express();
var path = require("path");
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

// var transporter = nodemailer.createTransport();

// var mailOptions = {
// 	from: req.body.name,
// 	to: "info@jemmaslater.com",
// 	subject: "Website message",
// 	text: req.body.message,
// 	html: req.body.message
// };

// Set folder that static files live
app.use(serveStatic(__dirname + '/public'));

// Set home page route
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
});


app.post('/contact',function(req, res, next){
	console.log('Posting?')
	console.log(req.body.name);
	console.log(req.body.message);

	// Get mail working here
	// req.body won't be available anywhere else
	next();
});

app.all('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/views/contact.html'));
  //__dirname : It will resolve to your project folder.
});



app.listen(process.env.PORT || 3000, function () {
	console.log('Example app listening on port 3000!');
});