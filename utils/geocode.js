const request = require("request");

const getGeocode = (res, address, callback) => {
  const token = process.env.MAPBOX

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address
  )}.json?access_token=${token}`

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      return res.render("index", { error: "Error, cannot find your location" });
    }
    else if (!body.features) {
      console.log(body)
      return res.render("index", { error: "Feature is empty" });
    };
    const coords = body.features[0].geometry.coordinates;
    const locationName = body.features[0].place_name;
    callback(res, locationName, coords);
  });
};

module.exports = getGeocode;