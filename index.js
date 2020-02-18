const api = require('./lib/coc-api-nodejs');

(async () => {
    
    try {
        
        await api.setCredentials("andreAS", "korv");

        await api.clans.searchClans();

    } catch (err) {
        console.log(err);
    }
    
    
})()

