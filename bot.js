const = require('discord.js');
const bot = new Discord.Client();

client.on('ready',() => {
console.log('I am ready!');
});

client.on('message', message =>
if (message.content === 'ping') {
message.reply('pong');
}
});

//THIS MUST BE WHY
client.login(proceess.env.BOT_TOKEN);
