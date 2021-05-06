module.exports = (Discord, client, guildMember) => {

    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === "Member");

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get("839788860145008661").send(`welcome <@${guildMember.user.id}>`);
}