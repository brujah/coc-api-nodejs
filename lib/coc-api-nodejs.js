'use strict';

var api = {

    setCredentials(email, password) {
        console.log("Credentials set!");
    }

}

api.clans = {}
api.players = {}
api.leagues = {}
api.locations = {}
api.labels = {}

// API clan functions
api.clans.getClanInfo = require('../api/clans/getClanInfo');
api.clans.getClanMembers = require('../api/clans/getClanMembers');
api.clans.getClanWar = require('../api/clans/getClanWar');
api.clans.getClanWarLeague = require('../api/clans/getClanWarLeague');
api.clans.getClanWarLeagueWar = require('../api/clans/getClanWarLeagueWar');
api.clans.getClanWarLog = require('../api/clans/getClanWarLog');
api.clans.searchClans = require('../api/clans/searchClans');

// API player functions
api.players.getPlayerInfo = require('../api/players/getPlayerInfo');

// API league functions
api.leagues.getLeagueInfo = require('../api/leagues/getLeagueInfo');
api.leagues.getLeagues = require('../api/leagues/getLeagues');
api.leagues.getSeasonRankings = require('../api/leagues/getSeasonRankings');
api.leagues.getSeasons = require('../api/leagues/getSeasons');

// API location functions
api.locations.getLocationClanRankings = require('../api/locations/getLocationClanRankings');
api.locations.getLocationClanVsRankings = require('../api/locations/getLocationClanVsRankings');
api.locations.getLocationInfo = require('../api/locations/getLocationInfo');
api.locations.getLocationPlayerRankings = require('../api/locations/getLocationPlayerRankings');
api.locations.getLocationPlayerVsRankings = require('../api/locations/getLocationPlayerVsRankings');
api.locations.getLocations = require('../api/locations/getLocations');

// API label functions
api.labels.getClanLabels = require('../api/labels/getClanLabels');
api.labels.getPlayerLabels = require('../api/labels/getPlayerLabels');


module.exports = api;