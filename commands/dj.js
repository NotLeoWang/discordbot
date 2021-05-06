module.exports = {
    name: "dj",
    description: "Command for dj",
    execute(client, message, args, Discord) {

        let role = "839742432253575198";

        if (message.member.roles.cache.has(role)) {
            message.channel.send("No more jamming.");
            message.member.roles.remove(role).catch(console.error);
        } else {
            message.channel.send("You can jam out now.");
            message.member.roles.add(role).catch(console.error);
        }
    }
}