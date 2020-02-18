const api = require('./lib/coc-api-nodejs');

(async () => {
    
    try {
        
        await api.setCredentials("my-developer-email", "my-developer-password");

        await api.clans.searchClans();

    } catch (err) {
        console.log(err);
    }
    
    
})()

