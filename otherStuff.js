/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
 */



// async function getToken() {
//   const response = await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     body: new URLSearchParams({
//       'grant_type': 'client_credentials',
//     }),
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
//     },
//   });

//   return await response.json();
// }

// async function getTopTracks(){
//     // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
//     return (await fetchWebApi(
//       'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
//     )).items;
//   }
  
//   const topTracks = getTopTracks();
//   console.log(
//     topTracks?.map(
//       ({name, artists}) =>
//         `${name} by ${artists.map(artist => artist.name).join(', ')}`
//     )
//   );

async function getTrackInfo(access_token) {
  const response = await fetch("https://api.spotify.com/v1/me/shows?offset=0&limit=20", {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + access_token },
  });

  return await response.json();
}

getToken().then(response => {
  getTrackInfo(response.access_token).then(profile => {
    console.log(profile)
  })
});


// curl --request GET --url https://api.spotify.com/v1/me/top/artists --header 'Authorization: Bearer 25c659986e664948b3799d332f34e189'
// curl "https://api.spotify.com/v1/artists/1Yox196W7bzVNZI7RBaPnf" -H "Authorization: Bearer  1a46d67f1cba4a9fbb05a836a1ce2bc1"


// curl -X POST "https://accounts.spotify.com/api/token" -H "Content-Type: application/x-www-form-urlencoded" -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"