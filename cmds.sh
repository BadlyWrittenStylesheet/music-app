#!/bin/bash
client_id = 'f14d06e162a34e63b7c9117a29d63999'; 
client_secret = 'e5abecc6139148839528034011a30e37';
token = "BQA392q2CDnlpedWUjRx6GCUmYx7LspUAt76ikFbkG0-dAjxUFrVompZJdW1c9shf-J7YLTQ0Jy2gQ5ngPHwtoe7UY0YmvAwsI4lPHHjqXs8DamgU3s"


# Token:
# BQArydgGUJO24vI6GwHOr1i3UQECR8i4aPEGs81z5aEXw3JvLj5VMn_DmWvG-FtIb-gFZW-EmhSBEUPmCzQ7_zs8qfckmPGPLmHgttPSUEzgQ2ZYC7o

# curl --request GET --url https://api.spotify.com/v1/me/top/artists --header 'Authorization: Bearer 25c659986e664948b3799d332f34e189'
# curl "https://api.spotify.com/v1/artists/1Yox196W7bzVNZI7RBaPnf" -H "Authorization: Bearer  1a46d67f1cba4a9fbb05a836a1ce2bc1"
# curl "https://api.spotify.com/v1/artists/1Yox196W7bzVNZI7RBaPnf" -H "Authorization: Bearer  25c659986e664948b3799d332f34e189"


curl -X POST "https://accounts.spotify.com/api/token" -H "Content-Type: application/x-www-form-urlencoded" -d "grant_type=client_credentials&client_id=f14d06e162a34e63b7c9117a29d63999&client_secret=e5abecc6139148839528034011a30e37"

curl "https://api.spotify.com/v1/artists/1Yox196W7bzVNZI7RBaPnf" -H "Authorization: Bearer BQDIh-Isl44zc3umheWRxCMXBRlxNrzyp4AcJ5D80uDWViTVmrgD08bX5Jg1XPr6VtiJz8gLY2cwnOMfRK7q3gkXr9IZFAYeCThac2ec4ZLV6JHAwmY"


curl --request GET --url https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl --header 'Authorization: Bearer BQBEyLwvO4JfAPJr7ayYanG5Z7ZDkqg9MpLrw-fPEzJip_xUVEPV4qjucWUfpxdWjhs_Y4UHEAObYjpQAf1nkNexOxdVPEyWOwCgYh7u9z-G_4tyvXI'


curl --request GET --url https://api.spotify.com/v1/me --header 'Authorization: Bearer BQA392q2CDnlpedWUjRx6GCUmYx7LspUAt76ikFbkG0-dAjxUFrVompZJdW1c9shf-J7YLTQ0Jy2gQ5ngPHwtoe7UY0YmvAwsI4lPHHjqXs8DamgU3s'

curl --request GET --url https://api.spotify.com/v1/me --header 