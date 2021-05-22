const util = require('minecraft-server-util');
module.exports=
{
    name:'serv',
    description : "les informations du serveur minecraft",
    execute(client, message, args, Discord)
    {

       util.status('play.cubaraibe.fr',{port : 25565}).then((response)=>
       {
            const embed = new Discord.MessageEmbed()
            .setColor('#00cc00')
            .setTitle('Serveur Minecraft')
            .addFields(
                {name : 'Ip du Serveur',value:response.host},
                {name : 'Joueurs en Ligne',value:response.onlinePlayers},
                {name : 'Joueurs Max',value : response.maxPlayers},
                {name : 'Version',value : response.version}
            )
            .setFooter("N'hésitez pas à rejoindre");
            message.channel.send(embed)

       }).catch((error)=>
       {
        message.channel.send('Une erreur est survenue lors de la recherche du serveur');
        throw error;
       })
    }
}