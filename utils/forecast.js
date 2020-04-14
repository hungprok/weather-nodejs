const request = require("request");

const getForecast = (res, location, coords) => {
  const token = process.env.DARK_SKY
  const url = `https://api.darksky.net/forecast/${token}/${coords[1]},${coords[0]}?units=si`

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      return res.render("index", {
        error: `cannot fetch weather at your location`
      });
    }
    return res.render("index", {
      forecast: {
        location: location,
        temperature: body.currently.temperature,
        summary: body.currently.summary
      }
    });
  });
};

module.exports = getForecast;