export async function newToken() {
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
      token = data.access_token;
      console.log(token);
    })
    .catch((error) => {
      console.error("Error", error);
    });
}

export function initiateAuthorization() {
  const redirectUri = "http://127.0.0.1:5500/success";
  const authorizationUrl =
    "https://accounts.spotify.com/authorize" +
    "?response_type=code" +
    `&client_id=${client_id}` +
    "&scope=user-read-private" +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    "&state=your_state";

  window.location.href = authorizationUrl;
}
