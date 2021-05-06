// vars
const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const client = new Discord.Client();

// prefix is the "symbol" that the user uses to initiate commands to the bot
const prefix = config.prefix;

// collection of commands the bot will use
client.commands = new Discord.Collection();

// variable that has all the commands
// - we also make sure that these files are javascript files
const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));

// a loop to add all the commands to the client
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// arrow function to make Bot go online
// run "node ." or "node main.js" in cmd
client.once("ready", () => {
    console.log("LeoBot is Online");
});

// function for adding a user into the default role we made
// also sends a welcome message :)
client.on("guildMemberAdd", guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === "Member");

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get("839788860145008661").send(`welcome <@${guildMember.user.id}>`);
});

client.on("message", message => {
    // checks if the message starts with the correct prefix and that the bot isn"t calling commands on its own
    // - if condition is false, we just return
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    // - else, we check the message
    const args = message.content.slice(prefix.length).split(/ +/);
    // args is an array of strings that is the message without the prefix (sliced off) and it's "arguments"
    const command = args.shift().toLowerCase();

    // give response matching command
    switch (command) {
        case "github":
            client.commands.get("github").execute(message, args);
            break;
        case "dj":
            client.commands.get("dj").execute(message, args);
            break;
        case "clear":
            client.commands.get("clear").execute(message, args);
            break;
        default:
            message.channel.send("bruh that ain't a command");
    }
});

// this has to be the last line of code in the file
client.login(config.token);