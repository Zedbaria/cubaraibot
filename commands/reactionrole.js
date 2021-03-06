module.exports = {
    name: 'reactionrole',
    description: "pour se donner des rรดles",
    async execute(client, message, args, Discord ){
       
       
        const channel = '839526471067238472';
        const annonces = message.guild.roles.cache.find(role => role.name === "Notifs Annonces");
        const events = message.guild.roles.cache.find(role => role.name === "Notifs Events");
        const twitch = message.guild.roles.cache.find(role => role.name === "Notifs Twitch");
        const barre = message.guild.roles.cache.find(r => r.id === "842708293834899456");
 
        const yellowTeamEmoji = '๐';
        const blueTeamEmoji = '๐';
        const twitchemoji = '๐ฃ';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#33cc33')
            .setTitle('Choisis les notifs que tu veux recevoir')
            .setDescription('Voici la liste des notifs :\n\n'
                + `${yellowTeamEmoji} pour les annonces\n`
                + `${blueTeamEmoji} pour les events\n`
                + `${twitchemoji} pour twitch`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
        messageEmbed.react(twitchemoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(annonces);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(barre);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(events);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(barre);
                }
                if (reaction.emoji.name === twitchemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(twitch);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(barre);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(annonces);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(events);
                    
                }
                if (reaction.emoji.name === twitchemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(twitch);
                }

            } else {
                
                return;

            }
        });
    
}
}