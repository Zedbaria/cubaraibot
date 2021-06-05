module.exports = {
    name: 'reaction',
    description: "pour se donner des rôles",
    async execute(client, message, args, Discord ){

        const channel = '836500749314818078';
        const verif = message.guild.roles.cache.find(role => role.name ==="Membres");

        const teamdbzemoji = '✅';

        let embed = new Discord.MessageEmbed()
            .setColor('#33cc33')
            .setTitle('Vérification')
            .setDescription('Bonjour à tous, veuillez réagir au message afin de pouvoir accéder au serveur.\n\n');
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(teamdbzemoji);
        
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === teamdbzemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(verif);
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
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(verif);
                }
            } else {
                return;
            }
        });
    
}
}