var express = require('express');
var router = express.Router();

/* GET home page. */
// This GET endpoint will render the website.
router.get('/', function(req, res, next) {
  // You will need to figure out a way to generate the color scheme so that you can set it in the HTML code.

  // Note: the color scheme doesn't need to be a string.
  // My guess is that it'll end up looking like: https://cssgradient.io/.
  let random_numbers = [];
  for (let i = 0; i < 12; i++) {
    random_numbers.push(Math.random() * 255);
  }
  let color_scheme =
      "background: linear-gradient(90deg, rgba("
      + random_numbers[0]
      + ","
      + random_numbers[1]
      + ","
      + random_numbers[2]
      + ","
      + random_numbers[3]
      + ") 0%, rgba("
      + random_numbers[4]
      + ","
      + random_numbers[5]
      + ","
      + random_numbers[6]
      + ","
      + random_numbers[7]
      + ") 35%, rgba("
      + random_numbers[8]
      + ","
      + random_numbers[9]
      + ","
      + random_numbers[10]
      + ","
      +random_numbers[11]
      + ") 100%);";
  res.render('index', { title: 'Express', color_scheme: color_scheme });
});

// You need to implement client-side AJAX that will expect a JSON response to update the front-end without needing to refresh the browser.
router.post('/', function(req, res, next) {
  // Note: the color scheme doesn't need to be a string.
  // My guess is that it'll end up looking like: https://cssgradient.io/.
  var color_scheme = "background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);";
  res.json({ title: 'Express', color_scheme: color_scheme });
});

module.exports = router;
