const leagueClient = require('./client.js');
const store = require('./mongo-store.js');

const getAccountId = function(summoner_name) {
    store.find(summoner_name).then(summoner => {
        if (summoner.found) {
            return summoner.account_id
        } else {
            return leagueClient.accountBySummonerName(summoner_name)
                .then(summoner => {
                    store.add({
                        name: summoner_name,
                        account_id: summoner.account_id
                    })
                    return summoner.accountId
                })
        }
    }).catch(error => console.log("couldnt get ID", error))
}

const build = function(name, match_list) {
    return {summoner: name, match_list: match_list}
}

let summoner = {
    findOrCreate: function(summoner_name) {
        let account_id = getAccountId(summoner_name)
        return leagueClient.matchListByAccountId(account_id)
            .then(match_list => {
        })
        .catch(error => {
            console.log('Error returning match list for ${summoner_name}', error)
            return
        })
    }
}

module.exports = summoner;