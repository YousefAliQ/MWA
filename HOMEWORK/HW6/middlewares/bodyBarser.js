const express = require('express');

module.exports.parse_url_encoded = express.urlencoded({ extended: true });
module.exports.parse_json = express.json();