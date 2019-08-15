var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hellow earld')
})

// passing this callback gives us feedback in terminal when server is initiated
var server = app.listen(3000, function () {
    console.log('server running at http://localhost:' + server.address().port)
})

// when yo path is hit send 'yo!'
app.get('/yo', function (req, res) {
    res.send('YO!')
})
// created start command to run server automatically in package.json by adding this to scripts
//  "start": "node index.js"
// now we can just run npm start in terminal

//installed nodemon will listen to project files and if any changes will restart server

// to use run npm run dev

// i changed this file

