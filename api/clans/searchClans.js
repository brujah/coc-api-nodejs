'use strict';

const utils = require('./../../lib/utils.js');
const axios = require('axios').default;

const token = "";
const baseURL = "https://api.clashofclans.com/v1/clans";

axios.defaults.headers.common['Authorization'] = "Bearer " + token;

async function searchClans(...args){
    
    let parameterObject = args[0];
    let queryString = "";

    if (typeof parameterObject !== "object"){
        throw new Error("Input needs to be an object with filter parameters!");
    }

    queryString = utils.convertObjectToQueryString(parameterObject)

    return await axios.get(baseURL + queryString);

}

module.exports = searchClans;