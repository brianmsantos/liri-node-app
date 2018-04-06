require("dotenv").config();
const keys = require('./keys.js')
let [node, liri, action, input] = process.argv
let Twitter = require('twitter');
// let spotify = require('spotify');
let request = require('request');

// var spotify = new Spotify(keys.spotify);
let client = new Twitter(keys.twitter);
let fs = require('fs')

// omdb request
if (action === 'movie_this') {
    request('http://www.omdbapi.com/?apikey=trilogy&t=' + input, function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log(JSON.parse(body).Title);
        console.log(JSON.parse(body).Year);
        console.log(JSON.parse(body).Ratings[0].Source + ":", JSON.parse(body).Ratings[0].Value);
        console.log(JSON.parse(body).Ratings[1].Source + ":", JSON.parse(body).Ratings[1].Value);
        console.log(JSON.parse(body).Country);
        console.log(JSON.parse(body).Language);
        console.log(JSON.parse(body).Plot);
        console.log(JSON.parse(body).Actors);
    })
}
// getting [ { code: 32, message: 'Could not authenticate you.' } ]
if (action === 'my_tweets') {
    let params = { screen_name: 'essdeebrian' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        console.log(error)
        if (!error) {
            console.log(tweets);
        }
    });
}