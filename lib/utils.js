'use strict';

function convertObjectToQueryString(object) {

    let queryString = "";

    if (typeof object === "object"){

        // Convert it to an array with keys and values
        object = Object.entries(object);

        for (const [key, value] of object) {
            queryString += "&" + key + "=" + encodeURIComponent(value);
        }

    }

    // Replace the first & with a ? to make it a valid querystring
    queryString = queryString.replace("&", "?");
    
    return queryString;

}

function fixClanPlayerTag(tag) {

    if(!tag.startsWith("#")){
        tag = "#" + tag;
    }

    return tag;
    
}

module.exports = {
    convertObjectToQueryString,
    fixClanPlayerTag
}