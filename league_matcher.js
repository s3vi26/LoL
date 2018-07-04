const leagueClient = require('./client.js');

let matcher = {
    match: function(summoner1, summoner2) {
        [summ1, summ2] = [summoner1,summoner2].map(summ => {
            return summoner.findOrCreate(sum)
        })
        return {summoner1: summ1, summoner2: summ2}
    }
}

module.exports = matcher;