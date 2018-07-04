const axios = require('axios');
const dotenv = require('dotenv');
const result = dotenv.config()

const base_api_url = "https://na1.api.riotgames.com/lol";
const match_api_url = "/match/v3/matchlists/by-account";
const summ_api_url = "/summoners/v3/summoners/by-name";

let client = {
        // {matches: [{}]}
    matchListByAccountId: function(account_id) {
        let url = `${base_api_url}${match_api_url}/${account_id}`
        console.log("API REQ: ", url)
        return axois.get(url)
    },
    // {accountId: ...}
    accountBySummonerName: function(summonerName) {
        let url = `${base_api_url}${summ_api_url}/${summoner_name}`
        console.log("API REQ: ", url)
        return axois.get(url)
    }
}

module.exports = client;