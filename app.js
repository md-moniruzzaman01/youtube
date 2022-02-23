//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const port = 3000
// const _ = require("lodash");
 
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const fetch = require('node-fetch');
// const urlencodedParser = bodyParser.urlencoded({ extended: false })

let posts 
let chanal 
let api_key = 'api here';
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 54,
    regionCode: 'BD'
}))
.then(res => res.json())
.then(data => {
      posts = data
    


})
.catch(err => console.log(err));

















 
app.use(express.static('public'))

app.get("/", function(req, res){
  res.render("home",{posts:posts});
});


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})