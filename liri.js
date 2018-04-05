js
require("dotenv").config();
const keys = require('./keys.js')
let [node, liri, action, input] = process.argv
let twitter = require('twitter');
let spotify = require('spotify');
let request = require('request');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);