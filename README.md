# coc-api-nodejs
A NodeJS wrapper for the Clash of Clans API

```
const api = require('./lib/coc-api-nodejs');

(async () => {
    
    try {
        
        await api.setCredentials("my-developer-email", "my-developer-password");

        let clans = await api.clans.searchClans({
            Name: "best-clan-ever",
            warFrequency: "alot",
            locationId: 666,
            minMembers: 1,
            maxMembers: 2,
            minClanPoints: 1,
            minClanLevel: 9,
            limit: 3,
            after: "",
            before: "",
            labelIds: ""
        });

        let players = await api.clans.getClanMembers({
            clanTag: "#123abc", // Required parameter
            limit: 10,
            after: "",
            before: ""
        })

    } catch (err) {
        console.log(err);
    }
    
    
})()
```