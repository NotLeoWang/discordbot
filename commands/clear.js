module.exports = {
    name: "clear",
    description: "Command for clearing messages",
    async execute(message, args) {
        // if no number given
        if (!args[0]) return message.reply("Enter the amount of messages you want to clear");
        
        // if not a number
        if (isNaN(args[0])) return message.reply("Enter a number bruh");

        // if number is greater than 100
        if (args[0] > 100) return message.reply("I don't want to remove that many messages");

        // if number is 0 or negative
        if (args[0] < 1) return message.reply("That's not possible lol");

        // this is waiting for all the messages to be fetched and then bulk deleting them all
        // - the number of messages depends on args[0]
        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}