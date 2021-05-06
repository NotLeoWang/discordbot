// vars
const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();

// collection of commands the bot will use
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

["command_handler", "event_handler"].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

// this has to be the last line of code in the file
client.login(process.env.TOKEN);