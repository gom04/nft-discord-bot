const CacheService = require('../cache')
const ttl = 60; //cache for 60 seconds;
const cache = new CacheService(ttl);

module.exports = async (client) =>{
    const guild = client.guilds.cache.get('763005538119450685'); ////เลขช่องuser/////
    setInterval(() =>{

        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('912290484808998983');////เลข ห้อง แชท/////
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}