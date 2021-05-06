module.exports = (Discord, client, message) => {
    // prefix is the "symbol" that the user uses to initiate commands to the bot
    const prefix = process.env.PREFIX;

    // checks if the message starts with the correct prefix and that the bot isn"t calling commands on its own
    // - if condition is false, we just return
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    // - else, we check the message
    const args = message.content.slice(prefix.length).split(/ +/);
    // args is an array of strings that is the message without the prefix (sliced off) and it's "arguments"
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd)

    if (command) command.execute(client, message, args, Discord);
        
}