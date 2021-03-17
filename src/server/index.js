var path = require('path')
const express = require('express')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const dotenv = require('dotenv');
dotenv.config();
const APIKEY=process.env.API_KEY
const BASE_URL='https://api.meaningcloud.com/sentiment-2.1'


const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8090, function () {
    console.log('Example app listening on port 8090!')
})

app.get('/api', async function (req, res) {
    var articleUrl = req.query.url;
    var lang = req.query.lang;
    const appUrl =  BASE_URL+`?key=${APIKEY}&lang=${lang}&url=${articleUrl}`
    console.log(appUrl)
    const response = await fetch(appUrl)
    res.send(await response.json())
})