// app.js
const express = require('express');

const port = 5500;
require('dotenv').config()

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const token ='BQCzx5-m0bqO1Yc3rBVP8QCuGOQXiCm1ldZel9jSEcjAzMVvW1EhJPTnG37kO_PfdgeHWCYx4WXkUXK3bQo2CO33vg8poug1sG7MdM-Z5ao99CT2tcU';

var redirect_uri = 'http://localhost:5500/callback';

var app = express();

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});