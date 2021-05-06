// vars
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

// this is the "symbol" that the user uses to initiate commands to the bot
const prefix = config.prefix;

// arrow function to make Bot go online
// run "node ." or "node main.js" in cmd
client.once('ready', () => {
    console.log('LeoBot is Online');
});

client.on('message', message => {
    // checks if the message starts with the correct prefix and that the bot isn't calling commands on its own
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'github':
            message.channel.send("https://github.com/NotLeoWang/LeoBot");
            break;
        default:
            message.channel.send("bruh that ain't a command");
    }
});

// this has to be the last line of code in the file
client.login(config.token);