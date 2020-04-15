console.log('hahahahahaha')
// positionSuccess = (position) =>{

//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     // var altitude = position.coords.altitude;
//     // var accuracy = position.coords.accuracy;
//     // var altitudeAccuracy = position.coords.altitudeAccuracy;
//     // var heading = position.coords.height;
//     // var speed = position.coords.speed;
//     // var timestamp = position.timestamp;

//     console.log(latitude);
//     console.log(longitude);
// }

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(positionSuccess, positionError, { enableHighAccuracy: true });
// } else {
//     $(".map").text("Your browser is out of fashion, there's no geolocation!");
// }

navigator.geolocation.getCurrentPosition((coords) => {
    console.log(coords)
    var latitude = coords.coords.latitude;
    var longitude = coords.coords.longitude;
    console.log(latitude, longitude)
});
