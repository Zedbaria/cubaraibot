module.exports = {
    name: 'reaction',
    description: "pour se donner des rôles",
    async execute(client, message, args, Discord ){
        const channel = '843218877714530315';
        const teamdbz = message.guild.roles.cache.find(role => role.name ==="Equipe DBZ");
        const teamop = message.guild.roles.cache.find(role => role.name ==="Equipe One Piece");

        const teamdbzemoji = '🐉';
        const teamopemoji = '👒';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choisi ton équipe')
            .setDescription('Choisi ton équipe pour définir ton camp!\n\n'
                + `${teamdbzemoji} pour dbz\n`
                + `${teamopemoji} for one piece`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(teamdbzemoji);
        messageEmbed.react(teamopemoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === teamdbzemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(teamdbz );
                }
                if (reaction.emoji.name === teamopemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(teamopemoji);
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
                if (reaction.emoji.name === teamdbzemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(teamdbz );
                }
                if (reaction.emoji.name === teamopemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(teamopemoji);
                }
            } else {
                return;
            }
        });
    }
 
}