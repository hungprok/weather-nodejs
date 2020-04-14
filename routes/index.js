var express = require('express');
var router = express.Router();
const getGeocode = require("../utils/geocode");
const getForecast = require("../utils/forecast");

// positionSuccess = (position) =>{

//   var latitude = position.coords.latitude;
//   var longitude = position.coords.longitude;
//   // var altitude = position.coords.altitude;
//   // var accuracy = position.coords.accuracy;
//   // var altitudeAccuracy = position.coords.altitudeAccuracy;
//   // var heading = position.coords.height;
//   // var speed = position.coords.speed;
//   // var timestamp = position.timestamp;

//   console.log(latitude);
//   console.log(longitude);
// }

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(positionSuccess, positionError, { enableHighAccuracy: true });
// } else {
//   $(".map").text("Your browser is out of fashion, there's no geolocation!");
// }

/* GET home page. */
router.get('/', function(req, res) {
  if (!req.query.city) {
    return res.render("index", {
      greeting: "Hello! Enter the name of your place to get weather forecast"
    });
  }
  getGeocode(res, req.query.city, getForecast);
});

module.exports = router;
