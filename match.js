const express = require('express');
const router = express.Router();
const _ = require('lodash');
const leagueMatcher = require('./league_matcher.js');

router.post('/', function(req, res, next) {
    let match_list = leagueMatcher.match(req.body.summoner1, req.body.summoner2)
})
