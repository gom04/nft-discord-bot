const CacheService = require('../cache')

const ttl = 60; //cache for 60 seconds;
const cache = new CacheService(ttl);
  

module.exports = {
 name: 'clear',
 async execute(message, args){
	 if(!args[0]) return message.reply("lorem")  
	 if(isNaN(args[0])) return message.reply("lorem") 
	 if(args[0] > 100) return message.reply("lorem") 
	 if(args[0] < 1) return message.reply("lorem"),

	 await message.channel.messages.fetch({ }).then(messages =>{ 
		message.channel.bulkDelete(messages);
	 });

 }
};