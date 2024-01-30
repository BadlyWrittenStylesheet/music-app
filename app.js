const token ='BQASYQeVldmrdSV8kwiP2NiRGlQs-EUjt0uKAJ1qeBzz5g1A8eWNt3So7Jg6n-vurPhjW1IdszyUDJSVPqlR5Ebxkxl28MakyA-kywv7v0oO-pPYx8E'
const track_id = "11dFghVXANMlKmJXsNCbNl";



// Getting the client id and client secret from a .env file
require('dotenv').config();

// console.log(process.env)

client_id = process.env.CLIENT_ID
client_secret = process.env.CLIENT_SECRET

// console.log(client_id, client_secret)

function getProfile() {
  fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error", error);
    });
}

function getTrack() {
  fetch(`https://api.spotify.com/v1/tracks/${track_id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

async function newToken() {
  await fetch(`https://accounts.spotify.com/api/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.access_token)
    //   return data.access_token
    // token_test = data.access_token
    })
    .catch((error) => {
      console.error("Error", error);
    });
}


// newToken()
getProfile()
// getTrack()