'use strict';

async function getSeasons(...args){

    if (typeof args[0] !== "object") {
        throw new Error("Input needs to be an object with parameters!");
    }

    let parameters = args[0];

    console.log(JSON.stringify(parameters));

}

module.exports = getSeasons;