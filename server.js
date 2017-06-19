var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

//static - specify folder name to expose
app.use(express.static('public'));

app.listen(PORT, function(){
	console.log('Express started on port: ' + PORT);
})
